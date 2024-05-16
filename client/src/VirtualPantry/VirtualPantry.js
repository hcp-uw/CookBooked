// VirtualPantry.js
// This component renders the VirtualPantry where users can view and manage their pantry items.
// It includes a header, a list of PantryCard components to display individual pantry items,
// and functionality to update the quantity of each item. 

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, ScrollView } from "react-native"; 
import styles from './VirtualPantry.style';
import PantryCard from '../Common/Cards/Pantry/PantryCard';
import { getDatabase, ref, push, onValue, update } from "firebase/database";
import firebase from "../../firebase";


const VirtualPantry = ({ navigation }) => {
  // State to store the fetched items
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebase);
    const itemsRef = ref(db, 'foodItems');

    // Subscribe to the itemsRef and listen continuously for data changes
    const unsubscribe = onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        const loadedItems = [];
        for (const key in data) {
            loadedItems.push({
                id: key,
                ...data[key]
            });
        }
        setItems(loadedItems); // Update the state with the fetched items
    });

    // Cleanup function to remove the listener when the component unmounts
    return () => unsubscribe();
    }, []); // Empty dependency array to run only on component mount


    /**
     * This function updates the quantity of an item with the given itemId by the specified amount.
     * It first updates the local state to reflect the new quantity, then updates the corresponding
     * entry in the Firebase database to ensure data consistency.
     * @param itemId - The unique identifier for the pantry item to be updated.
     * @param amount - The amount by which to adjust the item's quantity. Can be positive or negative.
     */
    const handleUpdateQuantity = (itemId, amount) => {
      setItems(prevItems => {
        // Find the index of the item to be updated
        const index = prevItems.findIndex(item => item.id === itemId);

        if (index !== -1) {
          // Calculate the new quantity, ensuring it does not go below zero
          const updatedNum = Math.max(0, prevItems[index].quantity + amount);

          // Create a new item object with the updated quantity
          const updatedItem = { ...prevItems[index], quantity: updatedNum };

          // Create a new array with the updated item
          const updatedItems = [
            ...prevItems.slice(0, index),
            updatedItem,
            ...prevItems.slice(index + 1)
          ];

          // Update the database with the new quantity
          const db = getDatabase(firebase);
          const itemRef = ref(db, 'foodItems/' + itemId);
          update(itemRef, { quantity: updatedNum })
            .then(() => console.log("Updated successfully!"))
            .catch(error => console.error("Error updating item: ", error));

          // Return the updated items array to update the state
          return updatedItems;
        }
        // Return the previous state if the item was not found
        return prevItems;
      });
    };


    return (
    <View>
      {/* // Header of Page  */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Pantry</Text>
      </View>

      {/* Divider line (would want to move styling to themes?) */}
      <View
        style={{
          borderColor: '#F2555A',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 1,
          margin: 10
        }}
      />

      {/* Pantry Cards Section */}
      <ScrollView style={styles.container}>
        {/* <PantryCard
          itemId={"1"}
          itemName={"Apple"}
          lastAdded={"01 Jan, 2023"}
          numItems={2}
          // handleNavigate={() => router.push(``)}
        /> */}

        {items.map(item => (
                <PantryCard
                    key={item.id}
                    itemId={item.id}
                    itemName={item.name}
                    lastAdded={item.lastAdded}
                    numItems={item.quantity} 
                    handleUpdateQuantity={handleUpdateQuantity}
                    // handleNavigate={() => handleNavigate(item.id)}
                />
            ))}
      </ScrollView>
    </View>
    )
}


export default VirtualPantry;

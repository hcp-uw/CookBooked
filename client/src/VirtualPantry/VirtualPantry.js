// VirtualPantry.js
// This component renders the VirtualPantry where users can view and manage their pantry items.
// It includes a header, a list of PantryCard components to display individual pantry items,
// and functionality to update the quantity of each item. 

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, ScrollView, Image} from "react-native"; 
import styles from './VirtualPantry.style';
import { useUser } from '../../UserContext';
import PantryCard from '../Common/Cards/Pantry/PantryCard';
import { getDatabase, ref, push, onValue, update } from "firebase/database";
import firebase from "../../../firebase";
import { DIVIDER, images } from '../constants';

const VirtualPantry = ({ navigation }) => {
  // State to store the fetched items
  const { user } = useUser();
  const [items, setItems] = useState([]);
  const [pantryText, setPantryText] = useState('');

  console.log(user.uid);

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

    // This is for setting the pantry information at the top of the page
    // useEffect(() => {
    //     const init = async () => {
    //         try {
    //             const data = await loadPantry();
    //             setPantryText(formatPantryText(data));
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setPantryText('No data available');
    //         }
    //     };
    //     init();
    // }, []);

    const formatPantryText = (data) => {
        if (!data) return 'No data available';
        let pantryText = `${data.username}'s Pantry Contents:\n`;
        for (let [item, quantity] of Object.entries(data.pantry)) {
            pantryText += `${item}: ${quantity}\n`;
        }
        return pantryText;
    };

    async function loadPantry() {
      try {
          let response = await fetch('http://localhost:3000/pantry');
          let data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching data:', error);
          return null;
      }
  }
  
  async function getReceiptItems() {
      try {
          let response = await fetch('http://localhost:3000/receipts?receipt=receipt.json');
          let data = await response.text();
          return data;
      } catch (error) {
          console.error('Error fetching data:', error);
          return null;
      }
  }

  async function postReceiptItems() {
      let uri = "receipt.json"
      try {
          await fetch("http://localhost:3000/receipts", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({uri: uri})
          });
      } catch (error) {
          console.error('Error posting data:', error);
      }
  }

  async function addToPantry(item, amount) {
    try {
      let response = await fetch("http://localhost:3000/pantry/add", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({item: item, quantity: amount, uid: user.uid})
      });
      if (response.status == 200) setPantryText(`Added ${amount} ${item}(s) to pantry`);
  } catch (error) {
      console.error('Error posting data:', error);
  }
}

  async function remove_from_pantry(item, amount) {
      try {
        await fetch("http://localhost:3000/pantry/remove", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({item: item, quantity: amount})
        });
    } catch (error) {
        console.error('Error posting data:', error);
    }
  }

  const handleRefresh = async (type) => {
    if (type === "pantry") {
      try {
        const data = await loadPantry();
        setPantryText(formatPantryText(data));
      } catch (error) {
        console.error('Error fetching data:', error);
        setPantryText('No data available');
      }
    } else if (type === "get_receipt") {
      try {
        const data = await getReceiptItems();
        setPantryText(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPantryText('No data available');
      }
    } else if (type === "post_receipt") {
      try {
        const response = await postReceiptItems();
        setPantryText("Pantry Updated");
      } catch (error) {
        console.error('Error fetching data:', error);
        setPantryText('No data available');
      }
    } else if (type === "add_to_pantry") {
      try {
        const response = await addToPantry("Carrot", 5);
        setPantryText("Pantry Updated");
      } catch (error) {
        console.error('Error fetching data:', error);
        setPantryText('No data available');
      }
    } else if (type === "remove_from_pantry") {
      try {
        const response = await remove_from_pantry("Carrot", 3);
        setPantryText("Pantry Updated");
      } catch (error) {
        console.error('Error fetching data:', error);
        setPantryText('No data available');
      }
    }
  };

  return (
    <ScrollView>
      <View>
        {/* // Header of Page  */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Pantry</Text>
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={styles.userProfileImage}
          />
          <Button
            onPress={() => addToPantry("Carrot", 5)}
            title="Add Items to Pantry"
            color="#841584"
            accessibilityLabel="Button to get add items to pantry"
          />
          {/* <Button
            onPress={() => handleRefresh("pantry")}
            title="Get Pantry Items"
            color="#841584"
            accessibilityLabel="Button to refresh pantry"
          />
          <Button
            onPress={() => handleRefresh("get_receipt")}
            title="Get Receipt Items"
            color="#841584"
            accessibilityLabel="Button to get receipt items"
          />
          <Button
            onPress={() => handleRefresh("post_receipt")}
            title="Add Receipt Items to Pantry"
            color="#841584"
            accessibilityLabel="Button to get add items from receipt to pantry"
          />
          
          <Button
            onPress={() => handleRefresh("remove_from_pantry")}
            title="Remove Items from Pantry"
            color="#841584"
            accessibilityLabel="Button to remove items from pantry"
          /> */}
        </View>

        {/* Divider line (would want to move styling to themes?) */}
        <View style={DIVIDER.header}/>

        <View>
          <Text>{pantryText}</Text>
        </View>

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
    </ScrollView>
  )
}


export default VirtualPantry;

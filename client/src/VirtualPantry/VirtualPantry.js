// VirtualPantry.js
// This component renders the VirtualPantry where users can view and manage their pantry items.
// It includes a header, a list of PantryCard components to display individual pantry items,
// and functionality to update the quantity of each item. 

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, ScrollView, Image, TouchableOpacity } from "react-native"; 
import styles from './VirtualPantry.style';
import { useUser } from '../../UserContext';
import PantryCard from '../Common/Cards/Pantry/PantryCard';
import { getDatabase, ref, push, onValue, update } from "firebase/database";
import firebase from "../../../firebase";
import { DIVIDER, images } from '../constants';

const VirtualPantry = ({ navigation }) => {
  // State to store the fetched items
  const { user } = useUser();
  // const [items, setItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [pantryItems, setPantryItems] = useState(null);
  const [pantryText, setPantryText] = useState('');


  useEffect(() => {
    setLoggedIn(!!user);
  }, [user]);

  useEffect(() => {
    if (loggedIn) {
      const db = getDatabase(firebase);
      const itemsRef = ref(db, 'foodItems');
      loadPantry(user.uid);
    }
  }, [loggedIn]);

  /**
   * This function updates the quantity of an item with the given itemId by the specified amount.
   * It first updates the local state to reflect the new quantity, then updates the corresponding
   * entry in the Firebase database to ensure data consistency.
   * @param itemId - The unique identifier for the pantry item to be updated.
   * @param amount - The amount by which to adjust the item's quantity. Can be positive or negative.
   */
  const handleUpdateQuantity = (itemId, amount) => {
    // setItems(prevItems => {
    //   // Find the index of the item to be updated
    //   const index = prevItems.findIndex(item => item.id === itemId);

    //   if (index !== -1) {
    //     // Calculate the new quantity, ensuring it does not go below zero
    //     const updatedNum = Math.max(0, prevItems[index].quantity + amount);

    //     // Create a new item object with the updated quantity
    //     const updatedItem = { ...prevItems[index], quantity: updatedNum };

    //     // Create a new array with the updated item
    //     const updatedItems = [
    //       ...prevItems.slice(0, index),
    //       updatedItem,
    //       ...prevItems.slice(index + 1)
    //     ];

    //     // Update the database with the new quantity
    //     const db = getDatabase(firebase);
    //     const itemRef = ref(db, 'foodItems/' + itemId);
    //     update(itemRef, { quantity: updatedNum })
    //       .then(() => console.log("Updated successfully!"))
    //       .catch(error => console.error("Error updating item: ", error));

    //     // Return the updated items array to update the state
    //     return updatedItems;
    //   }
    //   // Return the previous state if the item was not found
    //   return prevItems;
    // });
  };

  async function loadPantry(uid) {
    try {
        let response = await fetch(`http://localhost:3000/pantry?uid=${uid}`);
        let data = await response.json();
        if (Object.keys(data.pantry).length === 0) setPantryText("Your Pantry is Empty! Let's Add Some Items!");
        else setPantryItems(data.pantry);
    } catch (error) {
        console.error('Error fetching data:', error);
        setPantryItems(null);
    }
  }
  
  // async function getReceiptItems() {
  //     try {
  //         let response = await fetch('http://localhost:3000/receipts?receipt=receipt.json');
  //         let data = await response.text();
  //         return data;
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //         return null;
  //     }
  // }

  // async function postReceiptItems() {
  //     let uri = "receipt.json"
  //     try {
  //         await fetch("http://localhost:3000/receipts", {
  //             method: "POST",
  //             headers: {
  //               'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({uri: uri})
  //         });
  //     } catch (error) {
  //         console.error('Error posting data:', error);
  //     }
  // }

  async function addToPantry(item, amount) {
    try {
      let response = await fetch("http://localhost:3000/pantry/add", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({item: item, quantity: amount, uid: user.uid})
      });
      if (response.status == 200) setPantryText(`Added ${amount} ${item.toLowerCase()}(s) to pantry`); loadPantry(user.uid);
    } catch (error) {
        console.error('Error posting data:', error);
    }
  }

  // async function remove_from_pantry(item, amount) {
  //     try {
  //       await fetch("http://localhost:3000/pantry/remove", {
  //           method: "POST",
  //           headers: {
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({item: item, quantity: amount})
  //       });
  //   } catch (error) {
  //       console.error('Error posting data:', error);
  //   }
  // }

  function handleImagePress() {
    if (loggedIn) {
      navigation.navigate("ProfilePage")
    } else {
      navigation.navigate("StartPage")
    }
  }

  const items = pantryItems
        ? Object.keys(pantryItems).map(key => ({
            name: key,
            lastAdded: pantryItems[key].last_added,
            quantity: pantryItems[key].quantity,
        }))
        : [];

  return (
    <ScrollView>
      {/* // Header of Page  */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Pantry</Text>
        {/* { loggedIn ? (
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                source={images.avatar}
                resizeMode="contain"
                style={styles.userProfileImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity onPress={handleImagePress} style={styles.button}>
              <Text style={styles.login}>Login/Signup</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </View>

      {/* Divider line (would want to move styling to themes?) */}
      <View style={DIVIDER.header}/>
      
      <View>
        <Text>{pantryText}</Text>
      </View>

      {/* Pantry Cards Section */}
      { loggedIn ? (
        <ScrollView style={styles.container}>
          {items.map(item => (
                  <PantryCard
                      key={item.name}
                      itemName={item.name}
                      lastAdded={item.lastAdded}
                      numItems={item.quantity} 
                      handleUpdateQuantity={handleUpdateQuantity}
                      // handleNavigate={() => handleNavigate(item.id)}
                  />
              ))}
          <Button
            onPress={() => addToPantry("CarroT", 5)}
            title="Add Items to Pantry"
            color="#841584"
            accessibilityLabel="Button to get add items to pantry"
          />
        </ScrollView> 
      ) : (
        <View>
          <Text>Log in to see your Virtual Pantry!</Text>
        </View>
      )}
    </ScrollView>
  )
}


export default VirtualPantry;

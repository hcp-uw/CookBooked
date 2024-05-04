import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import firebase from "../../firebase";
import PantryCard from '../Common/Cards/Pantry/PantryCard';
import styles from './VirtualPantry.style';


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
                    numItems={item.numItems}
                    handleNavigate={() => handleNavigate(item.id)}
                />
            ))}
      </ScrollView>
    </View>
    )
}


export default VirtualPantry;

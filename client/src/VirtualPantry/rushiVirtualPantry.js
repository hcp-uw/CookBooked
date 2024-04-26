import React from 'react';
import { Text, StyleSheet, Button, View } from "react-native"; 
import { getDatabase, ref, push } from "firebase/database";
import firebase from "../../firebase";

const VirtualPantry = ({ navigation }) => {

    const addFoodItem = () => {
        // Get a reference to the database service
        const database = getDatabase(firebase);

        // Reference to the "foodItems" node in your database
        const foodItemsRef = ref(database, 'foodItems');

        // Data to be added
        const newFoodItem = {
            name: "Apple",
            quantity: 5,
            // Add any other fields you need
        };

        // Add the data to the "foodItems" node
        push(foodItemsRef, newFoodItem)
            .then(() => {
                console.log("Food item added successfully");
            })
            .catch((error) => {
                console.error("Error adding food item: ", error);
            });
    };

    return (
        <View>
            <Text style={styles.text}>VirtualPantry.</Text>
            <Button title="Add Food Item" onPress={addFoodItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
    }
});

export default VirtualPantry;
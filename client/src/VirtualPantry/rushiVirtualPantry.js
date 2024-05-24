import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, TextInput, ScrollView } from "react-native"; 
import { getDatabase, ref, push, child, get, update } from "firebase/database";
import firebaseApp from "../../firebase";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const VirtualPantry = ({ navigation }) => {
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [foodItems, setFoodItems] = useState({});

    // const Tab = createBottomTabNavigator();

    // Load food from the database 
    useEffect(() => {
        const database = getDatabase(firebaseApp);
        const foodItemsRef = ref(database, 'foodItems');
        
        get(child(foodItemsRef, 'foodItems')).then((snapshot) => {
            if (snapshot.exists()) {
                setFoodItems(snapshot.val());
            }
        }).catch((error) => {
            console.error("Error getting food items: ", error);
        });
    }, []);

    const addFoodItem = () => {
        const database = getDatabase(firebaseApp);
        const foodItemsRef = ref(database, 'foodItems');
        const newItemAmount = parseInt(itemAmount);

        // If the item already exists, update its quantity
        if (foodItems.hasOwnProperty(itemName)) {
            const updatedFoodItems = { ...foodItems };
            updatedFoodItems[itemName] += newItemAmount;

            update(child(foodItemsRef, 'foodItems'), updatedFoodItems)
                .then(() => {
                    console.log("Food item updated successfully");
                    setItemName("");
                    setItemAmount("");
                    setFoodItems(updatedFoodItems);
                })
                .catch((error) => {
                    console.error("Error updating food item: ", error);
                });
        } else {
            // If the item does not exist, add it
            update(child(foodItemsRef, 'foodItems'), { ...foodItems, [itemName]: newItemAmount })
                .then(() => {
                    console.log("Food item added successfully");
                    setItemName("");
                    setItemAmount("");
                    setFoodItems({ ...foodItems, [itemName]: newItemAmount });
                })
                .catch((error) => {
                    console.error("Error adding food item: ", error);
                });
        }
    };

    const removeFoodItem = () => {
        const database = getDatabase(firebaseApp);
        const foodItemsRef = ref(database, 'foodItems');
        const newItemAmount = parseInt(itemAmount);

        // If the item already exists, update its quantity
        if (foodItems.hasOwnProperty(itemName)) {
            const updatedFoodItems = { ...foodItems };
            updatedFoodItems[itemName] -= newItemAmount;

            update(child(foodItemsRef, 'foodItems'), updatedFoodItems)
                .then(() => {
                    console.log("Food item updated successfully");
                    setItemName("");
                    setItemAmount("");
                    setFoodItems(updatedFoodItems);
                })
                .catch((error) => {
                    console.error("Error updating food item: ", error);
                });
        } else {
            console.error("Error adding food item: ", error);                   
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Virtual Pantry</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter food item name"
                    value={itemName}
                    onChangeText={(text) => setItemName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    value={itemAmount}
                    onChangeText={(text) => setItemAmount(text)}
                    keyboardType="numeric"
                />
                <Button title="Add Food Item" onPress={addFoodItem} />
                <Button title="Remove Food Item" onPress={removeFoodItem} />
            </View>
            <ScrollView style={styles.foodList}>
                {Object.entries(foodItems).map(([name, amount]) => (
                    <View style={styles.foodItem} key={name}>
                        <Text style={styles.itemName}>{name}</Text>
                        <Text style={styles.itemAmount}>{amount}</Text>
                    </View>
                ))}
            </ScrollView>
            {/* <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} />
            </Tab.Navigator> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        marginEnd: 10,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        borderColor: "orange",
    },
    foodList: {
        width: '100%',
    },
    foodItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 5,
        borderRadius: 5,
    },
    itemName: {
        fontSize: 18,
    },
    itemAmount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default VirtualPantry;
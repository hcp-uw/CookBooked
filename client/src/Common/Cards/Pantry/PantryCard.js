// Import core React functionality from the React package.
import React from 'react'
// Import specific components from React Native for building the user interface.
import { View, Text, TouchableOpacity, Image } from 'react-native'
// Import specific styles for the ReceiptCard component
import styles from './PantryCard.style'
import { getDatabase, ref, push, update } from "firebase/database";
import firebase from "../../../../firebase";


const PantryCard = ({ itemId, itemName, lastAdded, numItems, handleNavigate }) => {
    // console.log("Rendering ReceiptCard", storeName, date, numItems);


    const updateQuantity = (amount) => {
        const updatedNum = Math.max(0, numItems + amount);
    
        const db = getDatabase(firebase);
        const itemRef = ref(db, 'foodItems/' + itemId);
    
        update(itemRef, {
            numItems: updatedNum
        }).then(() => {
            console.log("Updated successfully!");
            setNumItems(updatedNum);  // Update local state to trigger re-render
        }).catch(error => {
            console.error("Error updating item: ", error);
        });
    };

    return (
        <TouchableOpacity
        style={styles.container}
        onPress={handleNavigate}
        >
        <TouchableOpacity style={styles.logoContainer}>
            {/* <Image
            source={require('../../../../assets/receipts/receipt1.jpeg')}
            resizeMode="contain"
            style={styles.logoImage}
            /> */}
        </TouchableOpacity>  

        <View style={styles.textContainer}>
            <Text style={styles.itemName} numberOfLines={1}>
                {itemName}
            </Text>

            <Text style={styles.lastAdded}>Last Added: {lastAdded}</Text>
            
            <Text style={styles.numItems}>Quantity: {numItems}</Text>

            <View style={styles.adjustButtons}>
                    <TouchableOpacity onPress={() => updateQuantity(-1)} style={styles.adjustButtonLeft}>
                        <Text>-</Text>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity onPress={() => updateQuantity(1)} style={styles.adjustButtonRight}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </TouchableOpacity>
    )
}

export default PantryCard
// PantryCard.js
// This component renders an individual PantryCard, displaying details of a pantry item such as
// its name, the date it was last added, and its current quantity. It also provides buttons to
// adjust the quantity of the item, calling the handleUpdateQuantity function passed down from
// the parent component.

// Import core React functionality from the React package.
import React from 'react'
// Import specific components from React Native for building the user interface.
import { View, Text, TouchableOpacity, Image } from 'react-native'
// Import specific styles for the ReceiptCard component
import styles from './PantryCard.style'
import { getDatabase, ref, push, update } from "firebase/database";
import firebase from "../../../../firebase";


const PantryCard = ({ itemId, itemName, lastAdded, numItems, handleUpdateQuantity, handleNavigate }) => {
    // console.log("Rendering ReceiptCard", storeName, date, numItems);


    /**
     * This function calls the handleUpdateQuantity function passed down from the parent
     * component, VirtualPantry, with the itemId and the amount to adjust the quantity by.
     * @param amount - The amount to adjust the quantity by. Can be positive or negative.
     */      
    const updateQuantity = (amount) => {
        handleUpdateQuantity(itemId, amount);
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
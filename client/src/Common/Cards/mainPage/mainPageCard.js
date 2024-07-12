// mainPageCard.js
// This component renders an individual homePageCard, displaying receipes and such.

// Import core React functionality from the React package.
import React from 'react'
// Import specific components from React Native for building the user interface.
import { View, Text, TouchableOpacity, Image } from 'react-native'
// Import specific styles for the ReceiptCard component
import styles from './mainPageCard.style'
import { getDatabase, ref, push, update } from "firebase/database";
import firebase from "../../../../firebase";
import { images } from '../../../constants';

// later add hooks for how many minutes and how many ingredients it takes to create it
const MainPageCard = ({ image, itemName}) => {
    // console.log("Rendering ReceiptCard", storeName, date, numItems);


    // /**
    //  * This function calls the handleUpdateQuantity function passed down from the parent
    //  * component, VirtualPantry, with the itemId and the amount to adjust the quantity by.
    //  * @param amount - The amount to adjust the quantity by. Can be positive or negative.
    //  */      
    // const updateQuantity = (amount) => {
    //     handleUpdateQuantity(itemId, amount);
    // };

    return (
        <View style={styles.shadowContainer}>
            <View style={styles.container}>
                {/* <Image
                    source={require(image)}
                    style={styles.image}
                /> */}
                <Text>{itemName}</Text>
            </View>
        </View>
    )
}

export default MainPageCard
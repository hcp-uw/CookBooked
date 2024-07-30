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
import firebase from "../../../../../firebase";
import { images } from '../../../constants';


const PantryCard = ({ itemName, lastAdded, numItems, handleUpdateQuantity, handleNavigate }) => {
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
        <View style={styles.shadowContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoContainer}>
                    <Image
                    source={images.circlePlaceholder}
                    resizeMode="contain"
                    style={styles.logoImage}
                    />
                </TouchableOpacity>  

                <View style={styles.textContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.itemName} numberOfLines={1}>
                            {itemName}
                        </Text>

                        <Text style={styles.contentTitle}>
                            Last Added: <Text style={styles.contentDetail}>{lastAdded}</Text>
                        </Text>
                        
                        <Text style={styles.contentTitle}>
                            Quantity: <Text style={styles.contentDetail}>{numItems}</Text>
                        </Text>
                    </View>

                    {/* <View style={styles.adjustButtons}>
                            <TouchableOpacity onPress={() => updateQuantity(-1)} style={styles.adjustButtonLeft}>
                                <Text>-</Text>
                            </TouchableOpacity>

                            <View style={styles.divider} />

                            <TouchableOpacity onPress={() => updateQuantity(1)} style={styles.adjustButtonRight}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View> */}
                    <TouchableOpacity style={styles.viewDetailsButton}>
                        <Text style={styles.viewDetailsText}>View details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PantryCard
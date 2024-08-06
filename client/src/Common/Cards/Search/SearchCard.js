// SearchCard.js
// This component renders an individual card containing the search history of the user.

// Import core React functionality from the React package.
import React from 'react'
// Import specific components from React Native for building the user interface.
import { View, Text, TouchableOpacity, Image } from 'react-native'
// Import specific styles for the ReceiptCard component
import styles from './SearchCard.style'
import { getDatabase, ref, push, update } from "firebase/database";
import firebase from "../../../../../firebase";
import { images } from '../../../constants';

const SearchCard = ({ itemName }) => {

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.text}>{ itemName }</Text>
        </View>
    )
};

export default SearchCard
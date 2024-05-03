// ReceiptCard.js
// This component is designed to display individual receipt details in a card format. 
// It shows store name, date, and number of items, and is clickable to trigger navigation or further actions.

// Import core React functionality from the React package.
import React from 'react'
// Import specific components from React Native for building the user interface.
import { View, Text, TouchableOpacity, Image } from 'react-native'
// Import specific styles for the ReceiptCard component
import styles from './ReceiptCard.style'


const ReceiptCard = ({ storeName, date, numItems, handleNavigate }) => {
    // console.log("Rendering ReceiptCard", storeName, date, numItems);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/receipts/receipt1.jpeg')}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>  

      <View style={styles.textContainer}>
        <Text style={styles.store} numberOfLines={1}>
            {storeName}
        </Text>

        <Text style={styles.date}>{date}</Text>
        
        <Text style={styles.numItems}>{numItems} items detected.</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ReceiptCard
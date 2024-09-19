// ReceiptCard.js
// This component is designed to display individual receipt details in a card format. 
// It shows store name, date, and number of items, and is clickable to trigger navigation or further actions.

// Import core React functionality from the React package.
import React, { useState } from 'react'
// Import specific components from React Native for building the user interface.
import { View, Text, TouchableOpacity, Image } from 'react-native'
// Import specific styles for the ReceiptCard component
import styles from './ReceiptCard.style'
import { icons } from '../../../constants';



const ReceiptCard = ({ storeName, date, numItems, handleNavigate, deleteReceipt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
      setIsHovered(true);
  };

  const handlePressOut = () => {
      setIsHovered(false);
  };
    // console.log("Rendering ReceiptCard", storeName, date, numItems);
  return (
    <TouchableOpacity
      style={styles.card}
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
      <View style={styles.deleteIcon}>
        <TouchableOpacity
          onPress={deleteReceipt}
          onPressIn={handlePressIn} // Change state on press in
          onPressOut={handlePressOut} // Change state on press out
          style={{ backgroundColor: 'transparent', width: '100%', height: '100%' }}
        >
          <Image
            source={isHovered ? icons.trashOpen : icons.trash} // Change icon based on state
            resizeMode="contain"
            style={styles.delete}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ReceiptCard
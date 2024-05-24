import React, {useState} from 'react';
// Import specific components and utilities from React Native for building the user interface.
import {CheckBox, Text, View, TouchableOpacity} from 'react-native';
// Import specific styles
import styles from './CheckBox.style';
// Import specific styles for the ReceiptCard component
import stylesButtons from '../Common/Cards/Pantry/PantryCard.style'

// This is for checking and unchecking items within the receipt.
// checkedVisible (boolean for if we can see it) and setCheckedVisible (update checkedVisible)
// are hooks(properties) that control the visibility of the CheckedBox.

// NEED TO ADD handleUpdateQuantity and itemId as HOOKS LATER 
const CheckBoxed = ({checkedVisible, setCheckedVisible}) => {
  /**handleUpdateQuantity 
     * This function calls the handleUpdateQuantity function passed down from the parent
     * component, VirtualPantry, with the itemId and the amount to adjust the quantity by.
     * @param amount - The amount to adjust the quantity by. Can be positive or negative.
     */      
  const updateQuantity = (amount) => {
    handleUpdateQuantity(itemId, amount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkedVisible}
          onValueChange={setCheckedVisible}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Apple: 0{/*put item number*/}</Text>
        

        <View style={stylesButtons.adjustButtons}>
          <TouchableOpacity onPress={() => updateQuantity(-1)} style={stylesButtons.adjustButtonLeft}>
              <Text>-</Text>
          </TouchableOpacity>

          <View style={stylesButtons.divider} />
          <TouchableOpacity onPress={() => updateQuantity(1)} style={stylesButtons.adjustButtonRight}>
              <Text>+</Text>
          </TouchableOpacity>
       </View>
      </View>
    </View>
  );
};

export default CheckBoxed;
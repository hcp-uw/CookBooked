import React, {useState} from 'react';
// Import specific components and utilities from React Native for building the user interface.
import {CheckBox, Text, View} from 'react-native';
// Import specific styles
import styles from './CheckBox.style'

// This is for checking and unchecking items within the receipt.
// checkedVisible (boolean for if we can see it) and setCheckedVisible (update checkedVisible)
// are hooks(properties) that control the visibility of the CheckedBox.
const CheckBoxed = ({checkedVisible, setCheckedVisible}) => {

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkedVisible}
          onValueChange={setCheckedVisible}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {checkedVisible ? '✅' : '❌'}</Text>
    </View>
  );
};

export default CheckBoxed;
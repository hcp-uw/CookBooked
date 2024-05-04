import React, {useState} from 'react';
import {CheckBox, Text, View} from 'react-native';
import styles from './CheckBox.style'

const CheckBoxed = (checkedVisible, setCheckedVisible) => {

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
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native"; 

const Receipts = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Receipts page.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default Receipts;

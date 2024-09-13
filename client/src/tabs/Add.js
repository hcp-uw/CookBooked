import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native"; 

const Add = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Add page.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default Add;

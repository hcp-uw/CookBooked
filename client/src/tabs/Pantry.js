import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native"; 

const Pantry = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Pantry page.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default Pantry;

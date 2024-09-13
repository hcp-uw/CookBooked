import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native"; 

const Search = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Search page.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default Search;

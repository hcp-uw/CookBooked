import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native"; 

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Home page.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default Home;

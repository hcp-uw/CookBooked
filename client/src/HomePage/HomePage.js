import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

const HomePage = ({ navigation }) => {

  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigation.navigate('ReceiptPage');
    // You can perform any action you want here
  };

  return (
    <View>
      <Text>CookBooked</Text>
      <Button onPress={handleButtonClick} title="Click me!" color="#F2555A" />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default HomePage;

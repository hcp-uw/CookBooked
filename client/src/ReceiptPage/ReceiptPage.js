// ReceiptPage.js
// This component renders the ReceiptPage where users can view their purchase receipts. 
// It includes a header, a list of ReceiptCard components to display individual receipts, 
// and a button to navigate to the VirtualPantry. The page layout and components are styled
// according to the styles defined in ReceiptPage.style.js.

// Import core React functionality from the React package.
import React, { useState } from 'react';
// Import specific components and utilities from React Native for building the user interface.
import { Text, StyleSheet, Button, View, Image, Modal, Pressable } from "react-native"; 
// Import the ReceiptCard component where custom card components are stored.
import ReceiptCard from '../Common/Cards/Receipt/ReceiptCard';
// Import specific styles for the ReceiptPage component
import styles from './ReceiptPage.style'
import PopUp from '../PopUp/PopUp'

const ReceiptPage = ({ navigation }) => {
  const [popUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!popUpVisible)
  }

  const handleButtonClick = () => {
      console.log("Button clicked!");
      navigation.navigate('VirtualPantry');
      // You can perform any action you want here
    };

    const handleButtonClickRushi = () => {
      console.log("Button clicked!");
      navigation.navigate('rushiVirtualPantry');
      // You can perform any action you want here
    };

    const test = () => {
      console.log("Button clicked!");
    };

  return (
      <View>
        {/* // Header of Page  */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Receipts</Text>
        </View>

        {/* Divider line (would want to move styling to themes?) */}
        <View
          style={{
            borderColor: '#F2555A',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderWidth: 1,
            margin: 10
          }}
        />

        {/* Receipt Cards Section */}
        <View style={styles.container}>
          <ReceiptCard
              storeName={"Safeway"}
              date={"11 Jan 2023, 4:57 am"}
              numItems={4}
              handleNavigate={() => test()}
          /> 
          <ReceiptCard
              storeName={"Safeway"}
              date={"11 Jan 2023, 4:57 am"}
              numItems={4}
              handleNavigate={togglePopUp}
          /> 

          <PopUp popUpVisible={popUpVisible} setPopUpVisible={setPopUpVisible}/>

          <Button onPress={handleButtonClick} title="Go to virtual pantry" color="blue" />
          <Button onPress={handleButtonClickRushi} title="Go to rushi's virtual pantry" color="blue" />
        </View>
        <Image
          source={require('../../assets/Dubs_Story_Image.jpg')}
          style={styles.image}
        />

        
      </View>
  )
}

// const styles = StyleSheet.create({
//   text: {
//     color: 'black',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   }

// });

export default ReceiptPage;

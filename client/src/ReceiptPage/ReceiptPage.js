// ReceiptPage.js
// This component renders the ReceiptPage where users can view their purchase receipts. 
// It includes a header, a list of ReceiptCard components to display individual receipts, 
// and a button to navigate to the VirtualPantry. The page layout and components are styled
// according to the styles defined in ReceiptPage.style.js.

// Import core React functionality from the React package.
import React from 'react';
// Import specific components and utilities from React Native for building the user interface.
import { Text, StyleSheet, Button, View, Image } from "react-native"; 
// Import the ReceiptCard component where custom card components are stored.
import ReceiptCard from '../Common/Cards/Receipt/ReceiptCard';
// Import specific styles for the ReceiptPage component
import styles from './ReceiptPage.style'


const ReceiptPage = ({ navigation }) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
        navigation.navigate('VirtualPantry');
        // You can perform any action you want here
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
                // handleNavigate={() => router.push(``)}
            /> 
            <ReceiptCard
                storeName={"Safeway"}
                date={"11 Jan 2023, 4:57 am"}
                numItems={4}
                // handleNavigate={() => router.push(``)}
            /> 
          </View>
          <Image
            source={require('../../assets/Dubs_Story_Image.jpg')}
            style={styles.image}
          />
          <Button onPress={handleButtonClick} title="Click me!" color="blue" />
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

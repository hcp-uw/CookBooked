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

const popUp = () => {
  const [popUpVisible, setPopUpVisible] = useState(true);
  return (
    <View style={stylesPopUp.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={popUpVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setPopUpVisible(false);
        }}>
        <View style={stylesPopUp.centeredView}>
          <View style={stylesPopUp.modalView}>
            <Text style={stylesPopUp.modalText}>Hello World!</Text>
            <Pressable
              style={[stylesPopUp.button, stylesPopUp.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={stylesPopUp.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
};

const stylesPopUp = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});


const ReceiptPage = ({ navigation }) => {
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
                handleNavigate={popUp}
            /> 

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

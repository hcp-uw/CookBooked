// ReceiptPage.js
// This component renders the ReceiptPage where users can view their purchase receipts. 
// It includes a header, a list of ReceiptCard components to display individual receipts, 
// and a button to navigate to the VirtualPantry. The page layout and components are styled
// according to the styles defined in ReceiptPage.style.js.

// Import core React functionality from the React package.
import React, { useState, useEffect } from 'react';
// Import specific components and utilities from React Native for building the user interface.
import { Text, StyleSheet, Button, View, Image, Modal, Pressable, ScrollView, TouchableOpacity } from "react-native"; 
// Import the ReceiptCard component where custom card components are stored.
import ReceiptCard from '../Common/Cards/Receipt/ReceiptCard';
// Import specific styles for the ReceiptPage component
import styles from './ReceiptPage.style'
import PopUp from '../PopUp/PopUp'
import { DIVIDER } from '../constants';
import { useUser } from '../../UserContext';

const ReceiptPage = ({ navigation }) => {
  const { user } = useUser();
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [receiptHistory, setReceiptHistory] = useState({});
  const [receiptsText, setRceiptsText] = useState('');

  useEffect(() => {
    getReceipts(user);
  }, [])

  const itemList = {
    cArrot: 5,
    onION: 2,
    Celery: 1,
  }

  const store = "Safeway"

  const togglePopUp = () => {
    setPopUpVisible(!popUpVisible)
  }

  async function getReceipts() {
    try {
      let response = await fetch(`http://localhost:3000/receipts/read?uid=${user.uid}`)
      let data = await response.json();
      if (Object.keys(data.receipts).length === 0) setRceiptsText("You haven't added any receipts! Use the + in the bottom right to add one!");
      else setReceiptHistory(data.receipts);
    } catch (error) {
      console.error('Error pulling receipts:', error);
    }
  }

  async function addReceipt(items) {
    try {
      let response = await fetch("http://localhost:3000/receipts/add", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({items: items, store: store, uid: user.uid})
      });
      if (!response.ok) {
        throw new Error(`Failed to add items`);
      } else {
        getReceipts();
      }
    } catch (error) {
        console.error('Error posting data:', error);
    }
  };

  function deleteReceipt() {
    console.log("HI")
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          {/* // Header of Page  */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Receipts</Text>
          </View>
          {/* Divider line (would want to move styling to themes?) */}
          <View style={DIVIDER.header}/>
          <View>
            <Text>{receiptsText}</Text>
          </View>
          {/* Receipt Cards Section */}
          <View style={styles.container}>
            {/* <ReceiptCard
                storeName={"Safeway"}
                date={"11 Jan 2023, 4:57 am"}
                numItems={4}
                handleNavigate={() => test()}
            />  */}
            {/* {receiptHistory.map(receipt => (
              <ReceiptCard
                  storeName={receipt.store}
                  date={receipt.date}
                  numItems={Object.keys(receipt.items).length}
                  handleNavigate={togglePopUp}
              />
            ))} */}
            {receiptHistory && typeof receiptHistory === 'object' ? (
                Object.entries(receiptHistory).map(([key, receipt]) => (
                  <ReceiptCard
                      key={key} // Use the unique receipt ID as the key
                      storeName={receipt.store} // Placeholder, since there's no store in the structure
                      date={receipt.date} // Access date from the receipt object
                      numItems={Object.keys(receipt.items).length} // Count the number of items in the receipt
                      handleNavigate={togglePopUp} // Toggle the popup when navigating
                      deleteReceipt={deleteReceipt}
                  />
                ))
            ) : (
                <Text>No receipts available</Text> // Fallback if the object is empty or invalid
            )}
            <PopUp popUpVisible={popUpVisible} setPopUpVisible={setPopUpVisible}/>
            {/* <Button onPress={handleButtonClick} title="Go to virtual pantry" color="blue" />
            <Button onPress={handleButtonClickRushi} title="Go to rushi's virtual pantry" color="blue" /> */}
          </View>
          {/* <Image
            source={require('../../assets/Dubs_Story_Image.jpg')}
            style={styles.image}
          /> */}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addReceiptBtn}
        onPress={() => addReceipt(itemList)}
        accessibilityLabel="Add receipt to pantry"
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
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

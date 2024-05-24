// Import core React functionality from the React package.
import React, { useState } from 'react';
// Import specific components and utilities from React Native for building the user interface.
import { CheckBox, Text, View, Modal, Pressable } from "react-native"; 
// Import specific styles for the ReceiptPage component
import styles from './PopUp.style'
import CheckBoxed from '../Loop/Loop'

// PopUpVisible (boolean for if we can see it) and setPopUpVisible (update popUpVisible)
// are hooks(properties) that control the visibility of the PopUp.
const PopUp = ({ popUpVisible, setPopUpVisible, changePopUp }) => {
    const [checkedVisible, setCheckedVisible] = useState(false);

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={popUpVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
            setPopUpVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <CheckBoxed numberOfItems={5}/>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setPopUpVisible(false)}>
                <Text style={styles.textStyle}>Enter</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )
};

export default PopUp;


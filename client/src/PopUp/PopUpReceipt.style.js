import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalView: {
      width: 'auto', 
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 20,
      maxWidth: '95%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5, // Shadow and elevation effects
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      borderRadius: 10,
      padding: 10,
      marginTop: 5, // Spacing above the button
      elevation: 2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 5,
      fontSize: SIZES.xxLarge,
      fontFamily: FONT.bold,
      color: COLORS.black,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    image: {
      width: 300,
      height: 450,
    },
});

export default styles;

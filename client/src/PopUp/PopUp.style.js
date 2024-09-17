import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 15,
      paddingHorizontal: 75,
      paddingVertical: 25, 
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
      borderRadius: 15,
      padding: 10,
      elevation: 2,
      marginBottom: 10,
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
      marginBottom: 25,
      fontSize: SIZES.xxLarge,
      fontFamily: FONT.bold,
      color: COLORS.black,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '100%'
  },
});

export default styles;
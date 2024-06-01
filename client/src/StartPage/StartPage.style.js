import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Change to 'flex-start' to align items to the top
        justifyContent: 'flex-start', 
        // Change to 'center' to align items horizontally at the center
        alignItems: 'center', 
        // These cahnge the grey boarder around the page
        marginTop: SIZES.medium,
        marginBottom: SIZES.xLarge,
        marginLeft: SIZES.medium,
        marginRight: SIZES.medium,
        backgroundColor: COLORS.lightWhite,
    },
    image: {
        width: "90%",
        height: "30%",
        resizeMode: 'contain',
        marginTop: 80,
        marginBottom: 80,
    },
    buttonContainer: {
        marginTop: 140,
        marginBottom: 120
    },
    button: {
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.xSmall,
        borderRadius: 15, 
        width: 350,
        height: 40,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    buttonTextWhite: {
        color: COLORS.white,
        fontSize: SIZES.medium,
        textTransform: 'none',
    },
    buttonTextPink: {
        color: COLORS.primary,
        fontSize: SIZES.medium,
        textTransform: 'none',
    }
    
})

export default styles;
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
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.lightWhite,
    },
    titleText: {
        //fontFamily: FONT.regular,
        fontSize: SIZES.large * 2.3,
        color: COLORS.primary,
        fontWeight: 600,
        marginBottom: SIZES.large,
    },
    image: {
        width: "40%",
        height: "20%",
        resizeMode: 'contain',
        marginTop: SIZES.large * 4,
    },
    buttonContainer: {
        marginTop: SIZES.large * 10,
        marginBottom: SIZES.small * 10,
    },
    button: {
        fontFamily: FONT.regular,
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
        fontSize: SIZES.medium * 1.04,
        textTransform: 'none',
        fontWeight: 600,
    },
    buttonTextPink: {
        color: COLORS.primary,
        fontSize: SIZES.medium * 1.04,
        textTransform: 'none',
        fontWeight: 600,
    },
})

export default styles;
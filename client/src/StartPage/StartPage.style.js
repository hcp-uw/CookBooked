import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const { width, height } = Dimensions.get('window');

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
        // choosing the smaller to be able to do portrait or landscape mode
        fontSize: Math.min(width, height) * 0.08,
        color: COLORS.primary,
        fontWeight: '600',
        marginBottom: SIZES.large,
    },
    image: {
        width: "40%",
        height: "20%",
        resizeMode: 'contain',
        marginTop: SIZES.large * 4,
    },
    buttonContainer: {
        marginTop: height * 0.21,
        marginBottom: SIZES.small * 10,
    },
    button: {
        fontFamily: FONT.regular,
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.xSmall,
        borderRadius: 15, 
        width: width * 0.4,
        height: height * 0.06,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    buttonTextWhite: {
        color: COLORS.white,
        fontSize: SIZES.medium * 1.04,
        textTransform: 'none',
        fontWeight: '600',
    },
    buttonTextPink: {
        color: COLORS.primary,
        fontSize: SIZES.medium * 1.04,
        textTransform: 'none',
        fontWeight: '600',
    },
})

export default styles;
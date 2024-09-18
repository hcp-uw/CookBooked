import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const { width, height } = Dimensions.get('window');

const smallScreen = width < 480; // small screens like older phones
const mediumScreen = width >= 480 && width < 768; // medium screens like newer phones
const largeScreen = width >= 768;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Change to 'flex-start' to align items to the top
        justifyContent: 'center', 
        // Change to 'center' to align items horizontally at the center
        alignItems: 'center', 
        // These cahnge the grey boarder around the page
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.lightWhite,
    },
    sameLineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        //fontFamily: FONT.regular,
        fontSize: SIZES.large * 2.3,
        color: COLORS.black,
        fontWeight: 600,
        alignSelf: 'center',
    },
    subText: {
        //fontFamily: FONT.regular,
        fontSize: 16,
        color: COLORS.black,
        fontWeight: 400,
        marginBottom: SIZES.small,
        alignSelf: 'flex-start',
    },
    forgotPasswordText: {
        //fontFamily: FONT.regular,
        fontSize: SIZES.xSmall * 1.2,
        color: COLORS.gray,
        fontWeight: 200,
        opacity: 0.8,
        marginBottom: SIZES.small,
        marginLeft: SIZES.small * 4.5,
    },
    accountText: {
        fontSize: SIZES.xSmall * 1.2,
        color: COLORS.gray,
        fontWeight: 200,
        opacity: 0.8,
        padding: 5,
    },
    signUpText: {
        fontSize: SIZES.xSmall * 1.2,
        color: COLORS.primary,
        fontWeight: 200,
        opacity: 0.8,
        padding: 5,
    },
    smallInput: {
        width: smallScreen ? width * 0.7 : mediumScreen ? width * 0.5 : width * 0.25, 
        height: 30,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10, 
        fontSize: 12, 
    },
    image: {
        width: "40%",
        height: "15%",
        resizeMode: 'contain',
        marginBottom: 0,
    },
    inputContainerOne: {
        marginTop: SIZES.medium,
        alignItems: 'center',
    },
    button: {
        fontFamily: FONT.regular,
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.xSmall,
        borderRadius: 10, 
        width: smallScreen ? width * 0.7 : mediumScreen ? width * 0.5 : width * 0.25, 
        height: 30,
        paddingVertical: 18,
        marginTop: 30,
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
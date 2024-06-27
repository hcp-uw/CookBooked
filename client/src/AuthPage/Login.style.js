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
    sameLineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    titleText: {
        //fontFamily: FONT.regular,
        fontSize: Math.min(width, height) * 0.05,
        color: COLORS.black,
        fontWeight: 600,
        marginBottom: SIZES.large,
        marginLeft: SIZES.medium * 1.5,
    },
    subText: {
        //fontFamily: FONT.regular,
        fontSize: Math.min(width, height) * 0.02,
        color: COLORS.black,
        fontWeight: 400,
        marginBottom: SIZES.small,
    },
    forgotPasswordText: {
        //fontFamily: FONT.regular,
        fontSize: Math.min(width, height) * 0.013,
        color: COLORS.gray,
        fontWeight: 200,
        opacity: 0.8,
        marginBottom: SIZES.small,
        marginLeft: SIZES.small * 4.5,
    },
    accountText: {
        fontSize: Math.min(width, height) * 0.013,
        color: COLORS.gray,
        fontWeight: 200,
        opacity: 0.8,
        padding: 5,
    },
    signUpText: {
        fontSize: Math.min(width, height) * 0.013,
        color: COLORS.primary,
        fontWeight: 200,
        opacity: 0.8,
        padding: 5,
    },
    smallInput: {
        width: width * 0.2, 
        height: height * 0.03,
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
        marginTop: SIZES.large * 7,
        marginBottom: 0,
    },
    inputContainerOne: {
        marginTop: SIZES.large * 2.8,
        marginBottom: SIZES.small,
        marginLeft: SIZES.medium * 1.5,
    },
    inputContainerTwo: {
        marginTop: SIZES.medium,
        marginBottom: SIZES.large,
        marginLeft: SIZES.medium * 1.5,
    },
    button: {
        fontFamily: FONT.regular,
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.xSmall,
        borderRadius: 15, 
        width: width * 0.3,
        height: height * 0.04,
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
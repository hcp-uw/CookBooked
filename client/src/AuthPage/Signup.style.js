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
    sameLineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    titleText: {
        //fontFamily: FONT.regular,
        fontSize: SIZES.large * 2.3,
        color: COLORS.black,
        fontWeight: 600,
        marginBottom: SIZES.large,
        marginLeft: SIZES.medium * 1.5,
    },
    subText: {
        //fontFamily: FONT.regular,
        fontSize: SIZES.small * 1.5,
        color: COLORS.black,
        fontWeight: 400,
        marginBottom: SIZES.small,
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
        width: 150, 
        height: 30,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10, 
        fontSize: 12, 
    },
    imageContainer:{
        width: '100%',
        height: 200,
        flex: 1,
        position: 'relative',
    },
    image: {
        // takes it out of the normal work flow meaning it 
        // does not render in the imageContainer really.
        // So, it is possible to have overlap with other items.
        position: 'absolute',
        top: 10,
        left: 50,
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
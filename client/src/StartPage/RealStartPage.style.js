import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    titleText: {
        //fontFamily: FONT.regular,
        fontSize: Math.min(width, height) * 0.05,
        color: COLORS.black,
        fontWeight: 600,
        marginBottom: SIZES.large,
        marginLeft: SIZES.medium * 1.5,
    },
})

export default styles;
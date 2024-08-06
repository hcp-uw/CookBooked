import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
 cardContainer: {
    // flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    margin: 10,
    // ...SHADOWS.small,
    // shadowColor: COLORS.black,
    height: 140,
    marginBottom: 10,
    position: 'relative'
 },
 text: {
    fontFamily: FONT.regular,
    fontSize: 10,
    textAlign: 'center',
 },
})

export default styles;
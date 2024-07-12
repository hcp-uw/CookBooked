import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  shadowContainer: {
    ...SHADOWS.medium,
    borderRadius: SIZES.small,
    // marginBottom: 10,
  },
  container: {
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
  textContainer: {
    flex: 1,
    margin: SIZES.medium,
  },
  itemName: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    fontWeight: '600',
    color: COLORS.black,
  },
  contentContainer: {
    marginBottom: 30,
  },
  contentTitle: {
    fontSize: SIZES.small + 1,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    fontWeight: '600'
    // textTransform: "capitalize",
  },
  contentDetail: {
    fontWeight: '90'
    // textTransform: "capitalize",
  },
  divider: {
    width: 1,
    backgroundColor: 'black',
    // Stretch to fill the container height
    alignSelf: 'stretch'
  },
  viewDetailsText: {
    color: COLORS.tertiary,
    fontSize: SIZES.small
  }
});

export default styles;

import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  shadowContainer: {
    ...SHADOWS.medium,
    borderRadius: SIZES.small,
    width: 140,
    marginHorizontal: 10,
    marginTop: 5,
    // marginBottom: 10,
  },
  container: {
    // flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    margin: 10,
    // ...SHADOWS.small,
    // shadowColor: COLORS.black,
    height: 140,
    width: 120,
    marginBottom: 10,
    position: 'relative', 
  },
  image: {
    width: 100,
    height: 100,
    // borderRadius: SIZES.small,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  textStyle: {
    fontFamily: FONT.regular,
    fontSize: 10,
    textAlign: 'left',
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

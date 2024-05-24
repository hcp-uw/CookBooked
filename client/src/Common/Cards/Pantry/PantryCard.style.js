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
  logoContainer: {
    width: 110,
    height: 110,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "80%",
    height: "80%",
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
  numItems: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.black,
    marginTop: 10,
    // textTransform: "capitalize",
  },
  adjustButtons: {
    flexDirection: 'row',
    borderColor: '#ccc',
    // borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#F2555A',
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "auto",
    width: 60,
    height: 30,
  },
  adjustButtonLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adjustButtonRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 1,
    backgroundColor: 'black',
    // Stretch to fill the container height
    alignSelf: 'stretch'
  },
  viewDetailsButton: {
    position: 'absolute',
    bottom: -5,
    right: -0,
    // flexDirection: 'row',
    // borderColor: '#ccc',
    // borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    width: '45%',
    height: '25%',
    borderRadius: 8,
    // fontWeight: 500
  },

  viewDetailsText: {
    color: COLORS.tertiary,
    fontSize: SIZES.small
  }
});

export default styles;

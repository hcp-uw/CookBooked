import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    height: 150,
    marginBottom: 10,
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
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  itemName: {
    fontSize: SIZES.large,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  lastAdded: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
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
  }
});

export default styles;

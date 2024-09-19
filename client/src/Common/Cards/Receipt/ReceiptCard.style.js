import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 10,
    shadowColor: COLORS.gray, // Shadow color
    shadowOffset: {
      width: 2,  // Horizontal offset
      height: 2, // Vertical offset
    },
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 5, // Blur radius of the shadow
    elevation: 5,
    borderRadius: 15,
    position: 'relative',
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
  store: {
    fontSize: SIZES.large,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  date: {
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
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 25,
    height: 25,
    zIndex: 1
  },
  delete: {
    width: '100%',
    height: '100%',
  }
});

export default styles;

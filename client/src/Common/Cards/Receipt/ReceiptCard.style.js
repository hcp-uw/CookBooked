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
});

export default styles;

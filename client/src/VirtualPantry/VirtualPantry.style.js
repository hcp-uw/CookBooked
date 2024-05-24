import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    // marginTop: SIZES.xLarge,
    marginBottom: SIZES.xLarge,
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.black,
    paddingLeft: SIZES.large,
    fontWeight: '700'       // also add to theme.js to make it as a constant in the future
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  userProfileImage: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    paddingRight: 70
  }
});

export default styles;

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
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  userProfileImage: {
    width: 30,
    height: 30,
  },
  imgContainer: {
    marginRight: 15,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    marginRight: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  login: {
    fontSize: 10,
    color: 'white',
  }
});

export default styles;

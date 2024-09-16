import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 15,
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
  addReceiptBtn: {
    backgroundColor: '#F2555A',
    borderRadius: 100,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 700,
    paddingBottom: 5,
    textAlign: 'center',
  },
});

export default styles;

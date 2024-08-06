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
  userProfileImage: {
    width: 50,
    height: 50,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    shadowColor: 'black', // Shadow color
    shadowOffset: {
      width: 2,  // Horizontal offset
      height: 2, // Vertical offset
    },
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 5, // Blur radius of the shadow
    elevation: 5,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical:5,
    padding: 20,
    position: 'relative',
  },
  bold: {
    fontWeight: 'bold',
  },
  editIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 17,
    height: 17,
    zIndex: 1
  },
  edit: {
    width: '100%',
    height: '100%',
  },
});

export default styles;

// theme.js
// This file defines the core styling constants used throughout the application. 
// It includes color schemes, typography settings, sizing dimensions, and shadow styles. 
// These constants ensure a consistent look and feel across all components and screens.

import { StyleSheet } from "react-native";

// Define color palette for the application to maintain consistency in UI design.
const COLORS = {
  primary: "#F2555A",
  secondary: "#FFDADB",
  tertiary: "#FF7754",

  gray: "#848383",
  gray2: "#CCCCCC",

  white: "#FFFFFF",
  lightWhite: "#FAFAFC",

  black: "#000000"
};

// Define font styles using specific typefaces to ensure consistent typography across the app.
const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

// Standardize font sizes across the app to maintain typographic hierarchy and readability.
const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 30,
};

// Define shadow styles to add depth to UI components.
const SHADOWS = {
  small: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const DIVIDER = {
  header: {
    borderColor: COLORS.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: 1.5,
    margin: SIZES.xSmall,
    marginHorizontal: SIZES.large
  }
}

// Export the defined style constants to be used throughout the application.
export { COLORS, FONT, SHADOWS, SIZES, DIVIDER };


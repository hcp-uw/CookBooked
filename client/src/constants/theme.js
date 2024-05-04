// theme.js
// This file defines the core styling constants used throughout the application. 
// It includes color schemes, typography settings, sizing dimensions, and shadow styles. 
// These constants ensure a consistent look and feel across all components and screens.

// Define color palette for the application to maintain consistency in UI design.
const COLORS = {
  primary: "#F2555A",
  secondary: "#FFDADB",
  tertiary: "#FF7754",

  gray: "#D9D9D9",
  gray2: "#F6F5F3",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

// Define font styles using specific typefaces to ensure consistent typography across the app.
const FONT = {
  regular: "LexendDeca-Regular",
  medium: "LexendDeca-Medium",
  bold: "LexendDeca-Bold",
};

// Standardize font sizes across the app to maintain typographic hierarchy and readability.
const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

// Define shadow styles to add depth to UI components.
const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

// Export the defined style constants to be used throughout the application.
export { COLORS, FONT, SHADOWS, SIZES };


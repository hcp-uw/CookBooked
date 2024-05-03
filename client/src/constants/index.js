// index.js
// This file serves as the main entry point for importing and exporting all default styling constants 
// used throughout the application. It helps maintain consistency by centralizing the import of 
// style-related modules and constants. This setup ensures that all components and screens across 
// the app use the same foundational styles.

// Import the 'icons' module which includes all icon graphics used across the app.
import icons from "./icons";

// Import core styling constants from the theme module, which define colors, fonts, sizes, and shadows.
import { COLORS, FONT, SIZES, SHADOWS } from "./theme";

// Export all imported modules and constants to enable their use across different parts of the application.
export { icons, COLORS, FONT, SIZES, SHADOWS };

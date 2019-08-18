import {defaultFontFamily} from "../internal/defaultFontFamily";

const robotoWeights = {
  thin: {
    includeFontPadding: false,
    fontFamily: defaultFontFamily || "sans-serif-thin",
    fontWeight: "normal",
    backgroundColor: "transparent"
  },
  light: {
    includeFontPadding: false,
    fontFamily: defaultFontFamily || "sans-serif-light",
    fontWeight: "normal",
    backgroundColor: "transparent"
  },
  regular: {
    includeFontPadding: false,
    fontFamily: defaultFontFamily || "sans-serif",
    fontWeight: "normal",
    backgroundColor: "transparent"
  },
  medium: {
    includeFontPadding: false,
    fontFamily: defaultFontFamily || "sans-serif-medium",
    fontWeight: "normal",
    backgroundColor: "transparent"
  },
  bold: {
    includeFontPadding: false,
    fontFamily: defaultFontFamily || "sans-serif",
    fontWeight: "bold",
    backgroundColor: "transparent"
  },
  condensed: {
    includeFontPadding: false,
    fontFamily: defaultFontFamily || "sans-serif-condensed",
    fontWeight: "normal",
    backgroundColor: "transparent"
  },
  condensedBold: {
    includeFontPadding: false,
    fontFamily: defaultFontFamily || "sans-serif-condensed",
    fontWeight: "bold",
    backgroundColor: "transparent"
  }
};

export default robotoWeights;

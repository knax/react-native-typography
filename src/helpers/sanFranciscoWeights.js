// These match the names on
// https://developer.apple.com/documentation/uikit/uifontdescriptor/font_weights

import {defaultFontFamily} from "../internal/defaultFontFamily";

const sanFranciscoWeights = {
  thin: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "100",
    backgroundColor: "transparent"
  },
  ultraLight: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "200",
    backgroundColor: "transparent"
  },
  light: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "300",
    backgroundColor: "transparent"
  },
  regular: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "400",
    backgroundColor: "transparent"
  },
  medium: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "500",
    backgroundColor: "transparent"
  },
  semibold: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "600",
    backgroundColor: "transparent"
  },
  bold: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "700",
    backgroundColor: "transparent"
  },
  heavy: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "800",
    backgroundColor: "transparent"
  },
  black: {
    fontFamily: defaultFontFamily || "System",
    fontWeight: "900",
    backgroundColor: "transparent"
  }
};

export default sanFranciscoWeights;

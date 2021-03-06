import { Platform } from "react-native";

import variable from "./../variables/platform";

export default (variables = variable) => {
  const platform = variables.platform;

  const footerTabTheme = {
    "NativeBase.Button": {
      ".active": {
        "NativeBase.Text": {
          color: variables.tabBarActiveTextColor,
          fontSize: variables.tabBarTextSize,
          lineHeight: 16
        },
        "NativeBase.Icon": {
          color: 'white'
        },
        "NativeBase.IconNB": {
          color: 'white'
        },
      },
      flexDirection: null,
      backgroundColor: "#2B3035",
      borderColor: null,
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      alignSelf: "center",
      flex: 1,
      height: (variables.footerHeight - (variables.isIphoneX ? 34 : 0)),
      justifyContent: "center",
      ".badge": {
        "NativeBase.Badge": {
          "NativeBase.Text": {
            fontSize: 11,
            fontWeight: platform === "ios" ? "600" : undefined,
            lineHeight: 14
          },
          top: -3,
          alignSelf: "center",
          left: 10,
          zIndex: 99,
          height: 18,
          padding: 1.7,
          paddingHorizontal: 3
        },
        "NativeBase.Icon": {
          marginTop: -18
        }
      },
      "NativeBase.Icon": {
        color: '#585858'
      },
      "NativeBase.IconNB": {
        color: 'gray'
      },
      "NativeBase.Text": {
        color: variables.tabBarTextColor,
        fontSize: variables.tabBarTextSize,
        lineHeight: 16
      }
    },
    backgroundColor: Platform.OS === "android"
      ? variables.footerDefaultBg
      : undefined,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch"
  };

  return footerTabTheme;
};

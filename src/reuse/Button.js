import React, {useState} from "react"
import {Platform, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, View, Text } from "react-native"

import getTheme from "../constants/theming/theme.js";

function CustomButtom(props){
  let { colors, styles } = getTheme();

  let {
    //ColorProps
    disabled, primary, secondary, success, danger, warning, info,
    //ShapeProps
    rounded, outlined, transparent,
    //ExtraStyles
    containerStyle, textStyle,
  } = props;

  let extraStyles = {}
  let btnColor = colors.default;
  let textColor = colors.mainTextColor;
  if (disabled){
    btnColor = colors.disabled;
  } else if (primary){
    btnColor = colors.primary;
  } else if (secondary){
    btnColor = colors.secondary;
  } else if (success){
    btnColor = colors.success;
  } else if (danger){
    btnColor = colors.danger;
  } else if (warning){
    btnColor = colors.warning;
  } else if (info){
    btnColor = colors.info;
  }
  btnColor = props.color || btnColor;
  textColor = props.textColor || textColor;
   
  let btnStyle = {
    container: {
      height: 30,
      padding: 10,
      backgroundColor: transparent || outlined ? "transparent" : btnColor,
      alignItems: "center",
      justifyContent: "center",
      ...(outlined ? {...styles.border, borderColor: btnColor } : {} ),
      ...(rounded ? styles.roundConers.round : styles.roundConers.tiny),
      ...styles.shadow,
      ...( containerStyle || {} ),
    },
    text: {
      color: transparent || outlined ? btnColor : textColor,
      ...( textStyle || {} ),
    }
  };
  return (
    <Touchable style={btnStyle.container} {...props}>
      <React.Fragment>
        {props.iconLeft && props.iconLeft}
        <Text style={btnStyle.text}>{ props.title }</Text>
        {props.iconRight && props.iconRight}
      </React.Fragment>
    </Touchable>
  );
}

export default CustomButtom

function Touchable(props){
  return ( Platform.OS === "ios" ? (
    <TouchableOpacity { ...props} />
  ) : (
    <TouchableOpacity {...props} />
  ));
}

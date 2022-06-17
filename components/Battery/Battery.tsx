import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../styles/globalStyles";

const widthHeight = 100;

/*
 * Absolutely sick animation - https://www.youtube.com/watch?v=zvZ-HlzaBcY&ab_channel=Skillthrive
 * Complicated Rainbow CSS potion - https://codepen.io/lacedon/pen/EwgXpm
 */
export default () => {
  return <Text style={styles.bottle}>50</Text>;
};

const styles = StyleSheet.create({
  bottle: {
    position: "relative",
    width: widthHeight,
    height: widthHeight,
    backgroundColor: colors.blue600,
    border: `0.25rem solid ${colors.blue700}`,
    borderRadius: 50,
    outline: 0,
    // center the text
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
  },
});

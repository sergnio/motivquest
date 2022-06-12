import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  customStyle?: TextStyle;
}
export default ({ text, customStyle }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => alert(`Hello, ${text}!`)}
      style={{ ...styles.container, ...customStyle }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const widthHeight = 25;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#366bf9",
    width: widthHeight,
    height: widthHeight * 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 20, color: "#fff" },
});

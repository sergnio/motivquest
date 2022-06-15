import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";

interface Props {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  customStyle?: TextStyle;
}

const defaultHandler = () => alert(`Hello!`);
export default ({ text, customStyle, onPress = defaultHandler }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...customStyle }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const widthHeight = 25;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsl(224, 94.2%, 59.4%)",
    width: widthHeight,
    height: widthHeight * 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 20, color: "#fff" },
});

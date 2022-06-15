import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { marginPadding } from "../../styles/globalStyles";
import Button from "../../components/Button/Button";
import { MotivActivity } from "./useActivites";

interface Props {
  activity: MotivActivity;
}
export default ({ activity }: Props) => {
  const [text, setText] = useState(activity.name);

  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter your habit here!"
        onChangeText={(newText) => {
          setText(newText);
          // also update text from props
        }}
        defaultValue={text}
      />
      <Button text="+" customStyle={styles.xsMargin} />
      <Button text="-" customStyle={styles.xsMargin} />
    </View>
  );
};

const styles = StyleSheet.create({
  xsMargin: { marginHorizontal: marginPadding.xs },
  header1: {
    color: "hsl(0,0%,0%)",
    fontSize: 18,
  },
  inputBox: { height: 40, marginHorizontal: marginPadding.s },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  potion: { width: 305, height: 159, resizeMode: "contain" },
});

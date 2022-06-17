import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { marginPadding } from "../../styles/globalStyles";
import Button from "../../components/Button/Button";
import { MotivActivity } from "./useActivites";

interface Props {
  activity: MotivActivity;
}
const doneTypingInterval = 5000;
export default ({ activity }: Props) => {
  const [text, setText] = useState(activity.name);
  const mutate = (text: any) => {
    console.log("calling mutate");
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => mutate(text), doneTypingInterval);
    return () => clearTimeout(timeOutId);
  }, [text]);

  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter your habit here!"
        defaultValue={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
      <Text style={styles.timesDone}>{activity.timesDone}</Text>
      <Button text="+" customStyle={styles.xsMargin} />
      <Button text="-" customStyle={styles.xsMargin} />
    </View>
  );
};

const styles = StyleSheet.create({
  xsMargin: { marginHorizontal: marginPadding.xs },
  timesDone: { marginRight: marginPadding.s },
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

import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
//@ts-ignore
import logo from "./assets/potion.png";
import { useState } from "react";
import Button from "./components/Button/Button";
import { marginPadding } from "./styles/globalStyles";

export default () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.potion} />
      <Text style={styles.header1}>
        Keep track of your main activities which affect your motivation :)
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your habit here!"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Button text="+" customStyle={styles.xsMargin} />
        <Button text="-" customStyle={styles.xsMargin} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: marginPadding.l,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
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

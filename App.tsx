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

export default () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.potion} />
      <Text style={styles.header1}>
        Keep track of your main activities which affect your motivation :)
      </Text>

      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TouchableOpacity
          onPress={() => alert("Hello, world!")}
          style={{ backgroundColor: "blue", padding: 10 }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>+</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "#fff" }}>-</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  header1: {
    color: "hsl(0,0%,0%)",
    fontSize: 18,
  },
  potion: { width: 305, height: 159, resizeMode: "contain" },
});

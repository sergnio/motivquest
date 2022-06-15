import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
// @ts-ignore
import logo from "../assets/potion.png";
import Activity from "./Activity/Activity";
import Button from "./Button/Button";
import { StatusBar } from "expo-status-bar";
import { marginPadding } from "../styles/globalStyles";
import useActivities from "./Activity/useActivites";
import { createGetActivitiesForUserUrl } from "../apiRoutes/apiRoutes";
import axios from "axios";

const fetchData = async () => {
  try {
    console.log("fetchin data");
    const result = await axios.get(
      createGetActivitiesForUserUrl("62a91a54723f12f84d207875")
      // "http://localhost:3000/"
    );
    console.log("done fetching data");
    console.log({ result });
  } catch (e) {
    console.log("error", e);
  }
};

export default () => {
  const { activities, createNewActivity, queryResults } = useActivities(
    "62a91a54723f12f84d207875"
  );

  useEffect(() => {
    // fetchData();
  });
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.potion} />
      <Text style={styles.header1}>
        Keep track of your main activities which affect your motivation :)
      </Text>
      <Text>
        {queryResults.isLoading
          ? "Loading..."
          : JSON.stringify(queryResults.data)}
      </Text>
      <FlatList
        data={activities}
        renderItem={({ item }) => <Activity activity={item} />}
      />
      <View style={styles.inputRow}>
        <Text style={styles.xsMargin}>Add new activity!</Text>
        <Button text="+" onPress={createNewActivity} />
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

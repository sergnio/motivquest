import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
// @ts-ignore
import logo from "../assets/potion.png";
import Activity from "./Activity/Activity";
import Button from "./Button/Button";
import { StatusBar } from "expo-status-bar";
import { marginPadding } from "../styles/globalStyles";
import useActivities, { User } from "./Activity/useActivites";
import Battery from "./Battery/Battery";

export default () => {
  const {
    createNewActivity,
    queryResults: { isLoading, data },
  } = useActivities("62a91a54723f12f84d207875");
  const x = data as User;
  x.activities.map((a) => a.dailyActivites.filter((da) => da.dayOf));

  return (
    <View style={styles.container}>
      <Battery />
      <Text style={styles.header1}>
        Keep track of your main activities which affect your motivation :) v 1.1
      </Text>
      {isLoading && <Text>"Loading Data..."</Text>}
      {data && (
        <FlatList
          data={data.activities}
          renderItem={({ item }) => <Activity activity={item} />}
        />
      )}
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

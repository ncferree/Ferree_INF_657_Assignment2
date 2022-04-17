import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./shared/Card";
import colors from "./shared/config/colors";
import ChoreData from "./ChoreData";
import Chore from "./Chore";


export default function ChoreList({ taskList }) {
  const list = () => {
    return taskList.map((task) => {
      return (
        <Card key={task.id}>
           <h1>All Chores</h1>
            <h6>{ChoreData.map((chore)=> (
              <Chore key={chore.id} title={chore.title} description={chore.description}/>
            ))}</h6>
        </Card>
      );
    });
  };
  return <ScrollView style={styles.container}>{list()}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
  },
  secondaryContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "powderblue",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  description: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
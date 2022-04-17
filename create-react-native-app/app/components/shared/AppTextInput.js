import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import customStyles from "./config/customStyles";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={customStyles.colors.black}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={customStyles.colors.tertiary}
        style={customStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: customStyles.colors.primary,
 
    flexDirection: "row",
    width: "100%",
    padding: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
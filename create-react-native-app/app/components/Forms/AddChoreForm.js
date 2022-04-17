import React from "react";
import { StyleSheet, Image, View } from "react-native";

import AppScreen from "../shared/AppScreen";
import AppForm from "./AppForm";
import AppFormInput from "./AppFormInput";
import SubmitButton from "./SubmitButton";
import CustomText from "../shared/CustomText";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  title: yup.string().label("Chore Title"),
  description: yup.string().label("Chore Description"),
});

export default function AddChoreForm() {
  return (
    <AppScreen>
      <Image style={styles.logo} source={require("../../assets/favicon.png")} />
      <View style = {styles.container}>
        <CustomText  >
            Add a Chore
        </CustomText>
        <AppForm 
            initialValues={{ title: "", description: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="silverware-clean"
            name="title"
            placeholder="Title"
            textContentType="string"
            keyboardType="string"
            />
            <AppFormInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="broom"
            name="description"
            placeholder="Description"
            textContentType="string"
            keyboardType="string"
            />
            <SubmitButton title="Add Chore" />
        </AppForm>
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
      margin: 5,
      textAlign: 'center',
    
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
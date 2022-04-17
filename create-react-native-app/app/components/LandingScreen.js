import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppButton from "./shared/AppButton";
import colors from './shared/config/colors';
import CustomText from "./shared/CustomText";



export default function LandingScreen() {
    return (
        <View style = {styles.background}>
            <View style= {styles.welcomeContainer}>
                <CustomText >Welcome to Your Family Chores!</CustomText>
            </View>
                <View style = {styles.bottom}>
                    <AppButton title="Login" onPress={() => console.log("Login Button")}/>
                    <AppButton title="Sign Up" onPress={() => console.log("Sign Up Button")}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    bottom: {
        flexDirection: "column",
        marginTop: 600,
    },
    welcomeContainer: {
        position: "absolute",
        top: 300,
        justifyContent: "center",
        textAlign: "center",
        paddingLeft: 78,
        fontWeight: "bold",
        fontSize: "333"
    }
});
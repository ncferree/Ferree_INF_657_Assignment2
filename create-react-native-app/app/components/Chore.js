import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet,  } from "react-native";

import colors from "./shared/config/colors";


export default function Chore ({id, title, description}) {
    return(
        <View style={styles.mainContainer}>
        <View style={styles.secondaryContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
       
      </View>
    );
}

Chore.propTypes={
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        margin: '5%',
        padding: 25,
        paddingTop: 40,
      },
      title: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 5,
      },
     description: {
        fontSize: 25,
        padding: 5,
      },
})
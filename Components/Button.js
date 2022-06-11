import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Button(props) {
  const onPress = () => {};
  return (
    <View>
      <TouchableOpacity style={styles(props.size).button} onPress={props.onPress}>
        <Text style={{ fontSize: 25, color: "white" }}> {props.title} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (size) => ({
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 100,
    height: size,
    width: size,
    justifyContent :"center",
  },
});

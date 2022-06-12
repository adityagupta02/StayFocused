import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Button from "./Button";

export default function Focus(props) {
  const [text, setText] = useState("");
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to focus on?</Text>
      <View style = {styles.inputContainer}>
        <TextInput style ={{flex:1, marginRight:20}} value={text} onChangeText = {text => setText(text)}/>
        <Button title = '+' size = {60} onPress = {()=>{props.addFocus(text);}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin:20,
    marginTop:20,
  },
  title: {
    color: "white",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  }
});

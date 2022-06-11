import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-web';
import Button from "./Button";

export default function FocusHistory(props) {
  return (
    <View style = {styles.container}>
        <Text style={styles.heading}>
            Tasks you have focused on:
        </Text> 
        <View style={{flex:0.8}}>
        <Text style={styles.taskType}>Completed Tasks</Text>
        <FlatList contentContainerStyle={{alignItems: 'center'}} data={props.success} renderItem={({item}) => <Text style={{color:'green', fontSize:20, fontWeight:'bold'}}>{item}</Text>}/>    
        <Text style={styles.taskType}>Incompleted Tasks</Text>
        <FlatList contentContainerStyle={{alignItems: 'center'}} data={props.failure} renderItem={({item}) => <Text style={{color:'red', fontSize:20, fontWeight:'bold'}}>{item}</Text>}/>          
        </View>
        <View style={{marginTop:50}}>
            <Button title = "Clear" size = {100} onPress = {props.clear}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
    },
    heading:{
      color: "#fff",
      textAlign: "center",
      paddingTop: 20,
      fontSize: 20,
      fontWeight: "bold",
    },
    taskType:{
      color: "#fff",
      textAlign: "center",
      margin:10,
      fontSize:20,
    }
  });
  
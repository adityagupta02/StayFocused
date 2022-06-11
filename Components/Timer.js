import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Platform, Dimensions } from "react-native";
import Countdown from "./Countdown";
import Button from "./Button";

export default function Timer(props) {
  const [isStarted, setIsStarted] = useState(false);
  const [min, setMin] = useState(10);
  const windowWidth = Dimensions.get('window').width;

  const onEnd =()=>{
    vibrate();
    setIsStarted(false);
    props.onTimerEnd();
  }

  const vibrate = ()=> {
    if(Platform.OS ==='ios'){
      const interval = setInterval(()=>Vibration.vibrate(),1000);
      setTimeout(()=>clearInterval(interval),5000);
    }
    else{
      Vibration.vibrate(5000);
    }
  }
  return (
    <View style = {{flex:1}}>
      <View style = {{flex:0.4}}>
        <Countdown minutes={min} isPaused = {!isStarted} onEnd={onEnd}/>      
        <Text style={styles.title}> Focusing on: </Text>
        <Text style={styles.focus}>{props.focus}</Text>
      </View>
      <View style = {{flex:0.3}}> 
        {isStarted ? (
          <View>
            <View style={styles.button}>
              <Button title="Pause" size={windowWidth/3.5} onPress={(isStarted) => setIsStarted(false)}/>
            </View>
            <View style = {{marginLeft:10}}>
               <Button title = '-' size = {60} onPress = {()=>{props.onCancelTask()}}/>
            </View>
          </View>
        ) : (
          <View >            
            <View style={styles.button}>
              <Button title="Start" size={windowWidth/3.5} onPress={(isStarted) => setIsStarted(true)} />
            </View>
            <View style = {styles.timers}>
              <Button title="30" size={windowWidth/4} onPress={(min) => setMin(30)} />
              <Button title="15" size={windowWidth/4} onPress={(min) => setMin(15)} />
              <Button title="10" size={windowWidth/4} onPress={(min) => setMin(10)} />
            </View>
            
          </View>
        )}
      </View> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 25,
    margin: 10,
    textAlign: "center",
  },
  focus: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  timers:{
    // flex:0.1,
    flexDirection:"row",
    marginLeft:10,
  },
  timer:{
    marginLeft: 20,
  }
});

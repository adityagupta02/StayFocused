import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Countdown(props) {
  const [millis, setMillis] = useState(props.minutes * 60 * 1000);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  const interval = React.useRef(null); 

  const format = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const countDown = ()=>{
    setMillis((time)=>{
      if(time===0){
        clearInterval(interval.current);
        props.onEnd();
        return time;
      }
      else
        return (time-1000);
    })
  }

  useEffect( () =>{
    if(props.isPaused){
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return ()=> clearInterval(interval.current);
  }, [props.isPaused])

  useEffect( () => {
    setMillis(props.minutes * 60 * 1000)
  },[props.minutes])

  return (
    <View>
      <Text style={styles.text}>
        {format(minute)}:{format(seconds)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 60,
    margin: 20,
    padding: 20,
    color: "white",
    backgroundColor: "#141834",
  },
});

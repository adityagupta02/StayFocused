import {useState} from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Focus from './Components/Focus';
import FocusHistory from './Components/FocusHistory';
import Timer from './Components/Timer';

export default function App() {
  const [focus, setFocus] = useState(null);
  const [focusHistorySuccess, updateFocusHistorySuccess] = useState([]);  
  const [focusHistoryFailure, updateFocusHistoryFailure] = useState([]);
  const height = StatusBar.currentHeight;
  const onClear = ()=>{
    updateFocusHistoryFailure([]);    
    updateFocusHistorySuccess([]);
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}><Text style={styles.titleText}>StayFocused</Text></View>
      {focus ? (
        <View style = {{flex:1}}>
          <Timer focus={focus} onTimerEnd = {()=>{updateFocusHistorySuccess([...focusHistorySuccess,focus]);setFocus(null);}} onCancelTask = {()=>{ 
            updateFocusHistoryFailure([...focusHistoryFailure,focus]);setFocus(null);}} />
        </View>
        ):(
          <View style = {{flex:1}}>        
            <Focus addFocus = {setFocus}/>            
            <FocusHistory success = {focusHistorySuccess} failure={focusHistoryFailure} clear={onClear}/>         
          </View>
      )}   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253172',
    marginTop: StatusBar.currentHeight,
    borderColor: '#141834',    
  },  
  title:{
    backgroundColor: '#141834'
  },
  titleText:{
    color: "#fff",
    padding: 15,
    fontSize: 20,
    fontWeight: "bold",
  }
});

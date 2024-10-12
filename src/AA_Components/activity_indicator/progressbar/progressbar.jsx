import { StyleSheet, Text, View,Animated, Button, } from 'react-native'
import {React,useRef,useEffect, useState} from 'react'
import ControlBar from './controlledProgress'

const ProgressBar = () => {
    const pos=useRef(new Animated.Value(0)).current
    const[run,setRun]=useState(true)
   
  const Prog=()=>{
    Animated.timing(pos,{
        toValue: run?100:0,
        duration: 1000,
        useNativeDriver: true,
      }).start()
  }

     
console.log('Running')
    

  return (
    <View style={{padding:20}}> 
       <View style={{width:'100%',height:10,borderRadius:10,backgroundColor:'pink',position:'relative',overflow:'hidden',
        marginVertical:20
       }}>
          <Animated.View 
        style={{width:50,height:'100%',backgroundColor:'blue'}}>

        </Animated.View>
       </View>
       <Button onPress={()=>{Prog()}} title="run"/>

        <ControlBar/>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,Animated } from 'react-native'
import {React,useRef,useEffect} from 'react'


const Skelton = () => {

 const anim=useRef(new Animated.Value(0.3)).current
 const animate=()=>{
  Animated.timing(anim,{
    toValue: 1,
    duration: 2000,
    delay:500,
    useNativeDriver: true,
  }).start(()=>{
    Animated.timing(anim,{
      toValue: 0.3,
      duration: 2000,
      delay:500,
      useNativeDriver: true,
    }).start(()=>{animate()});
  })
 }


 useEffect(()=>{
  animate()
 },[])
  return (
    <View style={{backgroundColor:'#fff'}}>
      <Animated.View style={{ marginTop:20,height: 100, backgroundColor: '#999',opacity:anim}} ></Animated.View>
      <Animated.View style={{ marginRight:20,height: 90,width:90,borderRadius:60, backgroundColor: '#ccc',opacity:anim,alignSelf:'flex-end',borderWidth:1,borderColor:'#999'}} ></Animated.View>
      <Animated.View style={{ marginTop:-40,height: 20,width:200, backgroundColor: '#999',opacity:anim}} ></Animated.View>
      <Animated.View style={{ marginTop:20,height: 20,width:200, backgroundColor: '#999',opacity:anim}} ></Animated.View>
      <Animated.View style={{ marginTop:20,height: 100, backgroundColor: '#999',opacity:anim}} ></Animated.View>
      <Animated.View style={{ marginTop:20,height: 200, backgroundColor: '#999',borderWidth:2,borderColor:'#999',opacity:anim}} ></Animated.View>
      <Animated.View style={{ marginTop:20,height: 100, backgroundColor: '#999',opacity:anim}} ></Animated.View>
    </View>
  )
}

export default Skelton

const styles = StyleSheet.create({})
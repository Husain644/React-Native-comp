import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Canvas,Skia,usePathValue,Path } from '@shopify/react-native-skia'
import { useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'



const path=Skia.Path.Make().moveTo(100,100);
const DrawLineOnTouchInScrollView = ({scrollDisabledBtn }) => {
  const [bgColor,setBgColor]=useState('#fff')
const pathRef=usePathValue((p)=>{
    'worklet';
    return path
  },path)
  const gesture=Gesture.Pan()
  .onStart((e)=>{
     'worklet';
    scrollDisabledBtn(true)
    path.moveTo(e.x,e.y)
  })
  .onUpdate((e)=>{
    path.lineTo(e.x,e.y)
  })
  .onEnd((e)=>{
     'worklet';
     scrollDisabledBtn(false)
  }).runOnJS(true)

   
  return (
    <View style={styles.container}>
     <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
         <GestureDetector gesture={gesture}>
         <Canvas   style={{height:350,width:350, backgroundColor:'#000'}}>
           <Path path={pathRef} style='stroke' strokeWidth={2} color={bgColor} />
        </Canvas>
      </GestureDetector>
      <View style={{gap:20}}>
        <TouchableOpacity onPress={()=>{setBgColor('#fff')}} style={{backgroundColor:'#fff',width:35,height:35,borderRadius:20}} activeOpacity={.4}>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setBgColor('#ff0000')}} style={{backgroundColor:'#ff0000',width:35,height:35,borderRadius:20}} activeOpacity={.4}>
        </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setBgColor('#008000')}} style={{backgroundColor:'#008000',width:35,height:35,borderRadius:20}} activeOpacity={.4}>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setBgColor('#ffff00')}} style={{backgroundColor:'#ffff00',width:35,height:35,borderRadius:20}} activeOpacity={.4}>
        </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setBgColor('#0000ff')}} style={{backgroundColor:'#0000ff',width:35,height:35,borderRadius:20}} activeOpacity={.4}>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setBgColor('#555757')}} style={{backgroundColor:'#555757',width:35,height:35,borderRadius:20}} activeOpacity={.4}>
        </TouchableOpacity>
      </View>
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10}}>
           <TouchableOpacity onPress={()=>{path.reset()}} style={[styles.btnStyle,{width:120}]} activeOpacity={.4}>
           <Text style={{fontSize:25,color:'#fff',padding:5,textAline:'center',fontWaight:'bold'}}>
             reset bord
           </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{}} style={[styles.btnStyle,{width:120}]} activeOpacity={.4}>
           <Text style={{fontSize:20,color:'#2ef179',padding:5,textAline:'center',fontWaight:'bold'}}>
             button
           </Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default DrawLineOnTouchInScrollView;

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#f8bcf8aa'
    },
    btnStyle:{
    backgroundColor:'#663399',
    width:'100%', 
    borderRadius:10,
    alignItems:'center'
    }
});

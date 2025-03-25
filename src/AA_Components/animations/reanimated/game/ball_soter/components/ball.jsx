import { StyleSheet, Text, View,useWindowDimensions } from "react-native";
import {React,useEffect} from "react";
import Animated,{ useAnimatedStyle,useSharedValue,withTiming,useFrameCallback } from "react-native-reanimated";


const Ball = ({color='red',path={y1:-260,x1:150,y2:0},run=false}) => {
        const {height,width}=useWindowDimensions()
    const offset1X=useSharedValue(0);
    const offset1Y=useSharedValue(0);
    const offsetStyle=useAnimatedStyle(()=>{
        const scale = 2 / (3 - Math.cos(2 * offset1X.value));
        return{
        transform:[{translateX: scale * Math.cos(offset1X.value) * Math.min(width / 2 - 120, 200),},
            {translateY:scale * (Math.sin(2 * offset1X.value) / 2) * 200 }]
    }}) 
//   const mover=()=>{
//   offset1Y.value=withTiming(path.y1,{duration:500},(isOk)=>{
//     if(isOk){
//         offset1X.value=withTiming(path.x1,{duration:1000},(isOk2)=>{
//             if(isOk2){ offset1Y.value=withTiming(path.y2,{duration:500})}
//         })}});}
useFrameCallback((frameInfo) => {
            offset1X.value = frameInfo.timeSinceFirstFrame / 350;
          });
 useEffect(()=>{
    if(run){ 
        
    }
 },[run])

  return (
      <Animated.View style={[styles.ball,{backgroundColor:color},offsetStyle]}>
      </Animated.View>
  );
};

export default Ball;

const styles = StyleSheet.create({
    ball: {
      width:40,
      height:40 ,
      borderRadius:23,
      borderWidth:1,
      borderColor:'#fff',
      zIndex:10
    }
});

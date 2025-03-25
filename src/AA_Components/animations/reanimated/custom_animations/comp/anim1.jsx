import { StyleSheet, Text, View,useWindowDimensions,TouchableOpacity} from "react-native";
import React from "react";
import Animated,{ useAnimatedStyle,withTiming,useSharedValue,useFrameCallback } from "react-native-reanimated"; 

export const WaveAnimation = () => {
    const {height, width} = useWindowDimensions();
    const offset=useSharedValue(1)
    const radius=50
   

    const animStyle=useAnimatedStyle(()=>{
        const angleInRadians = offset.value * Math.PI / 180;
        const x = radius * Math.cos(angleInRadians);
        const y = radius * Math.sin(angleInRadians);
        return{
        transform:[{translateX:x},{translateY:y}] 
    }})
    const animStyle2=useAnimatedStyle(()=>{
        const angleInRadians = offset.value * Math.PI / 180;
        const x = radius * Math.cos(angleInRadians);
        const y = -offset.value*.01;
        return{
            transform:[{translateX:x},{translateY:y}]  
    }})
    useFrameCallback((frameInf)=>{
       offset.value +=3
    })
  const roundWidth=radius*2+40
  return (
  <>
  <Text style={{fontSize:25,color:'#000',textAlign:'center'}}>round path</Text>
    <View style={{width:width,height:300,alignItems:'center',justifyContent:'center',backgroundColor:'#ccc'}}>
        <View style={{width:roundWidth,height:roundWidth,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',
            borderRadius:roundWidth}}>
           <Animated.View style={[styles.box,animStyle]}>
           </Animated.View>
        </View>
    </View>
    <Text style={{fontSize:25,color:'#000',textAlign:'center'}}>Wave path</Text>
    <View style={{width:width,height:300,alignItems:'center',justifyContent:'center',backgroundColor:'#ccc'}}>
        <View style={{width:roundWidth,height:roundWidth,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',
            borderRadius:roundWidth}}>
           <Animated.View style={[styles.box,animStyle2]}>
           </Animated.View>
        </View>
    </View>
  </>
  );
};



const styles = StyleSheet.create({
    box:{width:40,
        height:40,
        backgroundColor:'red',
        borderRadius:20
    }
});

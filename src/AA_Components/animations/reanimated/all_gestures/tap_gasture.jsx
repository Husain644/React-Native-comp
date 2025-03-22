import { View, StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useState } from "react";
import Animated,{useSharedValue,withTiming,useAnimatedStyle} from "react-native-reanimated";

export default function Tap_Gesture() {
  const color=useSharedValue("#b58df1")
  const anymatedStyles=useAnimatedStyle(()=>{
    return{
      backgroundColor: color.value
    }
  })
  const singleTap = Gesture.Tap()
    .maxDuration(500)
    .onStart(() => {
      console.log("Single tap!");
 
      color.value='#ccc'
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(300)
    .numberOfTaps(2)
    .onStart(() => {
      color.value='#eaea';
      console.log("Double tap!");
     
    });
  
    const FourthTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(4)
    .onStart(() => {
      color.value='#008000';
      console.log("fourth tap!"); 
    
    });

  return (
    <GestureDetector gesture={Gesture.Exclusive(FourthTap,doubleTap, singleTap)}>
      <View style={{width:'100%',justifyContent:'center',alignItems:'center',padding:20}}>
        <Text> Tap Gesture.</Text>
        <Animated.View style={[styles.box,anymatedStyles]}>
          <Text style={{ fontSize: 18, color: "#000ff00", fontWeight: "700" }}>
             Click single or double tap
          </Text>
        </Animated.View>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 120,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center'
  },
});

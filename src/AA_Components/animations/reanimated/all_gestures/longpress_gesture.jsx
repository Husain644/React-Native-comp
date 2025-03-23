import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const Longpress_gesture = () => {

    const color=useSharedValue('#fff')
    const animStyle=useAnimatedStyle(()=>{return{
        backgroundColor:color.value
      }})
    const longPress=Gesture.LongPress()
    .onBegin(()=>{
      console.log('long Press start')
      color.value='#cccc'
    }).onEnd((e,success)=>{
     if(success){
      console.log(`Long pressed for ${e.duration} ms!`);
      color.value='#fff'
     }
    })



  return (
    <View style={styles.container}>
      <GestureDetector gesture={longPress}>
         <Animated.View style={[styles.box,animStyle]}></Animated.View>
      </GestureDetector>
    </View>
  );
};

export default Longpress_gesture;

const styles = StyleSheet.create({
  container: {
    height: 300,
    with: "100%",
    backgroundColor: "#ccc",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor:'#0808',
    borderWidth:2
  },
});

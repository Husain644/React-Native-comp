import { StyleSheet, Text, View ,useWindowDimensions} from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";


const Simultaneous_gesture = () => {
 const {height, width} = useWindowDimensions();
  console.log(height,width)
    // Pan gesture
    const offset=useSharedValue({x:0,y:0}) 
    const start=useSharedValue({x:0,y:0})
    const panStyle=useAnimatedStyle(()=>{
      let val=`${Math.round(offset.value.x)}deg`
      return {
        transform: [
          { translateX: offset.value.x },
          { translateY: offset.value.y },
          {rotateZ:val}
        ] 
      }
    })
   const Pan=Gesture.Pan().onUpdate(
    (e)=>{
      if(e.absoluteX >55 & e.absoluteX < width-50){
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };}
    }
   ).onEnd((e)=>{
    start.value = {
      x: offset.value.x,
      y: offset.value.y,
    };
   })

   
    // long press gesture
    const color=useSharedValue('#fff')
    const animStyle=useAnimatedStyle(()=>{return{
        backgroundColor:color.value
      }})
    const longPress=Gesture.LongPress().maxDistance(1000)
    .onBegin(()=>{
      console.log('long Press start')
      color.value='#cccc'
    }).onEnd((e,success)=>{
     if(success){
      console.log(`Long pressed for ${e.duration} ms!`);
      color.value='#7deea8'}})

  return (
    <View style={styles.container}>
      <Text style={{fontSize:16,color:'#000'}}>Simultaneous_Gesture</Text>
      <GestureDetector 
  gesture={Gesture.Simultaneous(longPress,Pan)}>
         <Animated.View style={[styles.box,animStyle,panStyle]}>

         </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default Simultaneous_gesture;

const styles = StyleSheet.create({
  container: {
    height: 300,
    with: "100%",
    backgroundColor: "#c7a8a8",
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

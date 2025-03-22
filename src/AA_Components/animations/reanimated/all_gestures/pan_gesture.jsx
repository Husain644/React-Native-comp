import { Button, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'
import Animated, {
  useSharedValue, useAnimatedStyle, withSpring
  } from 'react-native-reanimated'
import { GestureDetector, Gesture, } from 'react-native-gesture-handler'


const GestureComp = () => {
   const {height, width} = useWindowDimensions();
  
  // gesture 1 
  const start = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.1 : 1) },
      ],
      backgroundColor: isPressed.value ? '#09548b' : '#8c99ec',
    };
  });
  const gesture = Gesture.Pan()
  .onBegin(() => {
    isPressed.value = true;
  })
  .onUpdate((e) => {
    offset.value = {
      x: e.translationX + start.value.x,
      y: e.translationY + start.value.y,
    };
  })
  .onEnd(() => {
    start.value = {
      x: offset.value.x,
      y: offset.value.y,
    };
  })
  .onFinalize(() => {
    isPressed.value = false;
  });
// getsure 2

  // Shared values for X and Y position
  const translateX = useSharedValue(0);

  // Define Pan Gesture
  const gesture2 = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    }) 
    .onEnd((event) => {
     
      if(event.absoluteX > (width/2)){
        translateX.value = withSpring(width-100);
      }
      else{
        translateX.value = withSpring(0);
      };

      
    });

  // Animated styles for smooth movement
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return ( 
    <View style={{ flex: 1, alignItems: 'center', padding: 10, justifyContent: 'center'}}>
      <Text style={{fontSize:24,color:'#000'}}>pan gesture drag to left right up down any side</Text>

      <View style={{height:300,backgroundColor: '#eaea',width:'100%'}}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyles]}>
        <Text style={{fontSize:16,color:'#000'}}>Pan_Gesture</Text>
        </Animated.View>
      </GestureDetector> 
      </View>

      <View style={{height:100,width:'100%',backgroundColor:'#ccc',justifyContent:'center',padding:10}}>
        
      <GestureDetector gesture={gesture2}>
             <Animated.View style={[styles.box, animatedStyle2]} >
             <Text style={{fontSize:14,color:'#fff'}}>Swipe right to unlock</Text>
             </Animated.View>
      </GestureDetector> 
      </View>


    </View>
  )
}

export default GestureComp

const styles = StyleSheet.create({
  box: { width: 70, height:60, backgroundColor: 'blue', borderRadius: 10,alignItems:'center' },
  container: {
    width: 100,
    height: 100,
    backgroundColor: '#999',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
  },
})
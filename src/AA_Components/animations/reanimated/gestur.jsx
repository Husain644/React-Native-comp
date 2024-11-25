import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {
  useSharedValue, useAnimatedStyle, withSpring, interpolate,
  withClamp, withDecay, withTiming
} from 'react-native-reanimated'
import { GestureDetector, Gesture, PanGestureHandler,TapGestureHandler } from 'react-native-gesture-handler'

const GestureComp = () => {
  const color=useSharedValue(1)
  const colorStyle=useAnimatedStyle(()=>{
    return {
      backgroundColor:color.value===1?'#ccc':'#CD5C5C'
    }
  })
  const start = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
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


  return (
    <View style={{ flex: 1, height: 500, alignItems: 'center', padding: 10, justifyContent: 'center', backgroundColor: '#eaea' }}>

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyles]}>
          <Text>2</Text>
        </Animated.View>
      </GestureDetector>
       <TapGestureHandler maxDelayMs={200} numberOfTaps={2} onActivated={()=>{color.value=2}}>
        <Animated.View style={[{width:100,height:100},colorStyle]}><Text>double tap</Text></Animated.View>
       </TapGestureHandler>
       <Button onClick={()=>{color.value=1}} title='to change color' />
     
    </View>
  )
}

export default GestureComp

const styles = StyleSheet.create({
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
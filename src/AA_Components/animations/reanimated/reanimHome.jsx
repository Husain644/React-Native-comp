import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {
  useSharedValue, useAnimatedStyle, withSpring, interpolate,
  withClamp, withDecay, withTiming
} from 'react-native-reanimated'
import { GestureDetector, Gesture, PanGestureHandler } from 'react-native-gesture-handler'

const ReanimHome = () => {
  const val = useSharedValue(1)

  const animat = useAnimatedStyle(() => {
    const rotate = interpolate(val.value, [1, 2], [0, 2000]);
    return { transform: [{ rotateZ: `${rotate}deg` }] }
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

      <PanGestureHandler onGestureEvent={gesture}>
        <Animated.View style={[styles.container, animat]}>
          <Text>1</Text>
        </Animated.View>
      </PanGestureHandler>

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyles]}>
          <Text>2</Text>
        </Animated.View>
      </GestureDetector>


      <Button title="Change Size"
        onPress={() => { val.value = withTiming(val.value === 2 ? 1 : 2, { duration: 10000 }) }} />
    </View>
  )
}

export default ReanimHome

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
    marginTop:10
  },
})
import React from 'react';
import { StyleSheet,View,ImageBackground } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import gear from './../../../../assets/images/gear.png'

export default function Rotation_Gesture() {
  const angle = useSharedValue(0);
  const startAngle = useSharedValue(0);

  const rotation = Gesture.Rotation()
    .onStart(() => {
      startAngle.value = angle.value;
    })
    .onUpdate((event) => {
      angle.value = startAngle.value + event.rotation;
    });

  const boxAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${angle.value}rad` }],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={rotation}>
        <Animated.View style={[boxAnimatedStyles]}>
          <ImageBackground style={styles.box} resizeMode='cover' source={gear}>
                <View style={styles.dot}> 
                </View>
                <View style={styles.dot}>
                </View>
          </ImageBackground>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ccc',
    marginTop:10
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 20,
    backgroundColor: '#6527c4',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding:20
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e91616',
  },
});

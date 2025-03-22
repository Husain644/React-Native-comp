import { View, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated,{useSharedValue,withTiming,use} from 'react-native-reanimated';

export default function Longpress_gesture() {
  
  

  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      console.log(`Long pressed for ${e.duration} mili seconds!`);
    }
  }).onBegin(()=>{console.log('long press start')})

  return (
    <View style={{height:300,padding:20,backgroundColor:'#ccffd'}}>
   
      <GestureDetector gesture={longPressGesture}>
              <Animated.View style={styles.box} >  
              </Animated.View>
        </GestureDetector>
    </View>
 
  );
}

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: 120,
    backgroundColor:'#00fff',
    borderRadius: 20,
    marginBottom: 30,
  },
});
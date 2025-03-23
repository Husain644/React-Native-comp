import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { View,Text } from 'react-native';

export default function Exclusive_Gesture() {
  const singleTap = Gesture.Tap().onEnd((_event, success) => {
    if (success) {
      console.log('single tap!');
    }
  });
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((_event, success) => {
      if (success) {
        console.log('double tap!');
      }
    });

  const taps = Gesture.Exclusive(doubleTap, singleTap);

  return (
    <GestureDetector gesture={taps}>
       <View style={{height:300,width:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'#ccc',marginTop:10}}>
          <View style={{height:100,width:100,backgroundColor:'#eaea'}}>
          </View>
          <Text style={{fontSize:18,color:'#000',padding:10,bottom:-50,position:'absolute'}}>Only one of the provided gestures can become active, with the first one having a higher priority</Text>
       </View>
    </GestureDetector>
  );
}


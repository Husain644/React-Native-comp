import { GestureDetector, Gesture } from 'react-native-gesture-handler';

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
      <Component />
    </GestureDetector>
  );
}


// Only one of the provided gestures can become active, with the first one having a higher priority than the second one 
// (if both gestures are still possible, the second one will wait for the first one to fail before it activates),
//  second one having a higher priority than the third one, and so on. It is equivalent to having some gesture handlers 
//  where the second one has the waitFor prop set to the first handler, third one has the waitFor prop set to the first and 
//  the second one, and so on.

// For example, if you want to make a component that responds to single tap as well as to a double tap, you can accomplish 
// that using Exclusive:
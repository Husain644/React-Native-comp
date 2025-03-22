import { View, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const COLORS = ['red', 'green', 'blue', 'purple', 'orange', 'cyan'];

export default function Native_Gesture() {
  const native = Gesture.Native();

  return (
    <GestureDetector gesture={native}>
      <ScrollView style={{ flex: 1 }}>
        <ScrollableContent scrollGesture={native} />
      </ScrollView>
    </GestureDetector>
  );
}

function ScrollableContent({ scrollGesture }) {
  return (
    <View>
      {COLORS.map((color) => (
        <Rectangle key={color} color={color} scrollGesture={scrollGesture} />
      ))}
    </View>
  );
}

function Rectangle({ color, scrollGesture }) {
  const pan = Gesture.Pan().blocksExternalGesture(scrollGesture);

  return (
    <View
      key={color}
      style={{ width: '100%', height: 250, backgroundColor: color }}>
      <GestureDetector gesture={pan}>
        <View style={{ width: '100%', height: 50, backgroundColor: 'black' }} />
      </GestureDetector>
    </View>
  );
}
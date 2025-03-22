import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function Composed_Gesture() {
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });
  const popupPosition = useSharedValue({ x: 0, y: 0 }); 
  const popupAlpha = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    };
  });

  const animatedPopupStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: popupPosition.value.x },
        { translateY: popupPosition.value.y },
      ],
      opacity: popupAlpha.value,
    };
  });

  const dragGesture = Gesture.Pan()
    .onStart((_e) => {
      popupAlpha.value = withTiming(0);
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
    });

  const longPressGesture = Gesture.LongPress().onStart((_event) => {
    popupPosition.value = { x: offset.value.x, y: offset.value.y };
    popupAlpha.value = withTiming(1);
  });

  const composed = Gesture.Race(dragGesture, longPressGesture);

  return (
    <Animated.View>
      <Popup style={animatedPopupStyles} />
      <GestureDetector gesture={composed}>
        <View style={animatedStyles} ></View>
      </GestureDetector>
    </Animated.View>
  );
}

import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const Popup = (style) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => setIsVisible(true);
  const hidePopup = () => setIsVisible(false);

  return (
    <View style={styles.container}>
      <Button title="Show Popup" onPress={showPopup} />

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={hidePopup}
      >
        <View style={[styles.modalOverlay,style]} >
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is a Popup!</Text>
            <Button title="Close" onPress={hidePopup} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});


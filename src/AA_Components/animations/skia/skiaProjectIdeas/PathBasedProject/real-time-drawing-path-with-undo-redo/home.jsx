import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Canvas, Path, Skia, SkPath } from "@shopify/react-native-skia";
import { useSharedValue } from "react-native-reanimated";
import { Gesture,GestureDetector } from "react-native-gesture-handler";

export default function DrawingWithUndoRedo() {
  const [paths, setPaths] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const current = useSharedValue(null);

  const gesture = Gesture.Pan()
      .onStart((e) => {
      console.log('start')
      const newPath = Skia.Path.Make();
      newPath.moveTo(e.x, e.y);
      current.value = newPath;})
      .onUpdate((e)=> { 
        current.value?.lineTo(e.x, e.y);})
    .onEnd((e) => {
        'worklet';
      if (current.value) {
        setPaths(prev => [...prev, current.value]);
        setRedoStack([]); // Clear redo stack on new draw
        current.value = null;}
    }).runOnJS(true)

  const handleUndo = () => {
    if (paths.length > 0) {
      const last = paths[paths.length - 1];
      setPaths(prev => prev.slice(0, -1));
      setRedoStack(prev => [last, ...prev]);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const [restored, ...rest] = redoStack;
      setPaths(prev => [...prev, restored]);
      setRedoStack(rest);
    }
  };

  return (
    <View style={styles.container}>
        <GestureDetector gesture={gesture}>
        <Canvas style={styles.canvas}>
        {paths.map((p, index) => (
          <Path key={index} path={p} color="blue" strokeWidth={3} style="stroke" />
        ))}
        {current.current && (
          <Path path={current} color="lightblue" strokeWidth={3} style="stroke" />
        )}
      </Canvas>
        </GestureDetector>
      <View style={styles.controls}>
        <Button title="Undo" onPress={handleUndo} disabled={paths.length === 0} />
        <Button title="Redo" onPress={handleRedo} disabled={redoStack.length === 0} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 50,
  },
  canvas: {
    width: "100%",
    height: 400,
    backgroundColor: "#fff",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas, Path, Skia, Paint } from '@shopify/react-native-skia';

export default function HeartShape() {
  const path = Skia.Path.Make();

  const x = 150; // center x
  const y = 150; // center y
  const size = 100;

  path.moveTo(x, y + size / 4);

  // Left half of heart
  path.cubicTo(
    x - size, y - size / 2,  // control point 1
    x - size, y + size,      // control point 2
    x, y + size              // end point
  );

  // Right half of heart
  path.cubicTo(
    x + size, y + size,      // control point 1
    x + size, y - size / 2,  // control point 2
    x, y + size / 4          // end point (back to top center)
  );

  path.close();

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path path={path} color="red" />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
  },
  canvas: {
    height: 300,
    width: 300,
    backgroundColor: '#000',
  },
});

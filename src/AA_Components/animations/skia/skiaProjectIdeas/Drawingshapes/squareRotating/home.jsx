import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas, Rect, Circle,useClock, Group } from '@shopify/react-native-skia';
import { useSharedValue, withTiming, withRepeat, useDerivedValue } from 'react-native-reanimated';

export default function SquareRotating() {
  const t=useClock()
  const R = 100;
  const CENTER_X = 150;
  const CENTER_Y = 150;

  const angle = useSharedValue(0);

  useEffect(() => {
    angle.value = withRepeat(withTiming(2 * Math.PI, { duration: 2000 }), -1);
  }, []);
   
  const rotate = useDerivedValue(() => angle.value);
  console.log(rotate.current)
  // Calculate x and y using radians
  const derivedX = useDerivedValue(() => {
    return Math.cos(t.value*0.001) * R -20;
  });
  const derivedY = useDerivedValue(() => {
    return Math.sin(t.value*0.001) * R -20;
  });

  return (
    <View style={styles.container}>
      <Canvas style={{ height: 350, width: 350, backgroundColor: '#000' }}>
        <Rect
          x={derivedX}
          y={derivedY}
          width={40}
          height={40}
          color="lightblue"
          style="stroke"
          strokeWidth={2}
           transform={[{ translateX: 150 },
            { translateY: 150 },
               { rotate: rotate.value}
        ]}
        />
        <Circle
          r={R}
          cx={CENTER_X}
          cy={CENTER_Y}
          style="stroke"
          strokeWidth={2}
          color="#fff"
        />

      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: '100%',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

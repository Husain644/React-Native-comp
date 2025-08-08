import { View, StyleSheet, Button } from "react-native";
import {
  Canvas,
  Circle,
} from "@shopify/react-native-skia";
import {
  useSharedValue,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";


export default function AnimatedCircleRadius() {
  const animatedRadius = useSharedValue(30); // initial radius

  const skiaRadius = useDerivedValue(() => {
    return animatedRadius.value;
  }, [animatedRadius]);

  const toggleRadius = () => {
    animatedRadius.value = withTiming(animatedRadius.value === 30 ? 100 : 30, {
      duration: 1000,
    });
  };

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Circle
          cx={150}
          cy={150}
          r={skiaRadius}
          color="skyblue"
        />
      </Canvas>
      <Button title="Animate Radius" onPress={toggleRadius} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:350,
    width:'100%',
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  canvas: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});

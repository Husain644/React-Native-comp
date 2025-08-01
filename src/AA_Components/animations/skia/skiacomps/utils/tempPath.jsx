import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Canvas, Circle,Path,Skia } from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useDerivedValue,
  withRepeat,
  withTiming,
  runOnUI,
} from "react-native-reanimated";

// Interpolation helper
const lerp = (a, b, t) => {
  "worklet";
  return a + (b - a) * t;
};

// Distance between 2 points
const getDistance = (p1, p2) => {
  "worklet";
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
};

// Normalize path segments
const normalizeSegments = (points) => {
  "worklet";
  const segments = [];
  let totalLength = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const start = points[i];
    const end = points[i + 1];
    const length = getDistance(start, end);
    totalLength += length;
    segments.push({ start, end, length });
  }

  let accumulated = 0;
  for (let segment of segments) {
    segment.tStart = accumulated / totalLength;
    accumulated += segment.length;
    segment.tEnd = accumulated / totalLength;
  }

  return segments;
}; 

export default function ConstantSpeedSkiaExample() {
  const progress = useSharedValue(0);

  const points = [
    { x: 30, y: 30 },
    { x: 280, y:30 },
    { x: 280, y: 150 },
    { x: 30, y: 150 },
    { x: 30, y: 30 },
  ];
  const path=Skia.Path.Make()
  for (let i=0;i<points.length;i++){
    if(i===0){path.moveTo(points[0].x,points[0].y)}
    else{path.lineTo(points[i].x,points[i].y)}
  }
  const segments = useSharedValue(normalizeSegments(points));

  useEffect(() => {
    runOnUI(() => {
      segments.value = normalizeSegments(points);
    })();
    progress.value = withRepeat(withTiming(1, { duration: 3000 }), -1, false);
  }, []);

  const animatedPointx = useDerivedValue(() => {
    const t = progress.value;
    const segs = segments.value;
    const segment = segs.find((s) => t >= s.tStart && t <= s.tEnd);
    if (!segment) return { x: points[0].x, y: points[0].y };

    const localT = (t - segment.tStart) / (segment.tEnd - segment.tStart);
    return  lerp(segment.start.x, segment.end.x, localT)
  });
  
  const animatedPointy = useDerivedValue(() => {
    const t = progress.value;
    const segs = segments.value;
    const segment = segs.find((s) => t >= s.tStart && t <= s.tEnd);
    if (!segment) return { x: points[0].x, y: points[0].y };

    const localT = (t - segment.tStart) / (segment.tEnd - segment.tStart);
    return  lerp(segment.start.y, segment.end.y, localT)
  });

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path path={path} style="stroke" strokeWidth={5} color='#ccc' />
        <Circle
          cx={animatedPointx}
          cy={animatedPointy}
          r={8}
          color="orange"
        />

      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  canvas: {
    width: 320,
    height: 360,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
});

import React, { useRef, useState } from "react";
import { View, Button } from "react-native";
import { Canvas, Path, Skia, usePathValue,PathOp,FillType } from "@shopify/react-native-skia";
import { useSharedValue, useDerivedValue } from "react-native-reanimated";

export default function SkiaExample() {
  const [animPath] = useState(
    Skia.Path.Make().moveTo(100, 100).lineTo(250, 250)
  );
  const pathRef = usePathValue((p) => {
    "worklet";
  }, animPath);
    // 🔁 Apply a scale + rotation
  const matrix = [
    Math.cos(90), Math.sin(Math.PI / 2), 10, // a, b, 0
    -Math.sin(Math.PI / 4), Math.cos(Math.PI / 4), 0, // c, d, 0
    0, 0, 1, // tx, ty, 1
  ];

  const resetPath = () => {
    animPath.reset();
    animPath.moveTo(10, 200).lineTo(300, 200)
    animPath.offset(10,10)
    // animPath.rLineTo(0,-100)
    // animPath.rLineTo(-100,0)
    // animPath.arcToTangent(10,-100,100,300,120)
    // animPath.trim(0.1,0.4,true)
    animPath.transform(matrix)
    // console.log(animPath.getPoint(0,5))
    // console.log(animPath.isEmpty())

  };

  return (
    <View style={{ height: 350, width: "100%" }}>
      <Canvas style={{ height: 300, width: 350,backgroundColor:'#ccc' }}>
        <Path path={pathRef} color="blue" strokeWidth={4} style="stroke" />
         
      </Canvas>
      <Button title="Reset Path" onPress={resetPath} />
    </View>
  );
}

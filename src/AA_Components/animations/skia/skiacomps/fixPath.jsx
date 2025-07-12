import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
// import TrackPlayer,{ State } from 'react-native-track-player';
import React, { useState, useEffect, useRef } from "react";
import { Svg } from "../data/data";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  usePathValue,
  Canvas,
  Skia,
  Path,
  DashPathEffect,
  DiscretePathEffect,
  Line2DPathEffect,
  processTransform2d,
  Group,
} from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Img, music } from "../../../../assets/assets";
import Sound from "react-native-sound";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const pathPoint = [
  { x: 50, y: 30 },
  { x: 210, y: 120 },
  { x: 320, y: 110 },
  { x: 100, y: 80 },
  { x: 140, y: 0 },
  { x: 150, y: 140 },
];
const listGen = (from = 0, to) => {
  const lst = [];
  for (let i = from + 1; i <= to; i++) {
    const radius=70;
    const angle=i*.10
    lst.push({
      x: 100+Math.cos(angle)*radius,
      y: 100+Math.sin(angle)*radius, 
    }); 
  }
  return lst;
};

const FixPath = () => {
  const newPath = usePathValue((p) => {
    "worklet";
  });
  const path = Skia.Path.Make();
  listGen(0, 75).forEach((item, index) => {
    console.log(item);
    if (index === 0) {
      path.moveTo(item.x, item.y);
    } else {
      path.lineTo(item.x, item.y);
    }
  });
  const MoveX = useSharedValue(0);
  const MoveY = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onBegin((e) => {
      // console.log('x=>',Math.round(Math.max(Math.min(300,e.x-15),50)),'y=>',Math.round(Math.max(Math.min(180,e.y-15),50)));
      (MoveX.value = Math.max(Math.min(300, e.x - 15), 50)),
        (MoveY.value = Math.max(Math.min(180, e.y - 15), 50));
    })
    .onUpdate((e) => {
      if ((e.x < 300) & (e.x > 40)) {
        MoveX.value = Math.max(Math.min(300, e.x - 15), 50);
      } else {
        MoveY.value = Math.max(Math.min(180, e.y - 15), 50);
      }
    })
    .runOnJS(true);

  const AnimStyle = useAnimatedStyle(() => {
    return {
      left: MoveX.value,
      top: MoveY.value,
    };
  });
  return (
    <View>
      <Text>FixPath</Text>
      <GestureDetector gesture={gesture}>
        <View style={{ width: 400, height: 350, backgroundColor: "#ccc" }}>
          <Animated.View
            style={[
              { height: 30, width: 30, backgroundColor: "green" },
              AnimStyle,
            ]}
          ></Animated.View>
          <Canvas style={{ height: 200, width: 250,margin:20,backgroundColor:'#fff' }}>
            <Path
              path={path}
              color="blue"
              style="stroke"
              strokeJoin="round"
              strokeWidth={2}
            />
          </Canvas>
        </View>
      </GestureDetector>
    </View>
  );
};

export default FixPath;

const styles = StyleSheet.create({});

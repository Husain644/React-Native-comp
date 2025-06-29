import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { wordA } from "./data/data";
import {
  usePathValue,
  Canvas,
  Skia,
  Path,
  vec,
} from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const Skiahome = () => {
  console.log('update')
  const Pos = useSharedValue({ x: wordA[0].x, y:wordA[0].y });
  const [path, setPath] = useState(Skia.Path.Make());
  const path2 = Skia.Path.Make();
  const newPath = usePathValue((p) => {
    "worklet";
  }, path);
  const panGesture = Gesture.Pan()
    .onBegin((e) => {
      if ((e.x >wordA[0].x) & (e.x <wordA[1].x) & (e.y > wordA[0].y) & (e.y < wordA[1].y)) {
        path.moveTo(e.x, e.y);
      } else {
        console.log('origin',wordA[0].x,wordA[0].y);
        path.moveTo(wordA[0].x,wordA[0].y);
      }
      Pos.value = {
        x: e.x,
        y: e.y
      };
    })
    .onUpdate((e) => {
      Pos.value = {
        x: e.x,
        y: e.y,
      };
      if ((e.x >wordA[0].x) & (e.x <wordA[1].x) & (e.y > wordA[0].y) & (e.y < wordA[1].y)) {
        path.lineTo(e.x, e.y);
      }
    });
  const AnimStyle = useAnimatedStyle(() => {
    return {
      left: Pos.value.x - 10,
      top: Pos.value.y + 8,
    };
  });
  
  wordA.forEach((Item,index)=>{
    if (index===0){
      path2.moveTo(Item.x,Item.y);
      console.log('okkk')
    }else{
     path2.lineTo(Item.x,Item.y);
    }
  })

return (
    <View style={{}}>
      <Text>Skiahome</Text>
      <GestureDetector gesture={panGesture}>
        <Canvas style={{ backgroundColor: "#ccc", height: 650 }}>
          <Path path={newPath} color="green" style="stroke" strokeWidth={10} />
          <Path path={path2} color="white" style="stroke" strokeWidth={2} />
        </Canvas>
      </GestureDetector>
      <Animated.View
        style={[
          {
            width: 20,
            height: 20,
            backgroundColor: "red",
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: 20,
          },
          AnimStyle,
        ]}
      ></Animated.View>
      <TouchableOpacity
        onPress={() => {
          setPath(Skia.Path.Make());
        }}
        style={{ width: "100%", backgroundColor: "#eaea", borderRadius: 10 }}
      >
        <Text style={{ fontSize: 30, textAlign: "center" }}>refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Skiahome;
const styles = StyleSheet.create({});

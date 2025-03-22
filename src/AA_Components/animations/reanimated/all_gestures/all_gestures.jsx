import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { React, useState } from "react";
import Pan_Gesture from "./pan_gesture";
import Tap_Gesture from "./tap_gasture";
import Longpress_gesture from "./longpress_gesture";
import Fling_Gesture from "./fling_gesture";
import Hover_Gesture from "./hover_gesture";
import Native_Gesture from "./native_gesture";
import Pinch_Gesture from "./pinch_gesture";
import Rotation_Gesture from "./rotation_gesture";
import Composed_Gesture from "./composed_gesture";
import Simultaneous_Gesture from "./Simultaneous_gesture";

const All_gestures = () => {
  const [index, setIndex] = useState(3);
  const Btn = ({ name, i }) => {
    return (
      <TouchableOpacity
        style={{ backgroundColor: "#fff", borderRadius: 5, padding: 2 }}
        onPress={() => {
          setIndex(i);
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "blue",
            fontFamily: "Roboto",
            fontWeight: 600,
            paddingVertical:5,
            textTransform:'capitalize'
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View
        style={{ flexDirection: "row", padding: 10,gap:10, backgroundColor: "#ccc",flexWrap:'wrap'}}
      >
        <Btn name="pan gesture" i={1} />
        <Btn name="tap gesture" i={2} />
        <Btn name="longpress gesture" i={3} />
        <Btn name="fling gesture" i={4} />
        <Btn name="hover gesture" i={5} />
        <Btn name="native gesture" i={6} />
        <Btn name="pinch gesture" i={7} />
        <Btn name ="rotation gesture" i={8}/> 
      </View>
      <>
        {index === 1 ? (
          <Pan_Gesture />
        ) : index === 2 ? (
          <Tap_Gesture />
        ) : index === 3 ? (
          <Longpress_gesture />
        ) : index === 4 ? (
          <Fling_Gesture />
        ) : index === 5 ? (
          <Hover_Gesture />
        ) : index === 6 ? (
          <Native_Gesture />
        ) : index === 7 ? (
          <Pinch_Gesture />
        ) :index === 8 ?  (
          <Rotation_Gesture />
        ):(<Text>select one</Text>)
        
        }
      </>
    </>
  );
};

export default All_gestures;

const styles = StyleSheet.create({});

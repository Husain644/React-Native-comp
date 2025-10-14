import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";


const Txt = () => {
  const [color, setColor] = React.useState("#000");
  const colorList = [
    "red",
    "green",
    "blue",
    "yellow",
    "white",
    "black",
    "pink",
    "orange",
    "gray",
    "purple",
  ];
  const fontFamily = [
    "serif",
    "Roboto",
    "monospace",
    "sans-serif-thin",
    "sans-serif-condensed",
    "notoserif",
    "sans-serif-light",
    "sans-serif-condensed",
    "sans-serif-medium",
    "robotoFont",
    "NotoSen",
   "PlaywriteCA-Regular"  //not working
  ]
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 35, textAlign: "center", color: "#000" ,fontFamily: "NotoSans-Bold" }}>
        Font Family - Android
      </Text>
      {fontFamily.map((item, index) => {
        return (
          <Text
            key={index}
            style={{
              fontSize: 25,
              textAlign: "center",
              color: color,
              fontFamily: item,
            }}
          >
            {item}
          </Text>
        );
      })}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: 20,
          marginTop: 20,
          paddingTop: 10,
          borderTopWidth: 2,
          borderTopColor: "#fff",
        }}
      >
        {colorList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              height: 35,
              width: 55,
              borderRadius: 10,
              backgroundColor: item,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setColor(item);
            }}
          >
            <Text
              style={{
                color: "#008000",
                fontSize: 10,
                paddingHorizonta: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                width: "60%",
                textAlign: "center",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
 
    </View>
  );
};

export default Txt;

const styles = StyleSheet.create({});

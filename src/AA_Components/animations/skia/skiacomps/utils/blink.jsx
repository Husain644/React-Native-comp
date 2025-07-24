import React,{useEffect} from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat, 
} from "react-native-reanimated";
import { Circle } from "@shopify/react-native-skia";

export const Blink = ({ size = 20, color = "green" }) => {
  const offset = useSharedValue(1);
  const duration = 1000; // Duration in milliseconds
  offset.value = withRepeat(withTiming(2, { duration: duration }), -1, true);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: offset.value }],
  }));
  return (
    <View style={[styles.container, { width: size * 2, height: size * 2 }]}>
      <Animated.View
        style={[ animatedStyles, { width: size, height: size,backgroundColor: color, borderRadius: size / 2 }]}
      />
    </View>
  );
};


export const BlinkSkia=(size=10)=>{
     const r = useSharedValue(12);
     console.log(r.value)
       useEffect(() => {
    r.value = withRepeat(withTiming(size * 0.33, { duration: 1000 }), -1);
  }, []);
    return(
   <Circle cx={200} cy={200} r={r.value} color="green" />
    )
}







const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

});

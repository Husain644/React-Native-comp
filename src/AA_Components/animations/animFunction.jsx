import { Animated } from "react-native";
import { useRef } from "react";

const RnAnimate=({val})=>{
const val=useRef(new Animated.Value(0.3)).current
const animate=()=>{
 Animated.timing(val,{
   toValue: 1,
   duration: 2000,
   delay:500,
   useNativeDriver: true,
 }).start(()=>{
   Animated.timing(val,{
     toValue: 0.3,
     duration: 2000,
     delay:500,
     useNativeDriver: true,
   }).start(()=>{animate()});
 })
}}
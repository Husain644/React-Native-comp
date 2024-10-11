import { Animated } from "react-native";
import { useRef } from "react";

const Anim=()=>{
    const fadeAnim = useRef(new Animated.Value(0)).current
    const Run=()=>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500
        }).start()
    }
}
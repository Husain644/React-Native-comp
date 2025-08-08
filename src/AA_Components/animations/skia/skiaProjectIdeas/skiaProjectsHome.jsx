import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useRef} from 'react'
import { useSharedValue } from 'react-native-reanimated'
import AnimatedCircleRadius from './Drawingshapes/drawAcircleWthAnimation/home'
import DrawLineOnTouch from './Drawingshapes/DrawLineswithTouchFinger Drawing/home'
import SquareRotating from './Drawingshapes/squareRotating/home'
import GradientRect from './Drawingshapes/Colorful gradient-frectangle/home'
import HeartShape from './PathBasedProject/create-heart-shape-using-bezier-curves/home'
import RealTimePath from './PathBasedProject/real-time-drawing-path-with-undo-redo/home'
const SkiaProjectsHome = () => {
      const scrollDisabled = useSharedValue(true); // shared value, not state
      const scrollDisabledBtn=(v)=>{
        console.log('scrollbtn call',v)
        scrollDisabled.value=v
      }
      console.log('parent render')
  return (
    <ScrollView scrollEnabled={scrollDisabled.value}  contentContainerStyle={{gap:10,backgroundColor:'#999'}}>
      <Text style={{fontSize:25,color:'#f60808',backgroundColor:'#fff'}}>SkiaProjectsHome</Text>
      <AnimatedCircleRadius/>
      <DrawLineOnTouch scrollDisabledBtn={scrollDisabledBtn} />
      <SquareRotating/>
      <HeartShape/>
      {/* <RealTimePath/> */}
    </ScrollView>
  )
}

export default SkiaProjectsHome;

const styles = StyleSheet.create({})
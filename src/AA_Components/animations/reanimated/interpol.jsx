import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue,useAnimatedStyle,interpolate,interpolateColor,withTiming } from 'react-native-reanimated'

const Interpol = () => {
    const animations = useSharedValue(1)
    const animationsStyle = useAnimatedStyle(()=>{
        const wth=interpolate(animations.value,[1,2],[120,140])
        const radius=interpolate(animations.value,[1,2],[0,120])
        const bgcolor=interpolateColor(animations.value,[1,2],['#BAB86C','#bb8fce'])
        return {
            width:wth,
            height:wth,
            backgroundColor:bgcolor,
            borderRadius:radius
        }
    })
  return (
    <View style={{paddingHorizontal:15,borderWidth:1,alignItems:'center'}}>
      <Text style={{textAlign:'center',color:'red'}}>Interpol</Text>
      <View style={{width:'100%',height:150,backgroundColor:'#ccc',justifyContent:'center',alignItems:'center'}}>
      <Animated.View style={[{},animationsStyle]}></Animated.View>
      </View>
      <TouchableOpacity  onPress={()=>{
        animations.value===1?animations.value=withTiming(2,{duration:1000}):animations.value=withTiming(1,{duration:1000})}}
      style={{margin:10,width:150}}><Text 
      style={{padding:5,backgroundColor:'#eaea',textAlign:'center'}}>start animations</Text></TouchableOpacity>
    </View>
  )
}

export default Interpol

const styles = StyleSheet.create({})
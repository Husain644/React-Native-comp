import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Animated,{useSharedValue,withTiming} from 'react-native-reanimated'



const LoopAnim = () => {
    const valXY=useSharedValue(0);

    const loop=()=>{
        Animated
    }
  return (
    <View>
      <Text>LoopAnim</Text>
      <Animated.View
      style={[styles.box]}
      >
      </Animated.View>
    </View>
  )
}

export default LoopAnim

const styles = StyleSheet.create({
    box:{
        width:100,
        height:100,
        backgroundColor:'#eaea'
    }
})
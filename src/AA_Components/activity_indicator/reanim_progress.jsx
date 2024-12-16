import { StyleSheet, Text, View,Button } from 'react-native'
import {React,useEffect} from 'react'
import Animated,{useSharedValue,withTiming,useAnimatedStyle,withRepeat} from 'react-native-reanimated'

const ReanimProgress = ({width=350,duration=1000}) => {
    
 const val=useSharedValue(0)
 const progressStyle=useAnimatedStyle(()=>{
   return {
     transform:[{translateX:val.value}]
   }
 })
 
useEffect(()=>{
    val.value=withRepeat(withTiming(width*3,{duration:duration}),-1,false)
},[])
  return (
    <View style={{width:'100%',alignItems:'center',gap:20}}>
      <Text>Reanimated Progress bar</Text>
      <View style={{height:10,width:width,backgroundColor:'red',borderWidth:1,flexDirection:'row',alignItems:'center',
       overflow:'hidden' 
      }}>
        <Animated.View style={[{position:'absolute',width:width,height:0,backgroundColor:'#fff',left:-width,
            borderTopWidth:8,borderStyle:'dotted'
        },progressStyle]}>
        </Animated.View> 
      </View>
      <View style={{height:10,width:width,backgroundColor:'#fff',borderWidth:1,flexDirection:'row',alignItems:'center',
       overflow:'hidden' 
      }}>
        <Animated.View style={[{position:'absolute',width:width,height:9,backgroundColor:'#000',left:-width*2,
        },progressStyle]}>
        </Animated.View> 
      </View>
      <View style={{height:10,width:width,backgroundColor:'red',borderWidth:1,flexDirection:'row',alignItems:'center',
       overflow:'hidden' 
      }}>
        <Animated.View style={[{position:'absolute',width:width,height:5,backgroundColor:'#fff',left:-width*2,
           
        },progressStyle]}>
        </Animated.View> 
      </View>
      <View style={{height:10,width:width,backgroundColor:'#fff',borderWidth:1,flexDirection:'row',alignItems:'center',
       overflow:'hidden' 
      }}>
        <Animated.View style={[{position:'absolute',width:width,height:10,backgroundColor:'#ccc',left:-width*2
        },progressStyle]}>
        </Animated.View> 
      </View>
    </View>
  )
}

export default ReanimProgress

const styles = StyleSheet.create({})
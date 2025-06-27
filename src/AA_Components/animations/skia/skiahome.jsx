import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { usePathValue,Canvas,Skia,Path,vec } from '@shopify/react-native-skia'
import Animated,{useSharedValue, withTiming} from 'react-native-reanimated'
import { Gesture,GestureDetector } from 'react-native-gesture-handler'


const Skiahome = () => {
 const [path,setPath]=useState(Skia.Path.Make())
 const newPath=usePathValue((p)=>{ 'worklet'},path)
  const panGesture=Gesture.Pan().onBegin((e)=>{
      path.moveTo(e.x,e.y)
  }).onUpdate((e)=>{
    path.lineTo(e.x,e.y) 
  })  
  return (
    <View>  
      <Text>Skiahome</Text>  
        <GestureDetector gesture={panGesture}>
      <Canvas style={{backgroundColor:'#ccc',height:550}}>
        <Path path={newPath}  color="green" style="stroke" strokeWidth={10} /> 
      </Canvas>
      </GestureDetector>
       <Animated.View  style={{width:20,height:20,backgroundColor:'red',
        left:20,
        borderRadius:20}}>
        </Animated.View>
        <TouchableOpacity  onPress={()=>{setPath(Skia.Path.Make())}} style={{width:200,backgroundColor:'#eaea'}}>
          <Text style={{fontSize:30,textAlign:'center'}}>refresh</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Skiahome;

const styles = StyleSheet.create({})
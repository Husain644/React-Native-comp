import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { useSharedValue,
    useAnimatedStyle,  
    withSpring,
    withRepeat,
    withTiming,
    withDecay,
    withDelay,
    withClamp,
    withSequence
    
} from 'react-native-reanimated'

const SmplAnim = () => {
    const val=useSharedValue(0)
    const animStyle=useAnimatedStyle(()=>{return {transform:[{translateX:val.value}]}})
  return (
    <View style={{padding:20}}>
      <Animated.Text style={[{padding:5,fontSize:15,margin:10,borderRadius:10, width:90,textAlign:'center', 
       backgroundColor:'#eaea',},animStyle]}>SmplAnim</Animated.Text>
       <View style={{flexDirection:'row',flexWrap:'wrap',backgroundColor:'#eaeaea',}}>
       <TouchableOpacity style={{margin:10}} onPress={()=>val.value=val.value+10}>
             <Text style={styles.textIn}>simple</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={{margin:10}} onPress={()=>val.value=withSpring(val.value+20)}>
             <Text style={styles.textIn}>spring</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={{margin:10}} onPress={()=>val.value=withTiming(val.value+50,{duration:2000})}>
             <Text style={styles.textIn}>widthTiming</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={{margin:10}} onPress={()=>val.value=withRepeat(withSpring(0),5,true)}>
             <Text style={styles.textIn}>with repeat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:10}} onPress={
          ()=>val.value=withSequence(withSpring(100),withSpring(150),withSpring(200),withDelay(1000,withTiming(0,{duration:100})))}>
             <Text style={styles.textIn}>withSequence</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={{margin:10}} onPress={()=>val.value=withSpring(0)}>
             <Text style={styles.textIn}>set to 0</Text>
        </TouchableOpacity> 

       </View>
      
     
    </View>
  )
}

export default SmplAnim





const styles = StyleSheet.create({
      textIn:{
        backgroundColor:'#ccc',
        padding:5,
        borderRadius:5}
})
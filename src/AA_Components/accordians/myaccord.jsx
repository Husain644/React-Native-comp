import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native'
import {React,useState,useRef} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Shadow } from '../css/shadow';
import Animated,{useSharedValue,withTiming,useAnimatedStyle} from 'react-native-reanimated';

const Myaccord = () => {
  const val=useSharedValue(0)
  const AnimHeight=useAnimatedStyle(()=>{return {maxHeight:val.value}})
  const handleToggle=()=>{
     val.value=withTiming(400,{duration:1000})
  }

   const data=[
        {name:'What is React Native Reanimated ?.',descriptions:'React Native Reanimated is a powerful animation library built by Software Mansion. With Reanimated, you can easily create smooth animations and interactions that run on the UI thread.'},
        {name:'accordian2',descriptions:'This is accordians2.Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian3',descriptions:'This is accordians3. Lorem ipsum dolor sit amet, consectetur adip'},
    ]

    const [itemIndex,setItemIndex]=useState(null)
  return (
    <View style={{padding:15,backgroundColor:'#ddeeda',borderRadius:20}}>
       {data.map((item,index)=>{
        return(
        <View  style={[{marginTop:10},Shadow.s1]}  key={index}> 
          <TouchableOpacity 
          onPress={()=>{setItemIndex(index);handleToggle()}} 
          style={{flexDirection:'row',width:'100%',justifyContent:'space-between',paddingHorizontal:10,
            alignItems:'center',borderRadius:8
          }}>
            <Text style={{fontSize:15,paddingVertical:5}}>{item.name}</Text>
            {itemIndex===index?
            <Icon name="angle-up" size={20} color="#000"/>:<Icon name="angle-down" size={20} color="#000"/> }
            </TouchableOpacity>
            <Animated.Text style={[{paddingHorizontal:10,fontSize:12},AnimHeight]}>{item.descriptions}</Animated.Text>       
         </View>)})} 
        
    </View>
  )
}
export default Myaccord;
const styles = StyleSheet.create({

})
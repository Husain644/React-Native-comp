import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native'
import {React,useState,useRef} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Shadow } from '../css/shadow';
import Animated,{useSharedValue,withTiming,useAnimatedStyle} from 'react-native-reanimated';

const Myaccord = () => {
  const val=useSharedValue(0)
  const AnimHeight=useAnimatedStyle(()=>{return {maxHeight:val.value}})
  const handleToggle=()=>{
     val.value=withTiming(200,{duration:1000})
  }

   const data=[
        {name:'accordian1',descriptions:'This is accordians1. Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian2',descriptions:'This is accordians2.Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian3',descriptions:'This is accordians3. Lorem ipsum dolor sit amet, consectetur adip'},
    ]

    const [itemIndex,setItemIndex]=useState(1)
  return (
    <View style={{padding:15,backgroundColor:'#ddeeda',borderRadius:20}}>
       {data.map((item,index)=>{
        return(
        <View  style={[{marginTop:10},Shadow.s1]}  key={index}> 
          <TouchableOpacity 
          onPress={()=>{setItemIndex(index);handleToggle()}} 
          style={{fontSize:20,flexDirection:'row',width:'100%',justifyContent:'space-between',padding:10,
            alignItems:'center',borderRadius:8
          }}>
            <Text>{item.name}</Text>
            {itemIndex===index?
            <Icon name="angle-up" size={25} color="#000"/>:<Icon name="angle-down" size={25} color="#000"/> }
            </TouchableOpacity>
            <Animated.Text style={[{paddingHorizontal:10},AnimHeight]}>{item.descriptions}</Animated.Text>       
         </View>)})} 
        
    </View>
  )
}
export default Myaccord;
const styles = StyleSheet.create({

})
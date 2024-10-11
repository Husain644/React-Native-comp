import { StyleSheet, Text, View,Animated,TouchableOpacity } from 'react-native'
import {React,useState,useRef} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Shadow } from '../css/shadow';

const Myaccord = () => {
   const data=[
        {name:'accordian1',descriptions:'This is accordians1. Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian2',descriptions:'This is accordians2.Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian3',descriptions:'This is accordians3. Lorem ipsum dolor sit amet, consectetur adip'},
    ]
    const [itemIndex,setItemIndex]=useState(-1)
    const setter=(index)=>{
        setItemIndex(index === itemIndex?-1:index);
        Run()
    }
    const fadeAnim = useRef(new Animated.Value(0)).current
    const Run=()=>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver:true
        }).start()
    }
    // problem isthat animation work for all components
  return (
    <View style={{padding:15,backgroundColor:'#ddeeda',borderRadius:20}}>
      <Text>Myaccord</Text>
       {data.map((item,index)=>{
        return(
        <View  style={[{marginTop:10},Shadow.s1]}  key={index}> 
          <TouchableOpacity 
          onPress={()=>setter(index)} 
          style={{fontSize:20,flexDirection:'row',width:'100%',justifyContent:'space-between',padding:10,
            alignItems:'center',borderRadius:8
          }}>
            <Text>{item.name}</Text>
            {itemIndex===index?
            <Icon name="angle-up" size={25} color="#000"/>:
            <Icon name="angle-down" size={25} color="#000"/>}
            </TouchableOpacity>
          {itemIndex===index && 
          <Animated.Text style={{fontSize:20,margin:10,opacity:fadeAnim}}>{item.descriptions}</Animated.Text>}
         </View>)})} 
    </View>
  )
}
export default Myaccord;
const styles = StyleSheet.create({

})
import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native'
import {React,useState,useRef} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Shadow } from '../css/shadow';
import * as Animatable from 'react-native-animatable';

const Myaccord = () => {
   const data=[
        {name:'accordian1',descriptions:'This is accordians1. Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian2',descriptions:'This is accordians2.Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian3',descriptions:'This is accordians3. Lorem ipsum dolor sit amet, consectetur adip'},
    ]
    const [itemIndex,setItemIndex]=useState(-1)
    const setter=(index)=>{
        setItemIndex(index === itemIndex?-1:index);
    }
    const fadeAnim = {
      from:{opacity:0,height:0   },
      to:{   opacity:1, height:100, }}
  return (
    <View style={{padding:15,backgroundColor:'#ddeeda',borderRadius:20}}>
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
          <Animatable.Text 
          animation={itemIndex===index?fadeAnim:null}
          style={{fontSize:20,margin:10}}>{item.descriptions}</Animatable.Text>}
         </View>)})} 
    </View>
  )
}
export default Myaccord;
const styles = StyleSheet.create({

})
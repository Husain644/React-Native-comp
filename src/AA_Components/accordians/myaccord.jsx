import { StyleSheet, Text, View,Animated,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Myaccord = () => {
   const data=[
        {name:'accordian1',descriptions:'This is accordians1. Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian2',descriptions:'This is accordians2.Lorem ipsum dolor sit amet, consectetur adip'},
        {name:'accordian3',descriptions:'This is accordians3. Lorem ipsum dolor sit amet, consectetur adip'},
    ]
    const [itemIndex,setItemIndex]=useState(-1)
    const setter=(index)=>{
        setItemIndex(index === itemIndex?-1:index)
  
    }
  return (
    <View>
      <Text>Myaccord</Text>
       {data.map((item,index)=>{
        return(
        <View  style={{marginTop:10,borderWidth:1}}  key={index}> 
          <TouchableOpacity 
          onPress={()=>setter(index)} 
          style={{fontSize:20,margin:10,display:'flex',flexDirection:'row',width:'90%',justifyContent:'space-between'}}>
            <Text>{item.name}</Text>
            {itemIndex===index?<Icon name="chevron-up" size={20} color="#000"/>:
            <Icon name="chevron-down" size={20} color="#000"/>}

            </TouchableOpacity>
          {itemIndex===index&&<Text style={{fontSize:20,margin:10}}>{item.descriptions}</Text>}
         </View>)})}
    </View>
  )
}

export default Myaccord

const styles = StyleSheet.create({})
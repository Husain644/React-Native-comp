import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { listGen } from '../../utility/list_generator';

const RatingBtn = ({rating=3}) => {
    const[value,setValue]=useState(rating) 
    const handler=(i)=>{
        i===value?setValue(i-1):
        setValue(i)
    }
  return (
    <>
        <View style={{width:200,borderWidth:1,padding:10,flexDirection:'row',gap:5,backgroundColor:'#fff'}}>
        <Icon name="star" color="#000"  size={25}/>  
        <Icon name="star" color="#000"  size={25}/> 
        <Icon name="star" color="#000"  size={25}/>
        <Icon name="star" color="#000"  size={25}/>
        <Icon name="star" color="#ccc"  size={25}/>
    </View>
    <View style={{width:200,borderWidth:1,padding:10,flexDirection:'row',gap:5,backgroundColor:'#fff'}}>
       {
         listGen(0,5).map((itm) =>
         <TouchableOpacity onPress={()=>{handler(itm)}} key={itm}><Icon name="star" 
         color={value>=itm?"yellow":"#ccc"}  size={25}/></TouchableOpacity>)
       }
          <Text style={{marginLeft:15,fontSize:25}}>{value}</Text>  
    </View>
    </>
  )
}

export default RatingBtn

const styles = StyleSheet.create({})
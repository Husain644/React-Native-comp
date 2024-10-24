import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'

const RadioBtn = () => {
    const [clicked,setCliocked]=useState(false)
    const handleClick=()=>{
        setCliocked(!clicked)
    }
  return (
   <>
    <View style={{width:200,borderWidth:1,padding:10,flexDirection:'row',gap:10,backgroundColor:'#fff'}}>
      
    <TouchableOpacity onPress={handleClick}>
          <View style={{width:30,height:30,backgroundColor:'#ccc',borderRadius:15,alignItems:'center',justifyContent:'center',borderWidth:1}}>
              <View style={{width:15,height:15,backgroundColor:'#fff',borderRadius:10,display:clicked?'none':'flex'}}></View>
          </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleClick}>
          <View style={{width:30,height:30,backgroundColor:'#fff',borderRadius:15,alignItems:'center',justifyContent:'center',borderWidth:1}}>
              <View style={{width:15,height:15,backgroundColor:'#ccc',borderRadius:10,display:clicked?'none':'flex',borderWidth:1}}></View>
          </View>
    </TouchableOpacity>

    </View>
   </>
  )
}

export default RadioBtn

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from './menu';

const CompA = ({navigation}) => {
//   We send data CompA to=>> CompB 
// const data={
//   id:10,
//   message:'this is messages'
// }
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',position:'relative'}}>
         <Menu showNav={false}/>
    <Text style={{width:'100%',backgroundColor:'#fff',color:'red',textAlign:'center',fontSize:20}}>
         This is CompA
    </Text>
    <TouchableOpacity  style={{width:'80%',backgroundColor:'skyblue', marginTop:25}}  onPress={()=>{navigation.navigate("CompB")}}>
      <Text style={{width:'100%',textAlign:'center',fontSize:18,padding:5}}>go to CompB</Text>
    </TouchableOpacity>
    {/* push navigation */}
    <TouchableOpacity  style={{width:'80%',backgroundColor:'skyblue', marginTop:25}}  
    onPress={()=>{navigation.push("CompB",data)}}>
      <Text style={{width:'100%',textAlign:'center',fontSize:18,padding:5}}>go to CompB</Text>
    </TouchableOpacity>
  </View>


  )
}

export default CompA

const styles = StyleSheet.create({})
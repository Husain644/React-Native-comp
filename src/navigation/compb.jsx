import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CompB = ({navigation,route}) => {
    // we got data from CompA components
    const {id,message}=route.params
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{width:'100%',backgroundColor:'#fff',color:'red',textAlign:'center',fontSize:20}}>
           This is CompB
      </Text>

      <TouchableOpacity  style={{width:'80%',backgroundColor:'skyblue', marginTop:25}} onPress={()=>{navigation.navigate("CompA")}}>
        <Text style={{width:'100%',textAlign:'center',fontSize:18,padding:5}}>go to Comp A</Text>
      </TouchableOpacity>


      <Text style={{fontSize:20,marginTop:20}}>
        {id},{message}
      </Text>
    </View>
  )
}

export default CompB

const styles = StyleSheet.create({})
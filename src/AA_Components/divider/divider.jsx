import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headings from './heading'

const Divider = () => {
  return (
    <View style={{width:'100%',padding:20}}>
         <Headings/>
     <View style={{width:'100%',height:5,backgroundColor:'red',marginTop:10,transform:[{rotateZ:'3deg'}]}}></View>
      <View style={{width:'100%',height:4,backgroundColor:'red',marginTop:10}}></View>
      <View style={{width:'100%',height:2,backgroundColor:'red',marginTop:10}}></View>
      <View style={{width:'100%',height:1,backgroundColor:'red',marginTop:5}}></View>     
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import {React,useState} from 'react'

const ControlBar = () => {
  return (
    <View style={{padding:20}}>
      <Text>ControlBar</Text>
      <View horizontal={true}  showsHorizontalScrollIndicator={false} 
              style={{width:250,height:25,backgroundColor:'red',borderRadius:5}}>
             <View style={{height:20,width:250,backgroundColor:'pink',marginRight:240,borderRadius:5,zIndex:8,
                paddingHorizontal:5}}>
                <View style={{width:20,minHeight:35,backgroundColor:'blue',position:'absolute',right:0,top:0,zIndex:9}}></View>
             </View>
      </View>
    </View>
  )
}

export default ControlBar

const styles = StyleSheet.create({})
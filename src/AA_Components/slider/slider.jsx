import { StyleSheet, Text, View,ScrollView, Animated } from 'react-native'
import {React,useRef,} from 'react'
import { H3 } from '../divider/heading'

const slider = () => {


  return (
    <View style={{paddingTop:200}}>
      <Animated.ScrollView horizontal={true} style={{height:150,backgroundColor:'pink',padding:10}}
      onScroll={(e)=>{console.log(e)}}
      >
        
     <H3 style={{width:400}} txt="hello slide1"/>
     <H3 style={{width:400}} txt="hello slide2"/>
     <H3 style={{width:400}} txt="hello slide3"/>
      

      </Animated.ScrollView>
      <Text>slider</Text>
    </View>
  )
}

export default slider

const styles = StyleSheet.create({})
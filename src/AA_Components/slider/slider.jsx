import { StyleSheet, Text, View,ScrollView, Animated } from 'react-native'
import {React,useRef,} from 'react'
import { H3 } from '../divider/heading'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Sldr from './sldr';

const slider = () => {


  return (
    <View style={{paddingTop:30,gap:50}}>
       <Sldr />

    <ProgressBar progress={0.8} 
       animatedValue={.5}
    color={MD3Colors.error50} />


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
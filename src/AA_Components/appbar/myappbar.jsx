import { StyleSheet, Text, TouchableHighlight, View,Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { H6 } from '../divider/heading';
import CustomInput from './utility';
import { SmallModal } from './utility';

const MyappBar = () => {
  return (
    <View style={{minHeight:Dimensions.get('window').height,paddingVertical:5}}>
     <H6 txt='simple app bar'/>
      <View 
      style={{width:'100%',height:60,backgroundColor:'skyblue',alignItems:'center',justifyContent:'space-between',
        flexDirection:'row',paddingHorizontal:10
       }}> 
      <TouchableHighlight onPress={()=>{}}>
        <Icon name="bars" size={30} color="#000" style={{}} />
      </TouchableHighlight>
      <Text style={{fontSize:20, fontWeight:'bold',color:'red'}}>My App</Text>
      <Icon name="search" size={30} color="#000" style={{}} />
      <Icon name="envelope-o" size={30} color="#000" style={{}} />
      </View>

      <H6 txt='app bar with search option'/>
      <View 
      style={{width:'100%',height:60,backgroundColor:'skyblue',alignItems:'center',justifyContent:'space-between',
        flexDirection:'row',paddingHorizontal:10
       }}> 
      <TouchableHighlight onPress={()=>{}}>
        <Icon name="bars" size={30} color="#000" style={{}} />
      </TouchableHighlight>
      <Text style={{fontSize:20, fontWeight:'bold',color:'red'}}>My App</Text>
        <CustomInput placeholder='search...'/>
        <View style={{height:'100%',width:40,alignItems:'flex-end',justifyContent:'space-between',padding:5}}>
        <SmallModal />
        <Icon name="envelope-o" size={20} color="#000" style={{}} />
        </View>

      </View>
    </View>
  )
}

export default MyappBar

const styles = StyleSheet.create({
    
})
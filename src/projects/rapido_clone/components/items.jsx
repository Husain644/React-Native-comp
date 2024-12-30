import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


const pages=[
  {}
]


const DrawerLink = () => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView 
    contentContainerStyle={{paddingTop:0,alignItems:'center',backgroundColor:'#fff',height:'100%',gap:20}}>
       <Text style={{fontSize:20,fontWeight:'bold',width:'100%',textAlign:'center',backgroundColor:'pink',paddingVertical:10}}>Help Page itm</Text>
       <Button onPress={() => navigation.navigate('main')} title="main" />
       <Button onPress={() => navigation.navigate('maphome')} title="map Home" />
       <Button onPress={() => navigation.navigate('pickdrop')} title="pic drop " />
  </DrawerContentScrollView>
  )
}
export default DrawerLink;
const styles = StyleSheet.create({})
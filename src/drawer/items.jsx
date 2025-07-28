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
    contentContainerStyle={{paddingTop:0,alignItems:'center',backgroundColor:'#fff',height:'100%'}}>
       <Text style={{fontSize:20,fontWeight:'bold',width:'100%',textAlign:'center',backgroundColor:'pink',paddingVertical:10}}>Help Page itm</Text>
       <Button onPress={() => navigation.navigate('Notifications')} title="Go to Notification" />
       <Button onPress={() => navigation.navigate('Home')} title="Go to Homme" />
  </DrawerContentScrollView>
  )
}
export default DrawerLink;
const styles = StyleSheet.create({})
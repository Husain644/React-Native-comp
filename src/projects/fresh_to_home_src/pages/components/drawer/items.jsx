import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


const pages=[
  {name:'account',url:'account'},
  {name:'cart',url:'cart'},{name:'home',url:'home'},{name:'categories',url:'categories'},
  {name:'favorite',url:'favorite'},{name:'map',url:'map'}
]


const DrawerLink = () => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView  
    contentContainerStyle={{paddingTop:0,backgroundColor:'#fff',height:'100%',gap:20}}>
       <Text style={{fontSize:20,fontWeight:'bold',width:'100%',textAlign:'center',backgroundColor:'pink',paddingVertical:10}}>Help Page itm</Text>
       {
        pages.map((item,index)=>{
          return(
            <TouchableOpacity key={index} style={{paddingLeft:20}} onPress={() => navigation.navigate(item.url)} >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )
        })
       }

  </DrawerContentScrollView>
  )
}
export default DrawerLink;
const styles = StyleSheet.create({})
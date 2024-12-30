import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDrawerStatus } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Header = ({title='',bg='#ccc'}) => {
    const navigation=useNavigation()
    const isDrawerOpen=useDrawerStatus()
  return (
    <View style={{height: 50, backgroundColor:bg, flexDirection: 'row',alignItems:'center',
        justifyContent:'space-between'
         ,paddingHorizontal: 15 }}> 
           <Text style={{ fontSize: 20 }}>{title}</Text>
         <TouchableOpacity onPress={()=>{navigation.openDrawer()}}
             style={{}}>
             {
               isDrawerOpen==="open" ? <Icon name="close" size={35} color="#000" /> : <Icon name="menu" size={35} color="#000" />
             }
           </TouchableOpacity>
       </View>
  )
}

export default Header

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BottomNav = ({screen}) => {
    const navigation=useNavigation()
    const navData=[
    {screen:'allList',name:'chats',icons:'wechat'},
    {screen:'status',name:'status',icons:'bullseye'},
    {screen:'calls',name:'calls',icons:'phone'}
                ]
  return (
    <View style={styles.container}>
     {
        navData.map((item,index)=>{
            return(
            <TouchableOpacity onPress={()=>{navigation.navigate(item.screen)}} key={index} 
            style={[styles.navItems,item.screen===screen?{borderBottomWidth:2}:{borderBottomWidth:0}]}>
            <Icon name={item.icons} size={25} color="#000"/>
            <Text style={styles.navText}>{item.name}</Text>  
             </TouchableOpacity> 
            )
        })
     } 
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:50,
        bottom:0,
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderColor:'#999',
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    navItems:{
        alignItems:'center',
         borderColor:'green',
        paddingHorizontal:10
    },
    navText:{fontSize:22,color:'#999',
        textTransform:'capitalize',
        marginTop:-5
    }
})
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Data } from '../assets/data'
const Main = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer} >
     {
        Data.map((item,index)=>{return(
        <TouchableOpacity style={styles.container} key={index}>
            <Image style={styles.img} source={item.img} resizeMode='stretch'/>
            <Text style={styles.txt} >{item.name}</Text>
        </TouchableOpacity>
        )})
     }
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'

    },
    container:{
        width:'48%',
        height:210,
        borderWidth:2,
        borderRadius:5,
        marginTop:10
    },
    img:{
        width:'100%',
        height:180
    },
    txt:{
        fontSize:20,
        fontWeight:'600'
    }
})
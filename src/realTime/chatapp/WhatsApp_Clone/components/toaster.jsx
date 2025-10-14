import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Toaster = ({text,error}) => {
    const[show,setShow]=useState(true)
   useEffect(()=>{
    setTimeout(()=>{setShow(false)},3000)
   },[])
  return (
    <View style={[styles.container,{display:show?'flex':'none'}]}>
        <View style={[styles.innerContainer,{ backgroundColor:error?'#f44336':'#75d16f' }]}>
            <Text style={{textAlign:'center',fontSize:20,color:'#999',textTransform:'capitalize',padding:5}}>{text}</Text>
        </View>
    </View>
  )
}

export default Toaster

const styles = StyleSheet.create({
    container:{
        width:'100%',
        position:'absolute',
        bottom:80,
        alignItems:'center',
        justifyContent:'center'
    },
    innerContainer:{
        width:'80%',
        borderRadius:10
    }
})
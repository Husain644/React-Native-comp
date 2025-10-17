import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { H5 } from '../divider/heading'
import Story from './story/story'
import Card2 from './card2'



const Card = () => {
  return (
    <View style={{padding:10}}>
    <H5 txt="card exapmle"/>
    <View style={{backgroundColor: '#e8f7f7', padding: 10, marginVertical: 10, borderRadius:5,flexWrap:'wrap',
      width:'95%',alignSelf:'center',borderWidth:1,display:'flex',flexDirection:'row',justifyContent:'space-between'
    }}>
    <Image style={{height:100,width:100,maxWidth:'30%'}} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
      
      <View style={{backgroundColor:'#fff',width:'65%',borderRadius:5,padding:5,
        shadowColor:"#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.41, shadowRadius: 9.11, elevation: 14,
      }} >
      <Text style={{alignSelf:'center',fontSize:20,color:'#000'}}>Heading</Text>
      <Text>This is a simple card.</Text>
      </View>
      <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10}}>
       <TouchableOpacity onPress={()=>{}}>
        <Text style={{fontSize:20,color:'#000',padding:5,backgroundColor:'skyblue',textAlign:'center',fontWeight:'bold',
          borderRadius:5,alignSelf:'center',marginTop:5,minWidth:100}}>Button</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{}}>
        <Text style={{fontSize:20,color:'#000',padding:5,backgroundColor:'skyblue',textAlign:'center',fontWeight:'bold',
          borderRadius:5,alignSelf:'center',marginTop:5,minWidth:100}}>Button</Text>
       </TouchableOpacity>
      </View>
    </View>

    <View style={{backgroundColor: '#e8f7f7', padding: 10, marginVertical: 10, borderRadius:5,alignItems:'center',
      width:'95%',alignSelf: 'center'
    }}>
    <Image style={{height:300,width:'100%'}} source={{uri:'https://reactnative.dev/img/tiny_logo.png',}}/>
      
      <View style={{backgroundColor:'#fff',width:'100%',borderRadius:5,padding:5,
        shadowColor:"#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.41, shadowRadius: 9.11, elevation: 14,
      }} >
      <Text style={{alignSelf:'center',fontSize:20,color:'#000'}}>Heading</Text>
      <Text>This is a simple card.</Text>
     
      <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10}}>
       <TouchableOpacity onPress={()=>{}}>
        <Text style={{fontSize:20,color:'#000',padding:5,backgroundColor:'skyblue',textAlign:'center',fontWeight:'bold',
          borderRadius:5,alignSelf:'center',marginTop:5,minWidth:100}}>Button</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{}}>
        <Text style={{fontSize:20,color:'#000',padding:5,backgroundColor:'skyblue',textAlign:'center',fontWeight:'bold',
          borderRadius:5,alignSelf:'center',marginTop:5,minWidth:100}}>Button</Text>
       </TouchableOpacity>
      </View>
      </View>
    </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})
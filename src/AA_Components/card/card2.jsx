import { StyleSheet, Text, View,ImageBackground ,TouchableOpacity} from 'react-native'
import React from 'react'
import {Img,css,FontIcon} from '../../assets/assets'



const Card2 = () => {
  return (
    <View style={{width:'50%',padding:2,borderWidth:2,borderRadius:10}}> 
      <ImageBackground source={Img.chick2}  resizeMode="cover" style={{width:'100%',height:200}}>
      <TouchableOpacity style={{padding:5,backgroundColor:'rgba(0,0,0,0.5)',top:5,right:5,position:'absolute',borderRadius:5,width:40,alignItems:'center'}}>
        <FontIcon name='heart' color="#fff" />
      </TouchableOpacity>
      </ImageBackground>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,paddingHorizontal:10}}>
        <View>
        <Text style={{fontSize:12,width:100,height:12}}>Text1hhduhfuhfudh dfuhdihu </Text>
        <Text style={{fontSize:12,width:100,height:12}}>Text1 </Text>
        </View>
        <TouchableOpacity style={{padding:5,backgroundColor:'#5f9ea0',borderRadius:5}}><Text style={{color:'#fff',fontWeight:'bold'}}>click</Text></TouchableOpacity>
      </View>
    </View>
  )
}   

export default Card2

const styles = StyleSheet.create({})
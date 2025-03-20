import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const ShowImage = ({route}) => {
  const navigation=useNavigation()
  const img=route.params.img
  return (
    <View style={{flex:1}}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Gallery")}}  style={{position:'absolute',top:0}}>
        <Text style={{}}> Gallery  </Text>
        </TouchableOpacity>
     <Image  source={{uri:'file://'+img}}  style={{width:'100%',height:'95%'}} />
    </View>
  )
}
export const ShowImage2 = ({route}) => {
  const navigation=useNavigation()
  const img=route.params.img
  console.log(img)
  return (
    <View style={{flex:1,padding:10}}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Gallery")}}  style={{position:'absolute',top:0}}>
        <Text style={{fontSize:15}}>{img}</Text>
        </TouchableOpacity>
     <Image  source={{uri:img}}  style={{width:'100%',height:'95%',marginTop:10}} />
    </View>
  )
}



export default ShowImage;

const styles = StyleSheet.create({})
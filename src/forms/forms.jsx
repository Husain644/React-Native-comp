import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Form = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{flex:1,gap:10,alignItems:'center',justifyContent:'center',backgroundColor:'pink'}}>  
    <Text style={{backgroundColor:'#fff',textAlign:'center',color:'red',fontSize:25,width:'80%'}}>
      This Is forms
    </Text>
     <TouchableOpacity 
     style={{width:100,padding:5,borderRadius:5,color:'white',backgroundColor:'blue'}}  
     onPress={()=>navigation.navigate("Map")}>
      <Text style={{color:'#fff'}}>
        Go to Map
      </Text>
     </TouchableOpacity>
      <Text>
        {itemId},{otherParam}
      </Text>
      <TouchableOpacity 
      style={{borderRadius:5,backgroundColor:'blue'}}  
      onPress={()=>navigation.goBack()}>
       <Text style={{color:'#fff',width:150,padding:5,textAlign:'center',fontSize:18}}>Go Back</Text>
      </TouchableOpacity>
  </View>
  )
}

export default Form

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Form = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{backgroundColor:'#ccc',color:'red',fontSize:25}}>Forms</Text>
     <Button 
     style={{width:100,padding:5,borderRadius:5,color:'white',backgroundColor:'blue'}}  
     onPress={navigation.navigate("Map")}>
      <Text>
        Go to Map
      </Text>
     </Button>
  </View>
  )
}

export default Form

const styles = StyleSheet.create({})
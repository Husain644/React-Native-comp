import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const Map = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{backgroundColor:'#ccc',color:'red',fontSize:25}}>Map</Text>
       <Button 
       style={{width:100,padding:5,borderRadius:5,color:'white',backgroundColor:'blue'}}  
       onPress={navigation.navigate("Forms")}>
        <Text>
          Go to Forms
        </Text>
       </Button>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})
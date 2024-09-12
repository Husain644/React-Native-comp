import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MapComp from './Map';



const Stack = createNativeStackNavigator()

export default function HomeMap() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nav">
         <Stack.Screen name="Nav" component={Nav}  options={{headerShown:false}}/>
        <Stack.Screen name="Map" component={MapComp}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Nav=({navigation})=>{
  return(
    <>
      <View style={{flex:1,gap:10,alignItems:'center',justifyContent:'center',backgroundColor:'lightgreen'}}>  
    <Text style={{backgroundColor:'#fff',textAlign:'center',color:'red',fontSize:25,width:'80%'}}>
      This Is Map
    </Text>
     <TouchableOpacity 
     style={{width:100,padding:5,borderRadius:5,color:'white',backgroundColor:'blue'}}  
     onPress={()=>navigation.navigate("Map")}>
      <Text style={{color:'#fff'}}>
        Go to Map
      </Text>
     </TouchableOpacity>
  </View>
    </>
  )
}
import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MapHome from './MapHome';
import Header from './comp/header';
import AutoComplete from './comp/autoComplete/autoComplete';
import Routes from './comp/routes/routes';
import MapSplash from './comp/mapsplash';


const Stack = createNativeStackNavigator()

export default function GoogleMap() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name='Splash' component={MapSplash} options={{headerShown:false}}/>
         <Stack.Screen name="Nav" component={Nav}  options={{headerShown:false}}/>
         <Stack.Screen name="Map" component={MapHome}  options={{headerShown:false}}/>
         <Stack.Screen name="AutoComplete" component={AutoComplete} options={{headerShown:false,title:'pick and drop'}}/>
         <Stack.Screen name="Routes" component={Routes} options={{headerShown:true,title:'Routes'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Nav=({navigation})=>{
  return(
    <> 
    <View style={{flex:1,gap:10,alignItems:'center',justifyContent:'center',backgroundColor:'lightgreen'}}>  
    <Header />
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
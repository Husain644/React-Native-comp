import React from 'react'
import { View,Text,TouchableHighlight } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CameraHome from './camera';
import ShowImage from './showImage';
import Gallery from './gallery/gallery';



const Stack = createNativeStackNavigator()

export default function HomeCamera() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nav">
        <Stack.Screen name="Nav" component={Nav}  options={{headerShown:false}}/>
        <Stack.Screen name="Camera" component={CameraHome}  options={{headerShown:false}}/>
        <Stack.Screen name="Photo" component={ShowImage}  options={{headerShown:true}}/>
        <Stack.Screen name="Gallery" component={Gallery}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Nav=({navigation})=>{
  return(
    <>
        <View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize:35,color:'#fff',fontWeight:'bold',marginBottom:50}} onPress={()=>{navigation.navigate("Camera")}}>
              Go To Camera</Text>     
             <Text style={{fontSize:35,color:'#fff',fontWeight:'bold',marginBottom:50}} onPress={()=>{navigation.navigate("Gallery")}}>
             Go To  Gallery
             </Text>
           
        </View>
    </>
  )
}
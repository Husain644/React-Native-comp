import { StyleSheet, Text, View ,Easing} from 'react-native'
import React,{useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import GoogleAuth from './googleAuth';
import EmailAuth from './emailAuth';
import PhoneAuth from './phoneAuth';



const AuthHome = () => {
  
    const config = { animation:'timing', config: {
        duration: 300,
        easing: Easing.linear,},}
    const closeConfig={ animation:'timing', config: {
        duration: 300,
        easing: Easing.linear,}, }
 const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          gestureEnabled:true,
          
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          //CardStyleInterpolators.forVerticalIOS use other types of interpolators that are needs to be implemented
     }}>
         <Stack.Screen name="email" component={EmailAuth}   options={{ headerShown: false }}/>
         <Stack.Screen name="google" component={GoogleAuth}/>
          <Stack.Screen name="phone" component={PhoneAuth}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default AuthHome

const styles = StyleSheet.create({})
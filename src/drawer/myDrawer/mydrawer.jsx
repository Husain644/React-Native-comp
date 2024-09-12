import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CompA from './compa';
import CompB from './compb';




const Stack = createNativeStackNavigator()

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CompA">
        <Stack.Screen name="CompA" component={CompA}   options={{headerShown:false }}/>
        <Stack.Screen name="CompB" component={CompB}   options={{headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
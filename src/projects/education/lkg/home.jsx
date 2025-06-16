import { StyleSheet, Text, View,Easing } from 'react-native'
import React from 'react';
import Main from './screens/main';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeLkg = () => {
      const config = {
        animation:'timing',
        config: {
          duration: 300,
          easing: Easing.linear,
        },
      }
      const closeConfig={
        animation:'timing',
        config: {
          duration: 300,
          easing: Easing.linear,
        },
      }
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{gestureEnabled:true, transitionSpec: {open: config,close: closeConfig,},cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}>
              <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default HomeLkg;
const styles = StyleSheet.create({});
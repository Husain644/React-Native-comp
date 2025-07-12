import { StyleSheet, Text, View,Easing } from 'react-native'
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';
import Main from './screens/main';
import English from './screens/alphabet/english';
import Hindi from './screens/alphabet/hindi';
import TestHindi from './screens/test/hindi';
import HindiSketch from './screens/alphabet/sketch/hindi';

const Stack = createStackNavigator();

const HomeLkg = () => {
     useEffect(() => {
    Orientation.lockToLandscape();
    return () => Orientation.lockToPortrait(); // back to normal
  }, []);
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
        <Stack.Navigator initialRouteName="Main" screenOptions={{gestureEnabled:true,headerShown:false,
          transitionSpec: {open: config,close: closeConfig,},cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}>
              <Stack.Screen name="Main" component={Main}  screenOptions={{}}/>
              <Stack.Screen name="Hindi" component={Hindi} />
              <Stack.Screen name="English" component={Hindi} />
              <Stack.Screen name="Numbers" component={Hindi} />
              <Stack.Screen name="Animals" component={Hindi} />
              <Stack.Screen name="Veg" component={Hindi} />
              <Stack.Screen name="Bodyparts" component={Hindi} />
               <Stack.Screen name="hindisketch" component={HindiSketch} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default HomeLkg;
const styles = StyleSheet.create({});
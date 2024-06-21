import { StyleSheet} from 'react-native'
import React from 'react'
import Map from './google_Map/Map'
import Form from './forms/forms'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={<Map/>}  options={{headerShown:false}}/>
        <Stack.Screen name="Forms" component={<Form/>}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
     
    </>
  )
}

export default Home

const styles = StyleSheet.create({})
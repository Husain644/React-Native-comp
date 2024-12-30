import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MapHome from './screens/map/mapHome';
import MapSplash from './components/splash';
import Main from './screens/main';
import DrawerLink from './components/items';
import PickDrop from './screens/pickDrop';

const Rapido = () => {
  const Drawer = createDrawerNavigator()
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="splash" drawerContent={() => <DrawerLink/>} >
        <Drawer.Screen name='main' component={Main} options={{headerShown:false}}/>
        <Drawer.Screen name='maphome' component={MapHome} options={{headerShown:false}}/>
        <Drawer.Screen name='splash' component={MapSplash} options={{headerShown:false}}/>
        <Drawer.Screen name='pickdrop' component={PickDrop} options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>   
    </>
  )
}

export default Rapido

const styles = StyleSheet.create({})
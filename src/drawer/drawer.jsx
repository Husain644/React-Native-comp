import {View,Button} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerLink from './items';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',gap:10 }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button  onPress={() =>{navigation.openDrawer();} } title="open Drawer" />
      <Button  onPress={() =>{navigation.closeDrawer();} } title="close Drawer" />
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerLink {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
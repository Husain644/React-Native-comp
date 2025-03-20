import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../components/splash/splash';
import DrawerLink from '../components/drawer/items';
import Account from '../account/account';
import Cart from '../cart/cart';
import Categories from '../categories/categories';
import Favorite from '../favorite/favorite';
import Home from '../home/home';
import Map from '../map/map';
import Details from '../home/comp/details';
import MyCart from '../cart/mycart';


const Routnig = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="cart" drawerContent={() => <DrawerLink />} >
        <Drawer.Screen name='splash' component={Splash} options={{ headerShown: false }} />
        <Drawer.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name='account' component={Account} options={{ headerShown: false }} />
        <Drawer.Screen name='cart' component={MyCart} options={{ headerShown: false }} />
        <Drawer.Screen name='categories' component={Categories} options={{ headerShown: false }} />
        <Drawer.Screen name='favorite' component={Favorite} options={{ headerShown: false }} />
        <Drawer.Screen name='map' component={Map} options={{ headerShown: false }} />
        <Drawer.Screen name='details' component={Details} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Routnig;

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

const DrawerLink = (props) => {
  return (
    <DrawerContentScrollView {...props}>
    {/* <DrawerItemList {...props} /> */}
    <DrawerItem label="Help" onPress={() => alert('Link to help')} />
  </DrawerContentScrollView>
  )
}

export default DrawerLink;

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Comp from './comps/comp';
import Gdandt from './gdandt';
import { HeaderOptions,stackOptions,stackOptionsWithBack } from '../../components/utils/util';

const GdandtNav = ({ navigation }) => {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
      <Stack.Screen name="mainGdandt" component={Gdandt} options={() => stackOptions(navigation,{title:'🏠 G-Code M-code'})}  />
      <Stack.Screen name="gdandtcomp" component={Comp} options={() =>stackOptionsWithBack({title:'🏠 Circularity'})}  />
    </Stack.Navigator>
  )
}

export default GdandtNav

const styles = StyleSheet.create({})
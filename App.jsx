import { StyleSheet, Text,View, SafeAreaView } from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/home'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableLayoutAnimations } from 'react-native-reanimated';

const App = () => {
  //enableLayoutAnimations(true);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   
           <Home/>   
    
     </GestureHandlerRootView>
 
    
  )
}

export default App

const styles = StyleSheet.create({})
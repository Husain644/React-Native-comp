import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/home'
import React from 'react'


const App = () => {

  return (
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})
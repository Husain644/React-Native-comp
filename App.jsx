import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/home'
import React,{useEffect} from 'react'
import {initFirebase} from './src/forms/Authentication/firebase/firebase_initialize.jsx'
const App = () => {
   useEffect(()=>{
    const app = initFirebase();
   },[])
  return (
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
  )
}

export default App;

const styles = StyleSheet.create({})

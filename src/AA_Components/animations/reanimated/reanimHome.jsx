import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmplAnim from './smplAnim'
import Interpol from './interpol'
import GesturComp from './gestur'
import Game from './game/game'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableLayoutAnimations } from 'react-native-reanimated';



const ReanimHome = () => {
  enableLayoutAnimations(true);
  return (
  <GestureHandlerRootView  style={{ flex: 1 }}>
        {/* <SmplAnim/> */}
        {/* <Interpol/> */}
        {/* <GesturComp/> */}
        <Game/>
    </GestureHandlerRootView>
    
  
  )
}

export default ReanimHome

const styles = StyleSheet.create({})
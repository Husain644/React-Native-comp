import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmplAnim from './smplAnim'
import Interpol from './interpol'
import GesturComp from './gestur'
import Game from './game/game'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableLayoutAnimations } from 'react-native-reanimated';
import All_gestures from './all_gestures/all_gestures'
import Testing from './testing'
import CustomHome from './custom_animations/custom_home'



const ReanimHome = () => {
  enableLayoutAnimations(true);
  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
    <All_gestures/>
    {/* <SmplAnim/> */}
    {/* <CustomHome/> */}
    {/* <Interpol/> */}
    {/* <GesturComp/> */}
    {/* <Game/> */}
    {/* <Testing/> */}
</GestureHandlerRootView>
      
  )
}

export default ReanimHome

const styles = StyleSheet.create({})
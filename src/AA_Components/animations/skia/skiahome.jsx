import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FreeHand from './skiacomps/freeHand'
import FixPath from './skiacomps/fixPath'
import WordCoordGen from './skiacomps/wordCoordGen'
import Blink from './skiacomps/utils/blink'
import TempPath from './skiacomps/utils/tempPath'


const Skiahome = () => {
  return (
    <>
      {/* <FreeHand/> */}
      <FixPath/>
      {/* <TempPath/> */}
      {/* <WordCoordGen/> */}
    </>
  )
}

export default Skiahome

const styles = StyleSheet.create({})
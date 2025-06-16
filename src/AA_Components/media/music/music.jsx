import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Track from './trackPlayer'
import Sound_player from './sound_player'
// import SpeechToText from './speechToText/speech'

const Music = () => {
  return (
    <>
    <Sound_player/>
    <Track/>
    {/* <SpeechToText/> */}
    </>
  )
}

export default Music

const styles = StyleSheet.create({})
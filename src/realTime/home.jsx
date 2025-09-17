import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Chat from './chatapp/chat'
import axios from 'axios'


const RealTimeHome = () => {
  
  return (
    <>
      <Chat url={'user'}/>
      <Chat url={'admin'}/>
    </>
  )
}

export default RealTimeHome

const styles = StyleSheet.create({})
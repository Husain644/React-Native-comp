import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import css from '../AA_Components/css/css'

const Chat = () => {
  return (
    <View style={[css.bg.white2,css.flex1,css.center]}>
        <View style={[css.bg.aliceBlue,css.w100,css.border]}>
              <Text>Chat</Text>
        </View>

    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
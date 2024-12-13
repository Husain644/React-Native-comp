import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Web1 from './web/web1'
import WebGame from './web/webgame'
import FormWeb from './web/formsweb'

const HomeWeb = () => {
  return (
    <View style={{flex:1}}>
      {/* <Web1/> */}
      {/* <WebGame/> */}
      <FormWeb/>
    </View>
  )
}

export default HomeWeb

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Web1 from './web/web1'
import WebGame from './web/webgame'
import FormWeb from './web/formsweb'
import From3D from './web/from3D'

const HomeWeb = () => {
  return (
    <View style={{flex:1}}>
      {/* <Web1/> */}
      {/* <WebGame/> */}
      <FormWeb url={"https://www.youtube.com/watch?v=3R1eUfVxOGI"}/>
      {/* <From3D/> */}
    </View>
  )
}

export default HomeWeb

const styles = StyleSheet.create({})
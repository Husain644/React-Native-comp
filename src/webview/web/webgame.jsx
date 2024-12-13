import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const WebGame = () => {
  return (
    <View style={{width:'100%',height:'100%'}}>
      <WebView
        source={{ uri: 'https://poki.com/en/g/3d-moto-simulator-2' }}
        style={{flex:1}}
      />
    </View>
  )
}

export default WebGame

const styles = StyleSheet.create({})
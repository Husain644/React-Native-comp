import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Web1 = () => {
  //const url="https://reactnative.dev/"
  return (
    <WebView source={{ uri: '' }} style={{ flex: 1 }} />
  )
}

export default Web1

const styles = StyleSheet.create({})

import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const From3D = () => {
  return (
    <View style={{width:'100%',height:'100%'}}>
    <WebView
      source={{ uri: 'https://threejs.org/examples/#webgl_animation_keyframes' }}
      style={{flex:1}}
    />
  </View>
  )
}

export default From3D
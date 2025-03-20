import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const FormWeb = ({url= 'https://hrms.rs-india.com'}) => {
  return (
    <View style={{width:'100%',height:'100%'}}>
      <WebView
        source={{ uri:url }}
        style={{flex:1}}
      />
    </View>
  )
}

export default FormWeb

const styles = StyleSheet.create({})
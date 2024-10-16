import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const MapInput = React.forwardRef((props,ref) => {
  return (
    <View style={{flexDirection:'row',gap:10,borderWidth:1}}>
      <Text>MapInput</Text>
      <TextInput  ref={ref}  placeholder="Enter your location" />
    </View>
  )
})

export default MapInput

const styles = StyleSheet.create({})
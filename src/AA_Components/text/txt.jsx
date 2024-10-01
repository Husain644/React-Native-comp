import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Txt = () => {
  return (
    <View>
      <Text 
      numberOfLines={2}
      style={{ backgroundColor:'skyblue',color:'black' }}
      >
       hello this text 
      </Text>
    </View>
  )
}

export default Txt

const styles = StyleSheet.create({})
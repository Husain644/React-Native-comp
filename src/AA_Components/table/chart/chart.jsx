import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Piachart from './comp/piachart'
import Barchart from './comp/barchart'


const chart = () => {
  return (
    <View>
      <Text>chart</Text>
      <Piachart/>
      <Barchart/>
    </View>
  )
}

export default chart

const styles = StyleSheet.create({})
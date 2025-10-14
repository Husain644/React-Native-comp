import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../components/bottom_nav'

const Calls = () => {
  return (
    <View style={{flex:1}}>
      <Text>Calls</Text>
      <BottomNav screen="calls" />
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({});


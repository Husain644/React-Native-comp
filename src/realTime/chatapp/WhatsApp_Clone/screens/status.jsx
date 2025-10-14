import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../components/bottom_nav'


const Status = () => {
  return (
    <View style={{flex:1}}>
      <Text>Status</Text>
     <BottomNav screen="status"/>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({})
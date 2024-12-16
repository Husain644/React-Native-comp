import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper';
import Mychip from './mychip';

const ChipComp = () => {
  return (
    <View style={{padding:20}}>
      <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip 'react native paper'</Chip>
      <Mychip/>
    </View>
  )
}

export default ChipComp

const styles = StyleSheet.create({})
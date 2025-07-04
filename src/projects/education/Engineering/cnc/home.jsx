import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CncHome = () => {
  return (
    <View>
      <Text style={
        {fontSize:60,color:'red',fontStyle:'italic',fontWeight:'600',
        textTransform:'uppercase'}}>
        cnc simulator
      </Text>
    </View>
  )
}

export default CncHome

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CompB = () => {
    const count = useSelector(state => state.counter.count)
  return (
    <View style={{flex:0.5,backgroundColor:'#ccc'}}>
      <Text style={{fontSize:25,margin:20,color:'blue',textAlign:'center'}}>CompB 
      </Text>
      <Text style={{fontSize:25,margin:20,color:'red'}}>Current count: {count}</Text>
    </View>
  )
}

export default CompB

const styles = StyleSheet.create({})
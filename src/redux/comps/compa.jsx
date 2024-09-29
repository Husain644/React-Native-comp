import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../slices/counter'

const CompA = () => {
  const dispatch = useDispatch()
  return (
    <View style={{flex:0.5,backgroundColor:'yellow'}}>
      <Text>CompA</Text>
      <Button style={{marginTop:10}} title='increment' onPress={()=>{dispatch(increment(10))}} />
      <Text></Text>
      <Button style={{margin:20}} title='decrement' onPress={()=>dispatch(decrement(20))}/>
    </View>
  )
}

export default CompA;
const styles = StyleSheet.create({})
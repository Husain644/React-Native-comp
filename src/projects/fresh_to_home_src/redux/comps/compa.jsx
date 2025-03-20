import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increament,decreament } from '../slices/counter'

const CompA = () => {
  const dispatch = useDispatch()
  return (
    <View style={{flex:0.5,backgroundColor:'yellow'}}>
      <Text style={{fontSize:25,margin:20,color:'blue',textAlign:'center'}}>CompA</Text>
      <Button style={{marginTop:10}} title='increment++' 
      onPress={()=>{dispatch(increament(10))}} />
      <Text></Text>
      <Button style={{margin:20}} title='decrement --' onPress={()=>dispatch(decreament(20))}/>
    </View>
  )
}

export default CompA;
const styles = StyleSheet.create({})
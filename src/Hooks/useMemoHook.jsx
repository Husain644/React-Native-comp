import { StyleSheet, Text, View } from 'react-native'
import {React,memo} from 'react'

const useMemoHook = memo(() => {
  return (
    <View>
      <Text>useMemoHook</Text>
    </View>
  )
})

export default useMemoHook

const styles = StyleSheet.create({
    
})
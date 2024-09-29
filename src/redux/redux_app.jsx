import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompA from './comps/compa'
import CompB from './comps/compb'
import { Provider } from 'react-redux'
import { store } from './store'

const Redux_app = () => {
  return (
    <Provider store={store}>
      <Text>Redux_app</Text>
      <CompA />
      <CompB />
    </Provider>
  )
}

export default Redux_app

const styles = StyleSheet.create({})
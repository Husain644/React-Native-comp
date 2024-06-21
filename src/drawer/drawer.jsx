// first install these dependency 
// npm install @react-navigation/drawer  react-native-gesture-handler react-native-reanimated

// Add Reanimated's babel plugin
// Add react-native-reanimated/plugin plugin to your babel.config.js.
// module.exports = {
//     presets: [
//       ... // don't add it here :)
//     ],
// add this line 
//     plugins: ['react-native-reanimated/plugin'],

//   };
// run command 
// npm start -- --reset-cache

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Drawer = () => {
  return (
    <View>
      <Text>Drawer..........</Text>

    </View>
  )
}

export default Drawer

const styles = StyleSheet.create({})
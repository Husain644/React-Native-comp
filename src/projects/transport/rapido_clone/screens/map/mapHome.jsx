import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { React } from 'react'
import Header from './comp/header'


const MapHome = ({ navigation }) => {

  return (
    <View>
      <Header title='map Home'/>
      <Text>MapHome</Text>
      <TouchableOpacity
        onPress={() => { navigation.openDrawer() }}
      ><Text>open drawer</Text></TouchableOpacity>
    </View>
  )
}

export default MapHome

const styles = StyleSheet.create({})
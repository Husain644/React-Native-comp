import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import css from '../../AA_Components/css/css'

const QrcodeHome = () => {
  return (
    <View style={[css.bg.white2,css.center,css.g10]}>
      <TouchableOpacity style={[css.p10,css.bg.dark,css.w75,css.borderff]}>
        <Text style={[css.textCenter,css.h4,css.color.white]}>Scane QrCode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[css.p10,css.bg.dark,css.w75,css.borderff]}>
        <Text style={[css.textCenter,css.h4,css.color.white]}>Generate QrCode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default QrcodeHome

const styles = StyleSheet.create({
})
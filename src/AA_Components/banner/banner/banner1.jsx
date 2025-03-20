import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import css from '../../css/css'

const Banner1 = () => {
  return (
<View style={{paddingBottom:50}}>
<View style={[css.rowStart,css.border,css.bgAliceBlue,css.p10]}>
      <Text style={[css.flex1,css.textCenter,css.bgBrown,]}>Banner1</Text>
      <Text  style={[css.flex1,css.textCenter]}>Banner2</Text>
      <Text  style={[css.flex1,css.textCenter]}>Banner3</Text>
      <Text  style={[css.flex1,css.textCenter,css.color.red]}>Banner4</Text>  
    </View>
</View>
  )
}

export default Banner1

const styles = StyleSheet.create({})
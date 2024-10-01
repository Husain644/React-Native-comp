import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import AutoComp from './autocomplete/autocomplete'
import EditableList from './list/editable_list'
import Accordian from './accordians/accord'
import Anim from './animations/anim'
import Activity_Indicatr from './activity_indicator/activity_indicator'
import AppbarComp from './appbar/appbar'
import Headings from './divider/heading'


const HomeA = () => {
  return (
 <ScrollView>
        {/* <Accordian/> */}
        {/* <Anim/> */}
        {/* <AutoComp/> */}
        {/* <Activity_Indicatr/> */}
        <AppbarComp/>
        {/* <Headings/> */}
        {/* <EditableList/> */}
 </ScrollView>
  )
}

export default HomeA

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Barchart from './components/bar_chart'
import ChartsKitHome from './components/chartsbyChartKit/allCharts'
import Main from './realtimechart/main'

const ChartsHome = () => {
  return (
    <>
      <Barchart/>{/* manual bar testing components  */}
       <ChartsKitHome/>
        <Main/>
    </>
  )
}

export default ChartsHome

const styles = StyleSheet.create({})
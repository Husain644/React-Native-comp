import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carosel from '../carosel/carosel'
import Carosel1 from '../carosel/carosel1'
import Banner1 from './banner1'
import Snap_carosel from '../carosel/snap_carosel'

const BannerHome = () => {
  return (
    <>
      <Carosel1 />
      {/* <Carosel /> */}
      <Snap_carosel/>
    {/* <Banner1/> */}
      
    </>
  )
}

export default BannerHome

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './signup/login'
import Calndr from './signup/time_date/calender'



const FHome = () => {
  return (
    <>
   {/* <Login /> */}
   <Calndr />
    </>
  )
}

export default FHome

const styles = StyleSheet.create({
  // Define your styles here  
})
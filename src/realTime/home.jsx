import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Chat from './chatapp/chat'
import axios from 'axios'
import WhatsApp_Home from './chatapp/WhatsApp_Clone/home'
import ToastManager from 'toastify-react-native'
import FileStream from './filestreaming/filestream'

const RealTimeHome = () => {
  
  return (
    <>
   {/* <WhatsApp_Home/> */}
    {/* <ToastManager /> */}
    {/* <Chat url={'user'}/> */}
     <FileStream/>
    </>
  )
}

export default RealTimeHome

const styles = StyleSheet.create({

})

// Chat (messages + typing + rooms)
// Notifications
// Live map/location
// Collaborative editing
// Online presence
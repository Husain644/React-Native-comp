import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerHome from './drawer/drawer'
import HomeNav from './navigation/home'
import MyDrawer from './drawer/myDrawer/mydrawer'
import HomeCamera from './camera/home'
import HomeWeb from './webview/home'
import Gallery from './camera/gallery/gallery'                                                
import HomeA from './AA_Components/home'
import RazorPayHome from './paymentGateway/razorpay/home_razorpay'
import Cashfree from './paymentGateway/razorpay/cashfree'
import Redux_app from './redux/redux_app'
//import Share_It from './Fetures/share_Features'
import GoogleMap from './google_Map/map_routing'
import AutoComplete from './google_Map/comp/autoComplete/autoComplete'
import Routes from './google_Map/comp/routes/routes'
import DateTime from './forms/date&timepicker/datetime'





const Home = () => {
  return (
    <>     
      <HomeA/> 
      {/* <DrawerHome /> */}
      {/* <HomeNav /> */}
      {/* <MyDrawer/> */}
      {/* <HomeCamera/> */}
      {/* <HomeWeb/> */}
      {/* <Gallery/> */}
      {/* <RazorPayHome/> */}
      {/* <Cashfree/> */}
      {/* <Redux_app/> */}
      {/* <Share_It/> */}
      {/* <GoogleMap/> */}
      {/* <AutoComplete/> */}
   
    </>
  )
}

export default Home

const styles = StyleSheet.create({})
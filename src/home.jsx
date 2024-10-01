import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerHome from './drawer/drawer'
import HomeNav from './navigation/home'
import MyDrawer from './drawer/myDrawer/mydrawer'
import HomeCamera from './camera/home'
import HomeWeb from './webview/home'
import Gallery from './camera/gallery/gallery'                                                
import HomeA from './AA_Components/home'
import Map from './google_Map/Map'
import HomeMap from './google_Map/map_home'
import MapComp from './google_Map/Map'
import RazorPayHome from './paymentGateway/razorpay/home_razorpay'
import Cashfree from './paymentGateway/razorpay/cashfree'
import Redux_app from './redux/redux_app'
import Share_It from './Fetures/share_Features'


const Home = () => {
  return (
    <>
      {/* <Text style={{flex:1,width:'100%',textAlign:'center',fontSize:25,backgroundColor:''}}>hello </Text> */}
      {/* <DrawerHome /> */}
      {/* <HomeNav /> */}
      {/* <MyDrawer/> */}
      {/* <HomeCamera/> */}
      {/* <HomeWeb/> */}
      {/* <Gallery/> */}
      <HomeA/>
      {/* <HomeMap/> */}
      {/* <MapComp/> */}
      {/* <RazorPayHome/> */}
      {/* <Cashfree/> */}
      {/* <Redux_app/> */}
      {/* <Share_It/> */}
    </>
  )
}

export default Home

const styles = StyleSheet.create({})
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
import Share_It from './Fetures/share_Features'
import GoogleMap from './google_Map/map_routing'
import AutoComplete from './google_Map/comp/autoComplete/autoComplete'
import Routes from './google_Map/comp/routes/routes'
import DateTime from './forms/date&timepicker/datetime'
import FileManager from './Fetures/fileSystems/file_manager'
import NotifeeHome from './Fetures/notifications/notifeeHome'
import ContactsHome from './Fetures/Contacts/contacts'
import ProjectHome from './projects/projectsHome'
import RealTimeHome from './realTime/home'
import AuthHome from './forms/Authentication/home'


const Home = () => {
  return (
    <>     
      {/* <HomeA/>  */}
      {/* <DrawerHome /> */}
      {/* <MyDrawer/> */}
      {/* <HomeNav /> */}
      {/* <HomeCamera/>  */}
      {/* <HomeWeb/> */}
      {/* <Gallery/> */}
      {/* <RazorPayHome/> */}
      {/* <Cashfree/> */}
      {/* <Redux_app/>  */}
      {/* <Share_It/> */}
      <GoogleMap/>
      {/* <AutoComplete/>  */}
      {/* <FileManager/> */}
      {/* <NotifeeHome/> */}
      {/* <ContactsHome/> */}
      {/* <ProjectHome/> */}
      {/* <RealTimeHome /> */}
      {/* <AuthHome/> */}
    </>
  )
}

export default Home

const styles = StyleSheet.create({})
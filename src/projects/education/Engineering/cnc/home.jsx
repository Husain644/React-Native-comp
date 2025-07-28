import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { store } from './redux/store';
import { Provider,useSelector, useDispatch } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Items from './components/items';
import {HeaderOptions } from './components/utils/util';
import NavigationHome from './screens/navigationHome';
import IntroHome from './screens/introduction/introHome';
import Parts from './screens/cncparts/parts';
import Gcode from './screens/gcode/gcode';
import GdandtNav from './screens/gd_and_t/gdandtNavigation';
import Gdandt from './screens/gd_and_t/gdandt';

const CncHome = () => {
    const Drawer = createDrawerNavigator()
  return (
    <Provider store={store}>
         <NavigationContainer >
         <Drawer.Navigator initialRouteName="navigationHome" drawerContent={() => <Items/>} >
         <Drawer.Screen name="navigationHome" component={NavigationHome} options={() => HeaderOptions({title:'🏠 Navigation'})}/>
        <Drawer.Screen name="parts" component={Parts} options={() => HeaderOptions({title:'🏠 parts'})}/>
        <Drawer.Screen name="introduction" component={IntroHome} options={() => HeaderOptions({title:'🏠 introduction'})}/>
        <Drawer.Screen name="gcode" component={Gcode} options={() => HeaderOptions({title:'🏠 G-Code M-code'})}/>
        <Drawer.Screen name="gdandt" component={GdandtNav} options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  
  )
}

export default CncHome

const styles = StyleSheet.create({
  txt: {
    fontSize:20,
    color: "red",
    fontStyle: "italic",
    fontWeight: "600",
    textTransform: "uppercase",
    marginTop:5,
    paddingLeft:20
  },
});
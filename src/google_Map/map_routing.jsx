import React from 'react'
import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MapHome from './MapHome';
import PickDrop from './comp/pick_drop_screens/pick_drop';
import Routes from './comp/routes/routes';
import MapSplash from './comp/mapsplash';
import ChooseOnMap from './comp/pick_drop_screens/choose_on_map';
import LocationTracker from './comp/real_time_location/realtime';
import PlaceAutoComplete from './comp/autoComplete/place_auto_complete';
import TestingMap from './comp/utility/testingMap';

const Stack = createNativeStackNavigator();
export default function GoogleMap() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nav">
        <Stack.Screen name='testing' component={TestingMap} options={{headerShown:false}} />
         <Stack.Screen  name='Splash' component={MapSplash} options={{headerShown:false}}/>
         <Stack.Screen name="Nav" component={Nav}  options={{headerShown:false}}/>
         <Stack.Screen name="Map" component={MapHome}  options={{headerShown:false}}/>
         <Stack.Screen name="PickDrop" component={PickDrop} options={{headerShown:false,title:'pick and drop'}}/>
         <Stack.Screen name="Routes" component={Routes} options={{headerShown:false,title:'Routes'}}/> 
         <Stack.Screen name="ChooseOnMap" component={ChooseOnMap} options={{headerShown:false,title:'Routes'}}/>
         <Stack.Screen name="RealTime" component={LocationTracker} options={{headerShown:true,title:'Real Time Location'}}/>
         <Stack.Screen name="Place" component={PlaceAutoComplete} options={{headerShown:true,title:'search place type'}}/>
      </Stack.Navigator>
    </NavigationContainer> 
  )
}

const data=[
  {name:"map home",screen:"Map"},
  {name:'getting distance between two Location',screen:'PickDrop'},
  {name:'get realTime location',screen:'RealTime'},
  {name:'get Near by data like hospitals,bank etc',screen:'Place'},
  {name:'Real Time Location sharing',screen:'Nav'}
]

const Nav=({navigation})=>{
  return(
    <> 
    <View style={styles.container}>  
    <Text style={styles.mainHeading}>All map related fetures </Text> 
      <View style={styles.wraper}>
       {
        data.map((item,index)=>{return(
          <TouchableOpacity key={index}  style={styles.links}  onPress={()=>navigation.navigate(item.screen)}>
          <Text style={styles.linkText}>{index+1}. {item.name} </Text>
       </TouchableOpacity>
        )})}
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding:20,
    backgroundColor: "#a8c0a8",
  },
  mainHeading: {
    backgroundColor: "rgba(255, 255, 255,0.5)",
    textAlign: "center",
    color: "red",
    fontSize: 35,
    fontWeight:'600',
    width: "100%",
    borderRadius:5,
  },
  wraper:{
    padding:10,
    backgroundColor:'#fff',
    borderRadius:5,
    gap:10

  },
  links: {
    width: 100,
    padding: 5,
    borderRadius: 5,
    backgroundColor:'#ccc',
    width:'100%',

  },
  linkText:{
    color:'#101110',
    fontSize:16,
    fontWeight:'600',
    borderBottomWidth:2,
    borderBottomColor:'#0000ff',
    fontStyle:'italic',
    textTransform:'capitalize'
  }
});
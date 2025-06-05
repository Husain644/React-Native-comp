import { StyleSheet,Text, View, Image,TouchableOpacity } from 'react-native'
import { React, useState,useRef,useEffect } from 'react'
import MapView, { Circle } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import FantIcon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';

import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import {Google_map_api_key} from "react-native-dotenv";


const ChooseOnMap = ({route}) => {
  Geocoder.init("AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us");
  const navigation=useNavigation();
  const {lat,lng}=route.params.curLatLong;
  const initialLocation=route.params.curLocName
  const pick=route.params.pick
  const mapRef=useRef(null);
  const moveToLocation=async(latitude,longitude)=>{     /// Location per move krne k liye function
    mapRef.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },2000)
  };
 const currentLocation = {  
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0800,
    longitudeDelta: 0.0421,
  }
  
  const [rigion, setRigion] = useState(currentLocation);
  const [location,setLocation]=useState({address_components:[{},{long_name:initialLocation.title}],
  formatted_address:initialLocation.desc});
  const getRegion = (r) =>{
    setRigion(r);}
  const lastLocation=async(r)=>{
  console.log(r.latitude,r.longitude)
  const resp=await Geocoder.from(r.latitude,r.longitude);
  setLocation(resp.results[1])
  } 
  const addrToPicDrop=()=>{
    pick?navigation.navigate("PickDrop",{pickLatLong:rigion,addr:location}):
    navigation.navigate("Routes",{rigion:rigion,addr:location})
  }
  return (
    <View style={{ flex: 1}}>
      <MapView style={{ flex: 1, zIndex: 0 }}
        onRegionChangeComplete={lastLocation}
        initialRegion={rigion}
        onRegionChange={getRegion}
        ref={mapRef}> 
        <Marker coordinate={rigion} title="marker2" description="this is description">
          <Icon  name={"pin"} size={50} color="red" />
        </Marker>
      </MapView>
     <View style={styles.locContainer}>
     <TouchableOpacity style={{ position: 'absolute',top:-50, right: 20 }} onPress={() =>moveToLocation(lat,lng)}>
         <FantIcon  name={"compass-alt"} size={40} color="gray"/>
     </TouchableOpacity>
     <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#e9acac',padding:5,paddingHorizontal:15,
      alignItems:'center',borderRadius:5
      }}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}  style={{backgroundColor:'#fff',alignSelf:'flex-start',width:50,alignItems:'center',borderWidth:1,borderRadius:5}}>
          <Icon  name={"arrow-back-outline"} size={30} color="gray" />
       </TouchableOpacity>
       <Text style={{fontSize:16,color:'#003',fontWeight:'600'}}>
            {pick?'Choose Your Pick Location':'Choose Your Drop Location'}
        </Text>
  </View>
        <View style={styles.loc}>
               <Icon  name={"aperture"} size={30} color="green" />
                <View style={styles.locAddrContainer}>
                    <Text style={{ fontSize: 18, color: "#000",fontFamily:"Roboto",fontWeight:300}}>
                        {location?.address_components[1].long_name}
                    </Text>
                    <Text style={{fontSize:14,color:'#000'}}>{location?.formatted_address}</Text>
                </View>
        </View>
        <TouchableOpacity onPress={addrToPicDrop} style={{backgroundColor:'#008000',borderRadius:20,alignItems:'center'}}>
            <Text style={{fontSize:20,color:'#fff',padding:5}}> Click </Text> 
        </TouchableOpacity> 
     </View>
    </View>
  )
}

export default ChooseOnMap;
const styles = StyleSheet.create({
    locContainer:{
        height:220,
        borderTopWidth:1,
        padding:15,
        justifyContent:'space-between'
    },
    loc:{
        marginTop:10,
        flexDirection:"row",
        alignItems: "center",
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:15,
        paddingHorizontal:5,
        gap:5 
    },
    locAddrContainer:{
        flex:1,
        borderLeftWidth:1,
        borderColor:'#999',
        paddingLeft:10
    }
})
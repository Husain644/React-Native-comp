import { StyleSheet, Button, Text, View, Image } from 'react-native'
import { React, useState,useRef } from 'react'
import MapView, { Circle } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import FantIcon from 'react-native-vector-icons/Fontisto';
import GooglePlacesInput from './place_find'
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import {Google_map_api_key} from "react-native-dotenv"







const MapComp = () => {
  const mapRef=useRef(null)  //

  const moveToLocation=async(latitude,longitude)=>{
    // console.log(latitude,longitude) 
    mapRef.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },2000)
  }
  
  const currentLocation = {
    latitude: 28.192762,
    longitude: 76.623940,
    latitudeDelta: 0.0800,
    longitudeDelta: 0.0421,
  }
  const getLocation=()=>{
    Geolocation.getCurrentPosition(async (position) => {
      setCord({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0800,
        longitudeDelta: 0.0421,
      });
      moveToLocation(position.coords.latitude, position.coords.longitude)
    },
    (error) => {
      console.log(error.message);
    },
    { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
  }
  const origin = {latitude: 28.192762, longitude: 76.623940};
  const destination = {latitude: 26.9124336, longitude:75.7872709};
  const [rigion, setRigion] = useState(currentLocation)
  const [cord,setCord]=useState({latitude: 28.192762, longitude: 76.623940})
  

  const getRegion = (r) => {
    setRigion(r)
  }
  const calculateDistance = (params) => {
    // console.log(params.distance,params.duration,params.legs)
  }
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesInput moveTo={moveToLocation}/>
      <MapView style={{ flex: 1, zIndex: 0 }}
        initialRegion={rigion}
        onRegionChange={getRegion}
        ref={mapRef}
      >
          <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={Google_map_api_key}
          mode="DRIVING"
          splitWaypoints={false}
          strokeWidth={3}
          strokeColor="hotpink"
          onReady={calculateDistance}
          // onStart={(e)=>{console.log(e)}}
          />
        <Marker  draggable
        coordinate={cord} 
        onDragEnd={(e)=>{setCord(e.nativeEvent.coordinate)}} 
        title="marker1"  description="this is description">
        </Marker>
        <Marker coordinate={rigion} title="marker2" description="this is description">
          <Icon style={{}} name={"pin"} size={50} color="red" />
        </Marker>
        <Circle center={{ latitude: 28.17976983436667, longitude: 76.62134679034352 }} radius={1000} lineCap='square' fillColor='rgba(180,120,120,0.3)'/>
      </MapView>
      <FantIcon onPress={() =>moveToLocation(currentLocation.latitude,currentLocation.longitude)} name={"compass-alt"} size={50} color="gray"
        style={{ position: 'absolute', bottom: 20, right: 20 }} />
      <FantIcon onPress={getLocation} name={"compass-alt"} size={50} color="pink"
        style={{ position: 'absolute', bottom: 20, left: 20 }} />
    </View>
  )
}

export default MapComp;

const styles = StyleSheet.create({})
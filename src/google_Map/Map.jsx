import { StyleSheet, Button, Text, View,Image } from 'react-native'
import { React, useState } from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import FantIcon from 'react-native-vector-icons/Fontisto';
import GooglePlacesInput from './place_find'



const MapComp = () => {
  const currentLocation={
    latitude: 28.192762,
    longitude: 76.623940,
    latitudeDelta: 0.0800,
    longitudeDelta: 0.0421,
  }

  const[pickup,setPickup]=useState({
  })
  const [rigion, setRigion] = useState(currentLocation)
  const getRegion=(r)=>{
    setRigion(r)
  }
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesInput  />
       <MapView style={{ flex: 1 }}
          initialRegion={rigion} 
          onRegionChange={getRegion}
        >
      <Marker
      coordinate={{
        latitude: 28.192762,
        longitude: 76.623940,
      }}
      title="marker"
      description="this is description"
    >
    </Marker>
        <Marker
      coordinate={rigion}
      title="marker"
      description="this is description"
    >
       <Icon style={{}} name={"pin"} size={50} color="red" />
    </Marker>
      </MapView>
      <FantIcon onPress={()=>setRigion(currentLocation)} name={"compass-alt"} size={50} color="gray" style={{position:'absolute',bottom:20,right:20}} />
    </View>
  )
}

export default MapComp;

const styles = StyleSheet.create({})
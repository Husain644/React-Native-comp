import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native'
import React,{useRef,useState,useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import MapView,{Polyline,Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import Bike from '../../../assets/images/bikeTop.png'


const { width, height } = Dimensions.get("window");
 const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.05;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const toRad = (deg) => (deg * Math.PI) / 180;
const toDeg = (rad) => (rad * 180) / Math.PI;
// Compute bearing between 2 coordinates
function getBearing(start, end) {
  const dLon = toRad(end.longitude - start.longitude);
  const lat1 = toRad(start.latitude);
  const lat2 = toRad(end.latitude);

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

  let brng = toDeg(Math.atan2(y, x)); // -180..+180
  brng = (brng + 360) % 360; // 0..360

  return brng;
}
const StartRide = () => {
      const route = useRoute() 
      const {routesCoordinates}=route.params
      
    const [currentPosition, setCurrentPosition] = useState(0);
  
    const [prevPosition, setPrevPosition] = useState(0);
    const [heading, setHeading] = useState(0);
    const mapRef = useRef(null);
    
    const StartRiding=()=>{
        let intervalId=setInterval(
            ()=>{
              if(
                currentPosition >=routesCoordinates.length
              ){
                console.log('clear call')
               }else{
                  setCurrentPosition(prev=>prev+1)
              }
            }
            ,1000)
    }

useEffect(()=>{
       if(routesCoordinates.length >currentPosition+1){
             console.log(routesCoordinates[currentPosition])
                 mapRef.current?.animateCamera({
                 center:routesCoordinates[currentPosition],
                 zoom: 17,
                 heading:getBearing(routesCoordinates[currentPosition],routesCoordinates[currentPosition+1]),
                 pitch: 45},{ duration:1000 })}

},[currentPosition])

  return (
    <View style={styles.mapWrapper}>
                  <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: routesCoordinates[0].latitude,
            longitude: routesCoordinates[0].longitude,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA,
          }}
        >
        {
          routesCoordinates.length >0 &&
            <Polyline   
              coordinates={routesCoordinates}
              strokeWidth={10}
              strokeColor="rgba(255,10,100,0.3)"
              fillColor="green"
            //   geodesic={true}
              lineCap='round'
            //   lineDashPattern={[1]}
            tappable={true}
              onPress={(e) => {
                                const { coordinate, position, action } = e.nativeEvent;
                                console.log('Polyline pressed: ', action);
                                console.log('LatLng: ', coordinate);
                                console.log('Screen position: ', position);
                                // mapRef.current.animateToRegion({ ...coordinate, latitudeDelta: 0.01, longitudeDelta: 0.01, },500) //using animate 
                                mapRef.current?.animateCamera({
                                center: coordinate,
                                zoom: 15,
                                heading: heading, // direction of movement
                                pitch:45,},
                                { duration: 500 }
                                )}}
            />       
        }
                <Marker coordinate={routesCoordinates[currentPosition]}>
                    <View style={styles.markerContainer}>
                    <Image source={Bike} style={styles.markerImage} />        
                    </View>
                </Marker>
           
        </MapView>
        <TouchableOpacity onPress={StartRiding} style={{padding:10,backgroundColor:'rgba(154, 241, 95,0.5)'}}><Text>Start Ride</Text></TouchableOpacity>
    </View>

  )
}

export default StartRide

const styles = StyleSheet.create({
      mapWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 1
  },
    map: {
    ...StyleSheet.absoluteFillObject,
  },
    markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width:50,   // change size here
    height: 50,
    // backgroundColor:'#fff'
  },
  markerImage: {
    width:50,   // change size here
    height: 50,
    resizeMode: 'contain',
    // tintColor: 'red', // uncomment if you want to tint a monochrome icon
  },
})
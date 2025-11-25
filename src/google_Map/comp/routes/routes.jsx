import {React,useState,useRef} from 'react';
import { View, StyleSheet, TouchableOpacity,Text,Dimensions, ToastAndroid,LogBox,Linking } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Google_map_api_key } from "react-native-dotenv"
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { toHour } from '../utility/common_function';
import { useRoute,useNavigation } from '@react-navigation/native';
import CustomMarker from '../marker/markers';


 const { width, height } = Dimensions.get("window");
 const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.05;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

LogBox.ignoreLogs([
  'MapViewDirections Error: Error on GMAPS route request: ZERO_RESULTS',
]);

export default function MapScreen() {
  const mapRef = useRef(null);
  const route = useRoute()
  const navigation=useNavigation()
  
  const { pickLocation, dropLocation } = route.params.Loc;   // we got pick and drop latitude and longitude
  const {pick,drop}=route.params.picDropAddr;              //we got pick and drop address description
  const origin = { latitude:pickLocation.lat, longitude:pickLocation.lng};
  const destination = { latitude: dropLocation.lat, longitude: dropLocation.lng };
  const [routesCoordinates, setRoutesCoordinates] = useState([]);
  const [mode,setMode]=useState("DRIVING");
  const [showMode,setShowMode] = useState(false)
  const [result,setResult] = useState({
    distance:0,
    duration:0,
  })
  function openGoogleMap(){
  const originStr = `${origin.latitude},${origin.longitude}`;
  const destStr   = `${destination.latitude},${destination.longitude}`;
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    originStr
  )}&destination=${encodeURIComponent(
    destStr
  )}&travelmode=driving`;

  Linking.openURL(url).catch(err => {
    console.warn('Failed to open Google Maps:', err);
  });
  }
  function StartRide(){
   
   navigation.navigate('StartRide',{routesCoordinates})

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity onPress={()=>{}} style={{}} >
             <Icon name="long-arrow-alt-left" color="#000" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setShowMode(!showMode)}} style={{alignItems:'center'}}>
              <Icon name={
                 mode==="DRIVING"?"car":mode==="WALKING"?"walking":mode==="BICYCLING"?"bicycle":"train"}
              color="#000" size={20} />
              <Text style={{fontSize:12,color:'blue'}}> Travel Mode</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center'}} onPress={openGoogleMap}>
               <Icon name="map-marked-alt" size={20} color="#f06262" />
                <Text style={{fontSize:10}}>Open Google map</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{alignItems:'center'}} onPress={StartRide}>
               <Icon name="location-arrow" size={20} color="#8490fc" />
                <Text style={{fontSize:10}}>start journey</Text>
            </TouchableOpacity>

        <View style={{position:'absolute',right:showMode?10:-60,top:50,gap:20,borderWidth:1,alignItems:'center'}}>
          <TouchableOpacity onPress={()=>{setMode("DRIVING");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon name="car" color="#000" size={20} />
            <Text style={{}}>Driving</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{setMode("WALKING");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon name="walking" color="#000" size={20} />
            <Text style={{}}>walking</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{setMode("BICYCLING");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon name="bicycle" color="#000" size={20} />
            <Text style={{}}>Bicycling</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{setMode("TRANSIT");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon name="train" color="#000" size={20} />
            <Text style={{}}>Train</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.mapWrapper}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: 26.8558251,
            longitude: 75.6455442,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA,
          }}
        >
          <Marker coordinate={origin} />
          <CustomMarker latLong={origin} text={pick || "start from here"} icon={mode==="DRIVING"?"car":mode==="WALKING"?"walking":mode==="BICYCLING"?"bicycle":"train"}/>
          <CustomMarker latLong={destination} text={drop || "start from here"}/>
          <Marker coordinate={destination} />
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={Google_map_api_key}
            mode={mode}
            strokeWidth={2}
            strokeColor="#2225e9"
            provideRouteAlternatives={true}  // Enable alternative routesCoordinates
            optimizeWaypoints={true}
            onReady={(result) => {
            const coordinates = result.coordinates;
            setRoutesCoordinates(coordinates);
            setResult({
            distance: result.distance,
            duration: result.duration,
            });
            mapRef.current?.fitToCoordinates(coordinates, {
              edgePadding: {
                top: 100,    // more space at top
                right: 40,
                bottom: 200, // more space at bottom → pickup looks at bottom side
                left: 40,
              },
              animated: true,
            });
            }}

            onError={(errorMessage) => {
            console.log('Directions error:', errorMessage);
             
            // Simple example fallback: if bicycling fails, try driving
            if (mode === 'BICYCLING') {
            console.log('No bicycling route, falling back to driving');
            setMode('DRIVING');
            ToastAndroid.show('Cycling route not available', ToastAndroid.SHORT);
            } else {
            ToastAndroid.show('Error fetching directions', ToastAndroid.SHORT);
            }
            }}
            />
        {/* {
          routesCoordinates.length >0 &&
            <Polyline   
              coordinates={routesCoordinates}
              strokeWidth={3}
              strokeColor="green"
            />       
        } */}
      
        </MapView>
      </View>
      <View style={styles.footer}>
             <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,borderWidth:0}}>
                 <View style={{alignItems:'center',flex:1,borderRightWidth:1}}>
                 
                    <Text style={{}}>{pick}</Text>
                 </View>
                 <View style={{alignItems:'center',flex:1}}>
                  
                   <Text style={{}}>{drop}</Text>
                 </View>
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
              <Text> Distance: {Math.round(result.distance*100)/100} Km</Text>
              <Text>Calculated Time {toHour(result.duration)} Hours </Text>
             </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',

  },
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
  header: { 
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:20,
      height: 50,
      width: '100%', 
      position: 'absolute', 
      zIndex: 9 ,
      backgroundColor:'#fff',
      borderBottomColor:'#ccc',
      borderBottomWidth:1

    },
  footer:{
    bottom:0,
    backgroundColor: '#fff',
    height: 80,
    width: '100%', 
    position: 'absolute', 
    zIndex: 9,
    backgroundColor:'#fff',
    opacity:1,
    borderColor:'#999',
    borderWidth:1,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    borderBottomWidth:0
  }
});

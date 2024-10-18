import {React,useState} from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Google_map_api_key } from "react-native-dotenv"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon6 from 'react-native-vector-icons/dist/FontAwesome6';
import { useRoute } from '@react-navigation/native';


export default function MapScreen() {
  const route = useRoute();
  const { pickLocation, dropLocation } = route.params;
  console.log([{'pick':pickLocation.lat}, {'drop':dropLocation.lat}]);
  const origin = { latitude:pickLocation.lat, longitude:pickLocation.lng };
  const destination = { latitude: dropLocation.lat, longitude: dropLocation.lng };

  const [routes, setRoutes] = useState([]);
  const [mode,setMode]=useState("DRIVING");
  const [showMode,setShowMode] = useState(false)
  const [result,setResult] = useState({
    distance:0,
    duration:0,
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity onPress={()=>{}} style={{}} >
             <Icon name="long-arrow-left" color="#000" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setShowMode(!showMode)}} style={{alignItems:'center'}}>
              <Icon name={showMode?"remove":mode==="DRIVING"?"car":mode==="WALKING"?"person-walking":mode==="BICYCLING"?"bicycle":"train-subway"} 
              color="#999" size={20} />
              <Text style={{fontSize:12,color:'blue'}}> Travel Mode</Text>
            </TouchableOpacity>
        <View style={{position:'absolute',right:showMode?10:-60,top:50,gap:20,borderWidth:1,alignItems:'center'}}>
          <TouchableOpacity onPress={()=>{setMode("DRIVING");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon name="car" color="#000" size={20} />
            <Text style={{}}>Driving</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{setMode("WALKING");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon6 name="person-walking" color="#000" size={20} />
            <Text style={{}}>walking</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{setMode("BICYCLING");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon name="bicycle" color="#000" size={20} />
            <Text style={{}}>Bicycling</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{setMode("TRANSIT");setShowMode(false)}} style={{alignItems:'center'}} >
            <Icon6 name="train-subway" color="#000" size={20} />
            <Text style={{}}>Train</Text></TouchableOpacity>
        </View>
    
      </View>
      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 26.8558251,
            longitude: 75.6455442,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={origin} />
          <Marker coordinate={destination} />

          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={Google_map_api_key}
            mode={"DRIVING"}
            strokeWidth={3}
            strokeColor="hotpink"
            provideRouteAlternatives={true}  // Enable alternative routes
            optimizeWaypoints={true}
            onReady={(result) => {
              setRoutes(result.routes);
              setResult({distance: result.distance, duration: result.duration})  }}
          />
          {routes?.map((route, index) => (
            <Polyline
              key={`route-${index}`}
              coordinates={route.coordinates}
              strokeWidth={3}
              strokeColor={index === 0 ? "blue" : "green"} // Different colors for routes
            />
          ))}
        </MapView>
      </View>
      <View style={styles.footer}>
             <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,borderWidth:1}}>
                 <View style={{alignItems:'center',flex:1,borderRightWidth:1}}>
                    <Text style={{}}>From</Text>
                    <Text style={{}}>Muzaffar Nagar U.P.</Text>
                 </View>
                 <View style={{alignItems:'center',flex:1}}>
                   <Text style={{}}>To</Text>
                   <Text style={{}}>Jaipur, Rajasthan</Text>
                 </View>
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text>Distance: {result.distance} Km</Text>
              <Text>Calculated Time {result.duration} Minuts </Text>
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
      opacity:0.6,
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
    opacity:0.8,
    borderColor:'#999',
    borderWidth:1,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    borderBottomWidth:0
  }
});

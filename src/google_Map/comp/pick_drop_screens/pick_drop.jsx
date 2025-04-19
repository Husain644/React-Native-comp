import { StyleSheet, Text, View, TextInput, TouchableOpacity,ActivityIndicator as RnIndicator } from 'react-native'
import { React, useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { useNavigation } from '@react-navigation/native';
import ListComp from './list_comp';

const AutoComplete = ({route}) => {
  console.log(route.params)
  const navigation = useNavigation();
  Geocoder.init("AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us");
  const [predictions, setPredictions] = useState([]);
  const [predictions2, setPredictions2] = useState([]);
  const [pick, setPick]= useState(true);
  const [picDropAddr, setPicDropAddr]= useState({ pick:'',pickDesc:'', drop:'',dropDesc:''});
  const [locations,setLocations]=useState({pickLocation:{lat:0,lng:0},dropLocation:{lat:0,lng:0}});
  const [currentLocation,setCurrentLocation]=useState(null);

  const getData = async () => {
      const options={
      input:pick?picDropAddr.pick:picDropAddr.drop,
      type:'geocode',
      location: { lat: 29.4727, lng: 77.7085 },
      radius: 5000,
      key:'AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us',
      token:'abcd1234-5678-90ab-cdef-1234567890ab'
     }
  const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${options.input}&key=${options.key}&types=${options.type}&components=country:in&
          location=${options.location.lat},${options.location.lng}&radius=${options.radius}&language=en&sessiontoken=${options.token}`
    if (pick?picDropAddr.pick.length >= 3:picDropAddr.drop.length >= 3){
      try {const res = await axios({method:'get',url:url,});
      console.log('Get axios call')
        pick?setPredictions(res.data.predictions):setPredictions2(res.data.predictions)
      } catch (error) {
        console.error(error)}}
      }

const getLatLong = async (placeId,placeName) => {
        pick?setPicDropAddr({...picDropAddr, pick:placeName}):setPicDropAddr({...picDropAddr, drop:placeName})
        const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us`);
        const response= await res.json(); 
        const Loc=pick?{...locations,pickLocation:response.result.geometry.location}:
        {...locations,dropLocation:response.result.geometry.location}
        setLocations(Loc);
        if(Loc.pickLocation.lat!==0 & Loc.dropLocation.lng!==0){ 
             navigation.navigate('Routes',Loc);
          }};

useEffect(() =>{getData()},[picDropAddr]);

const CurrentLoc=()=>{
  Geolocation.getCurrentPosition(async (info) =>{
    const resp=await Geocoder.from(info.coords.latitude,info.coords.longitude);
    setPicDropAddr({ pick:resp.results[1].formatted_address,pickDesc:resp.results[1].address_components[1].long_name, drop:'' });
    setLocations({...locations,pickLocation:{lat:info.coords.latitude,lng:info.coords.longitude}});
    setCurrentLocation({lat:info.coords.latitude,lng:info.coords.longitude});
  })};

useEffect(()=>{CurrentLoc()},[]);

return (
    <View style={styles.container}>
        {
          currentLocation===null&&
          <View style={styles.indicator}>
          <RnIndicator size={80}/>
          <Text>Loading...</Text>
          </View>
        }
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Icon name="long-arrow-left" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 20 ,fontWeight:'600',color:'#000'}}>
          {pick ? "Pickup" : "Drop"}
        </Text>
      </View>
      <View style={styles.inputWraper}> 
        <Text style={styles.inputBadgeText}>Pickup Location</Text>
        <Icon name="map-marker" color="orange" size={25} />
        {pick&&<TouchableOpacity onPress={()=>{setPicDropAddr({...picDropAddr,pick:''})}} style={styles.dismis}>
        <Icon name="close" color="rgba(85, 83, 83,.5)" size={16} />
        </TouchableOpacity>}
        <TextInput   onFocus={() => {setPick(true);}}  value={picDropAddr.pick} placeholder="Current Location"
        style={styles.input}  onChangeText={(e) => {setPicDropAddr({ ...picDropAddr, pick: e });}}/>
      </View>
      <View style={styles.inputWraper} > 
        <Text style={styles.inputBadgeText}> Drop Location</Text>
        <Icon name="map-marker" color="orange" size={25} />
        {!pick&&<TouchableOpacity onPress={()=>{setPicDropAddr({...picDropAddr,drop:''})}} style={styles.dismis}>
        <Icon name="close" color="rgba(85, 83, 83,.5)" size={16} />
        </TouchableOpacity>}
        <TextInput   autoFocus={true}  onFocus={() =>{setPick(false);if(picDropAddr.pick===''){ CurrentLoc()}}}  placeholder="Enter Drop Location"
          style={styles.input} value={picDropAddr.drop} onChangeText={(e) =>{setPicDropAddr({ ...picDropAddr, drop: e });}}/>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("ChooseOnMap",
        {pick:pick,curLatLong:currentLocation,curLocName:{title:picDropAddr.pick,desc:picDropAddr.pickDesc}})}}  
         style={styles.chooseWrap}><Icon name="map-marker" color="#999" size={25} /><Text
         style={styles.choose}>{pick?'Pick location Choos on map':'Drop location Choos on map'}</Text>
      </TouchableOpacity>
      <View style={{ backgroundColor: "#eeae", flex: 1, padding: 5, gap: 5 }}>
        {pick
          ? predictions.map((item, index) => (
            <ListComp item={item} key={index} getLatLong={getLatLong}/> ))
          : predictions2.map((item, index) => (
            <ListComp item={item} key={index}  getLatLong={getLatLong}/> ))}    
      </View>
    </View>
  );
}
export default AutoComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0dddd",
    paddingHorizontal: 10,
  },
  indicator:{
    backgroundColor:'rgba(204, 204, 204,0.7)',
    position:'absolute',
    height:'100%',
    width:'100%',
    top:0,
    left:0,
    alignItems:'center',
    justifyContent:'center',
    zIndex:10
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#d2f7a7",
    padding: 10,
    paddingLeft: 20,
    borderBottomWidth:2
  },
  inputWraper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal:5,
    gap: 5,
    borderWidth: 2,
    borderColor: "#ffa500",
    marginTop:15,
  },
  inputBadgeText: {
    position: "absolute",
    top: -8,
    left: "10%",
    zIndex: 9,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingHorizontal: 2,
    borderRadius:2
  },
  input: {
    backgroundColor:'#fff',
    flex:1,
    height:40,
    borderRadius:5
    },
    chooseWrap:{
      gap:10,
      flexDirection:'row',
      alignItems: "center",
      alignSelf: "flex-start",
      marginLeft: 10,
      margin: 5,
      backgroundColor: "#fff",
      padding:3,
      paddingHorizontal:10,
      borderRadius:5
    },
    choose:{
      fontSize: 12,
      borderRadius: 5,
    },
    dismis:{
      position:'absolute',
      right:4,
      zIndex:10,
      borderWidth:1,
      borderColor:'#ccc',
      borderRadius:40,
      height:20,
      width:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(217, 228, 250,0.5)'
    },
  text: {
      color: "#333",
      marginBottom: 10,
    },
});
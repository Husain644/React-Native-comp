import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { React, useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';



const AutoComplete = () => {

  const navigation = useNavigation();

  const initial=[{
     "description": "Paris, France",
     "structured_formatting": {
      "main_text": "Paris",},
      "place_id": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
  }]

  const [predictions, setPredictions] = useState(initial)
  const [predictions2, setPredictions2] = useState(initial)
  const [pick, setPick]= useState(true)
  const [picDropAddr, setPicDropAddr]= useState({ pick:'', drop:'' })
  const [locations,setLocations]=useState({pickLocation:{lat:0,long:0},dropLocation:{lat:0,long:0} })
  

 
  const getData = async () => {
     const options={
      input:pick?picDropAddr.pick:picDropAddr.drop,
      type:'geocode',
      location: { lat: 29.4727, long: 77.7085 },
      radius: 5000,
      key:'AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us',
      token:'abcd1234-5678-90ab-cdef-1234567890ab'
     }
  const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${options.input}&key=${options.key}&types=${options.type}
  &components=country:in&location=${options.location.lat},${options.location.long}&radius=${options.radius}&language=en&sessiontoken=${options.token}`
    if (pick?picDropAddr.pick.length >= 3:picDropAddr.drop.length >= 3){
      try {
        const res = await axios(
           {
            method:'get',
            url:url,
           }
        )
        pick?setPredictions(res.data.predictions):setPredictions2(res.data.predictions)
      } catch (error) {
        console.error(error)}}
      
      }

    const getLatLong = async (placeId) => {
        const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us`);
        const response= await res.json()
        pick?setLocations({...locations,pickLocation:response.result.geometry.location}):setLocations({...locations,dropLocation:response.result.geometry.location})
      };
  
useEffect(() => {getData()},[picDropAddr])
useEffect(()=>{
  Geolocation.getCurrentPosition((info) =>{setLocations({...locations,pickLocation:{lat:info.coords.latitude,long:info.coords.longitude}})})},[])
 
if(
locations.dropLocation.lat!==0 & locations.dropLocation.long!==0){
  navigation.navigate('Routes',locations)
}


  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',backgroundColor:'#fff',padding:10,paddingLeft:20}}> 
           <Icon name="long-arrow-left" color="#000" size={25} />
           <Text style={{fontSize:20,marginLeft:20}}>{pick?'Pickup':'Drop'}</Text>
      </View>
        <View style={{padding:10,margin:15,marginBottom:5,backgroundColor:'#ffff',borderRadius:15,gap:15}} >
          <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#ccc',borderRadius:5,padding:5,gap:5}}> 
             <Text style={{position:'absolute',top:-15,left:15,fontSize:15,fontWeight:'bold'}}> Pickup Location</Text>
            <Icon name="long-arrow-left" color="" size={15} />
            <TextInput onFocus={()=>{setPick(true)}} placeholder='Current Location' style={{backgroundColor:'#fff',flex:1,height:40,borderRadius:5}} 
           onChangeText={(e)=>{setPicDropAddr( {...picDropAddr,pick:e} )}} /> 
          </View> 

          <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#ccc',borderRadius:5,padding:5,gap:5}}> 
             <Text style={{position:'absolute',top:-15,left:15,fontSize:15,fontWeight:'bold'}}> Pickup Location</Text>
            <Icon name="long-arrow-left" color="" size={15} />
            <TextInput autoFocus={true} onFocus={()=>{setPick(false)}} placeholder='Drop Location' style={{backgroundColor:'#fff',flex:1,height:40,borderRadius:5}} 
            onChangeText={(e)=>{setPicDropAddr( {...picDropAddr,drop:e} )}} /> 
          </View> 

      </View>

      <TouchableOpacity  style={{alignItems:'center',alignSelf:'flex-start',marginLeft:20,marginBottom:5}}>
        <Text style={{backgroundColor:'#fff',fontSize:14,borderRadius:5,padding:5}}>Choos on map</Text>
      </TouchableOpacity>

      <View style={{backgroundColor:'#eeae',flex:1,padding:5,gap:5}}>
        {
          pick?predictions.map((item,index) =>
              <View key={index}  style={{backgroundColor:'#fff',paddingVertical:2}}>
                 <TouchableOpacity onPress={() => {getLatLong(item.place_id)}} style={{flexDirection:'row',backgroundColor:'#ccc',alignItems:'center',gap:10}}>
                    <Icon name="map-marker" style={{marginLeft:10}} color="#000" size={25} />
                     <View style={{}}>
                      <Text style={{fontSize:18,color:'#000',}}>{item.structured_formatting.main_text}</Text>
                      <Text style={{fontSize:13,color:'#000',}}>{item.description}</Text>
                     </View>
                </TouchableOpacity>
              </View>
          ):
          predictions2.map((item,index) =>
            <View key={index}  style={{backgroundColor:'#fff',paddingVertical:2}}>
               <TouchableOpacity  onPress={() => {getLatLong(item.place_id)}} style={{flexDirection:'row',backgroundColor:'#ccc',alignItems:'center',gap:10}}>
                  <Icon name="map-marker" style={{marginLeft:10}} color="#000" size={25} />
                   <View style={{}}>
                    <Text style={{fontSize:18,color:'#000',}}>{item.structured_formatting.main_text}</Text>
                    <Text style={{fontSize:13,color:'#000',}}>{item.description}</Text>
                   </View>
              </TouchableOpacity>
            </View>
        )
        }
      </View>
    </View>
  )
}

export default AutoComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical:10,
    backgroundColor:'#ccc'   
  },
  text: {
    color: '#333',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})
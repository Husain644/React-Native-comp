import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from "react-native";
import React,{useState,useEffect} from "react";
import Geolocation from "@react-native-community/geolocation";
import Geocoder from "react-native-geocoding";
import axios from "axios";

const PlaceAutoComplete = () => {
    const [name,setName]=useState();
    const [type,setType]=useState('atm');
    const [location,setLocation]=useState(null);
    const [data,setData]=useState([]);
    Geocoder.init("AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us");
    const typeOptions=['atm','bank','hospitals','schools','accounting', 'airport', 'amusement_park', 'aquarium', 'art_gallery']

    const getData = async () => {
        const options={
         input:'rewari',
         type:'geocode',
         location: { lat: 29.4727, lng: 77.7085 },
         radius: 5000,
         key:'AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us',
         token:'abcd1234-5678-90ab-cdef-1234567890ab'
        }
     const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${options.input}&key=${options.key}&types=${options.type}
     &components=country:in&location=${options.location.lat},${options.location.lng}&radius=${options.radius}&language=en&sessiontoken=${options.token}`
         try {
           const res = await axios(
              {
               method:'get',
               url:url,
              }
           )
          console.log(res.data)
         } catch (error) {
           console.error(error)}    
         }


         const CurrentLoc=()=>{
          Geolocation.getCurrentPosition(async (info) =>{
            const resp=await Geocoder.from(info.coords.latitude,info.coords.longitude);
            
          })};
        
        useEffect(()=>{CurrentLoc();getData()},[]);
  return (
    <View style={styles.container}>
       <View style={{}}>
       </View>
      <ScrollView horizontal indicatorStyle={{color:'black'}}
       contentContainerStyle={styles.optionsContainer}>
        {typeOptions.map((item,index)=>{
          return(
            <TouchableOpacity onPress={()=>{setType(item)}} key={index} 
                  style={[styles.optionItem,{backgroundColor:type===item?'#b1afaf':'#fff'}]}>
                  <Text style={{fontSize:16,color:'#000',textAlign:'center'}}>{item}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
     <Text style={styles.heading}>{type}</Text>
    </View>
  );
};

export default PlaceAutoComplete;

const styles = StyleSheet.create({
    container:{
      padding:5
    },
    heading:{
      fontSize:25,
      color:'#000',
      textAlign:'center',
      marginTop:10,
      color:'#2d0fd8aa',
      fontStyle:'italic',
      textTransform:'capitalize',
      borderBottomWidth:1 
    },
    optionsContainer:{
      flexDirection:'row',
      gap:10,
      alignItems:'center',
      paddingHorizontal:10,
      backgroundColor:'#fff',
      padding:5
    },
    optionItem:{
      borderRadius:10,
      minWidth:70,
      padding:5,
      borderWidth:1,
      
    }
});

import { useState,useEffect } from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Google_map_api_key} from "react-native-dotenv"
import { useNavigation } from '@react-navigation/native';

const GooglePlacesInput = ({moveTo}) => {
  const [pickup,setPickup]=useState({lat:0,long:0})
  const [drop,setDrop]=useState({lat:0,long:0})
  
  useEffect(()=>{},[])
  const navigation=useNavigation()
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Map')}}>
        <Icon name='long-arrow-left' size={40} color='black' />
      </TouchableOpacity>
       
        <Text style={{fontSize:20,fontWeight:'bold'}}>Pickup</Text>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.droparrow}>
          <Icon name='long-arrow-down' size={40} color='blue' />
        </View>
        <View style={styles.inputInner}>
        <GooglePlacesAutocomplete
          styles={mapStyles1}
          minLength={2}
          fetchDetails={false}
          placeholder='Pickup'
          onPress={(data, details = null) => {moveTo(details?.geometry?.location.lat,details?.geometry?.location.lng)}}
          query={{ key: Google_map_api_key,  language: 'en',}}
          onFail={(error)=>{console.log(error)}}
          currentLocation={false}
          enablePoweredByContainer={false}
          />
          <GooglePlacesAutocomplete
          styles={mapStyles2}
          minLength={2}
          fetchDetails={false}
          placeholder='Drop'
          onPress={(data, details = null) => {moveTo(details?.geometry?.location.lat,details?.geometry?.location.lng)}}
          query={{ key: Google_map_api_key,  language: 'en',}}
          onFail={(error)=>{console.log(error)}}
          currentLocation={false}
          enablePoweredByContainer={false}
          />
            </View>
      </View>
    </View>
  )
};

export default GooglePlacesInput;
const styles = StyleSheet.create({
  containerWrapper:{
    flex:1,
    backgroundColor:'#ccc',
    padding:10,
    alignItems: 'center',
  }, 
   header:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    padding:10,
    gap:30,
    width:'100%'
  },
  inputWrapper:{
    flexDirection:'row',
    marginTop:5,
    height:175,
    width:'100%',
    alignItems:'center',
    borderRadius:15,
    backgroundColor:'pink',    
  },
  droparrow:{
  height:'50%',
  justifyContent:'center',
  },
  icon:{
  },
  inputInner:{
    flex:1,
    backgroundColor:'#60f399',
    padding:10,
    position:'relative'
  }
})

const mapStyles1 = StyleSheet.create({
  container: {
    maxHeight:60,
    backgroundColor:'red',
    padding:10,
    marginTop:5,
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
  },
  poweredContainer: {
   display:'flex'
  
  },
  powered: {},
  listView: {
    position:'absolute',
    top:135,
    width:340,
  
  },
  row: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
})

const mapStyles2 = StyleSheet.create({
  container: {
    maxHeight:60,
    backgroundColor:'red',
    padding:10,
    marginTop:5,
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
  },
  poweredContainer: {
   display:'flex'
  
  },
  powered: {},
  listView: {
    position:'absolute',
    top:65,
    height:400,
    width:340,
  },
  row: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
})


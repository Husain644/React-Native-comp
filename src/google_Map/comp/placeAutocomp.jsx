import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Google_map_api_key} from "react-native-dotenv"
import { View,Text,TextInput } from 'react-native';
import RenderList from './renderList';
navigator.geolocation = require('@react-native-community/geolocation');
import { MapStyle } from './data';
import RightBtn from './rightBtn';


const GooglePlacesInput2 = (text) => { 
  const ref = useRef();
  useEffect(() => {
    ref.current?.setAddressText(text);
  }, [text]);
console.log('-------',ref.current?.getAddressText());
console.log(ref.current)
  return (<>
      <GooglePlacesAutocomplete
      ref={ref}
      fetchDetails={true}
      minLength={3}
      numberOfLines={1}
      debounce={100}
      placeholder='Drop Location'
      onPress={(data, details = null) => { console.log(data ,'***********',details)}}
      query={{key: Google_map_api_key,language: 'en',components: 'country:in',}}
      GooglePlacesSearchQuery={{rankby: "distance"}}
      enablePoweredByContainer={false}
      renderRow={(data,index)=>{return(<RenderList data={data}/>)}}
      styles={MapStyle}
      renderRightButton={()=>{return(<RightBtn/>)}}
    />
  </>

  );
};

export default GooglePlacesInput2;
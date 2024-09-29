import { useState } from 'react';
import {View} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Google_map_api_key} from "react-native-dotenv"

const GooglePlacesInput = ({moveTo}) => {

  
  return (
    <View style={{flex:0.5, zIndex:1}} >
    <GooglePlacesAutocomplete
  
      fetchDetails={true}
      placeholder='Search anywhere'
      onPress={(data, details = null) => {
        moveTo(details?.geometry?.location.lat,details?.geometry?.location.lng)
          
      }}
      query={{
        key: Google_map_api_key,
        language: 'en',
      }}
      onFail={(error)=>{console.log(error)}}
    />
    </View>
  );
};

export default GooglePlacesInput;
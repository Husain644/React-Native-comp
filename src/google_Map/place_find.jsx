import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Google_map_api_key} from "react-native-dotenv"

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: Google_map_api_key,
        language: 'en',
      }}
      onFail={(error)=>{console.log(error)}}
    />
  );
};

export default GooglePlacesInput;
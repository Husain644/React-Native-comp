import Geolocation from '@react-native-community/geolocation';

export const getLocation=()=>{
  
  try{
    Geolocation.getCurrentPosition((val)=>console.log(val))
    console.log(res)
    return {latitude:'5.556',longitude:'3.5656'}
  }
  catch(e){console.log(e.error)}

}
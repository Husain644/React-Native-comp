import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { React, useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios'

const AutoComplete = () => {
  const [predictions, setPredictions] = useState([1])
  const [pick, setPick]= useState(true)
  const [picDropAddr, setPicDropAddr]= useState({ pick:'current Location', drop:'' })
  console.log(predictions)
 
  const getData = async () => {

     const options={
      input:'myhaveli',
      type:'geocode',
      location: { lat: 29.4727, lng: 77.7085 },
      radius: 5000,
      key:'AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us',
      token:'abcd1234-5678-90ab-cdef-1234567890ab'
     }
  const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${options.input}&key=${options.key}
            &types=${options.type}&components=country:in&location=${options.location.lat},${options.location.lng}
            &radius=${options.radius}&language=en&sessiontoken=${options.token}`
    if (true){
      try {
        const res = await axios(
           {
            method:'get',
            url:url,
           }
        )
        setPredictions(res.data.predictions)
      } catch (error) {
        console.error(error)}}}

useEffect(() => {},[])

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
            <TextInput placeholder='Current Location' style={{backgroundColor:'#fff',flex:1,height:40,borderRadius:5}} 
            onTextInput={(e)=>{setPicDropAddr( {...picDropAddr,pick:e} )}} /> 
          </View> 

          <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#ccc',borderRadius:5,padding:5,gap:5}}> 
             <Text style={{position:'absolute',top:-15,left:15,fontSize:15,fontWeight:'bold'}}> Pickup Location</Text>
            <Icon name="long-arrow-left" color="" size={15} />
            <TextInput placeholder='Drop Location' style={{backgroundColor:'#fff',flex:1,height:40,borderRadius:5}} 
            onTextInput={(e)=>{setPicDropAddr( {...picDropAddr,drop:e} )}} /> 
          </View> 

      </View>

      <TouchableOpacity onPress={getData} style={{alignItems:'center',alignSelf:'flex-start',marginLeft:20,marginBottom:5}}>
        <Text style={{backgroundColor:'#fff',fontSize:14,borderRadius:5,padding:5}}>Choos on map</Text>
      </TouchableOpacity>

      <View style={{backgroundColor:'#fff',flex:1,padding:5}}>
        {
          predictions.map((item,index) =>
              <TouchableOpacity key={index} onPress={() => console.log(item)}>
                <View style={{flexDirection:'row',backgroundColor:'#ccc'}}>
                    <Icon name="map-marker" color="#000" size={25} />
                     <View>
                      <Text>{"location"}</Text>
                     <Text>{item.description}</Text>
                     </View>
                </View>
              </TouchableOpacity>
          )
        }
      </View>

    </View>
  )
}

export default AutoComplete

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
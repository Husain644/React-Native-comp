import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import {React,useEffect} from 'react'
import { useNavigation,CommonActions } from '@react-navigation/native'
import mapBg from './../../assets/images/map.png'


const MapSplash = () => { 
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Nav');
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Nav',
              params: {},
            }
          ],
        })
      );
    },2000)
  },[])
  return (
    <View style={{flex:1,backgroundColor:'#eaea',alignItems:'center',justifyContent:'center'}}>
    <ImageBackground source={mapBg}  resizeMode="contain"  
    style={{width:'90%',height:300,borderRadius:10,backgroundColor:'#fff',paddingVertical:10}}>
       <Text 
       style={{fontSize:30,fontFamily:'Roboto',color:'blue',fontWeight:'bold',textAlign:'center',top:-10,backgroundColor:'#fff'
       }}>Welcome to Rapido Map</Text>
    </ImageBackground>
    </View>
  )
}

export default MapSplash

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import {React,useEffect} from 'react'
import { useNavigation,CommonActions } from '@react-navigation/native'
import {Img} from './../../../../../assets/assets'

const Splash = () => {
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
    navigation.dispatch(
  CommonActions.reset({
    index: 0,
    routes: [{ name: 'home'}],
  })
);
navigation.navigate('home');
},2000)
  },[])
  return (
    <View style={{flex:1,backgroundColor:'#eaea',alignItems:'center',justifyContent:'center'}}>
    <ImageBackground source={Img.chick2}  resizeMode="cover"  
    style={{width:'90%',height:300,borderRadius:10,backgroundColor:'#fff',paddingVertical:10}}>
       <Text 
       style={{fontSize:30,fontFamily:'Roboto',color:'blue',
        fontWeight:'bold',textAlign:'center',top:-35,backgroundColor:'#fff'
       }}>Fresh To Home </Text>
    </ImageBackground>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
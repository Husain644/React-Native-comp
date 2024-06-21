import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
    console.log('hello')
  return (
  <View  style={styles.container}>
      <View style={styles.roter}>
      <Text style={[styles.txt,{color:'green'}]}>
        This is header 
      </Text>
      </View>
      <Text style={{color:'blue',fontSize:20,marginBottom:50,width:'90%',backgroundColor:'pink',padding:5}}>
        Hii my name is husain. this is hello world app in React Native. 
        this app created by me on 15/06/2024
      </Text>
      <Text style={styles.txt}>Hello World App React Native!..</Text>
  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height:'100%',
      width:'100%',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccc',
      position:'relative'
    },
    txt:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        width:'90%',
        textAlign:'center',
        backgroundColor:'#fff',
        borderRadius:5
    },
    roter:{
        width:'100%',
        height:100,
        backgroundColor:'red',
        marginTop:5,
        marginBottom:50,
        position:'absolute',
        top:0,
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }
   

  });
export default Home;


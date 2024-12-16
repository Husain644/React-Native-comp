import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import TrackPlayer,{ State } from 'react-native-track-player';
import { musicData } from './audio/music_data';


const music = () => {
   const setup = async() => {
    try{
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(musicData)
    }
    catch(error){
      console.log(error)
    }
     
   }

  return (
    <View>
      <Text>music155</Text>
      <Button title="Play" onPress={() => {}} /><Text></Text>
      <Button title="Pouse" onPress={() =>{setup()}} /><Text></Text>
    </View> 
  )
}

export default music

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,Button } from 'react-native'
import { useEffect } from 'react';
import TrackPlayer,{ State } from 'react-native-track-player';
import { musicData } from './audio/music_data';


const Track = () => {
   const setup = async() => {
    try{
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(musicData)
    }
    catch(error){
      console.log(error)}}
      useEffect(()=>{setup()},[])
  return (
    <View>
      <Text>music155</Text>
      <Button title="Play" onPress={() => {TrackPlayer.play()}} /><Text></Text>
      <Button title="Pouse" onPress={() =>{TrackPlayer.stop()}} /><Text></Text>
    </View> 
  )
}

export default Track

const styles = StyleSheet.create({})
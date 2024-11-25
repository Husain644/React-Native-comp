import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Sound from 'react-native-sound'


const music = () => {

  Sound.setCategory('Playback');
 
  var ding = new Sound('content://media/external/audio/media/40854', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // when loaded successfully
    console.log('duration in seconds:');
  })
  
 

  return (
    <View>
      <Text>music155</Text>
      <Button title="Play" onPress={() => {ding.play()}} /><Text></Text>
      <Button title="Pouse" onPress={() => {ding.pause()}} /><Text></Text>

 
    </View>
  )
}

export default music

const styles = StyleSheet.create({})
import { Button, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import {musicData} from './audio/music_data.jsx'
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const Sound_player = () => {
  const[index,setIndex]=useState(0);
  const soundRef = useRef(null);
  
  useEffect(() => {
    // Load only once
    const sound = new Sound(musicData[0].url, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
      console.log('Sound loaded');
    });
    sound.play();
    
    soundRef.current = sound;
    return () => {
      // Release when unmount
      if (soundRef.current) {
        soundRef.current.release();
      }
    };
  }, [musicData]);
 const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play((success) => {
        if (!success) console.log('Playback failed');
      });
    }
  };
  const playNext=()=>{
    if(soundRef.current){
      soundRef.current.stop(() => {
        soundRef.current.release();
        const nextIndex = index + 1;
        const nextSound = new Sound(musicData[nextIndex].url, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('Failed to load sound', error);
            return;
          }
          console.log('Sound loaded');
          nextSound.play((success) => {
            if (!success) console.log('Playback failed');
          });
        });
        soundRef.current = nextSound;
        setIndex(nextIndex);
      }
      );
    }
  }

return (
    <View style={{margin:10,backgroundColor:'#fff',padding:10}}>
      <Text style={{textAlign:'center',fontSize:20,width:'100%',borderBottomWidth:1}}>Sound_player</Text>
     <View style={styles.albumWraper}>
       <Image source={musicData[index].album} style={styles.album}/>
     </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.btn} onPress={()=>{
          if(musicData.length > index+1 & index > 0){setIndex(index-1)}
          else{setIndex(0)}
        }}>
          <Text style={styles.btnTxt}>Prev</Text>
       </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={playSound}>
          <Text style={styles.btnTxt}>Play</Text>
       </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>{soundRef.current.pause()}}>
          <Text style={styles.btnTxt}>Stop</Text>
       </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn} onPress={playNext}>
          <Text style={styles.btnTxt}>Next</Text>
       </TouchableOpacity>
       </View>
       <TouchableOpacity onPress={()=>{
         console.log({
  'Lodeded':soundRef.current.isLoaded(),
  'duration':soundRef.current.getDuration(),
  'channels':soundRef.current.getNumberOfChannels(),
  'volume':soundRef.current.getVolume(),
  'current time':soundRef.current.getCurrentTime((seconds)=>{
    console.log('at '+seconds)
  }),
  'isPlaying':soundRef.current.isPlaying(),
  // 'is_paused':sound.isPaused(),
  // 'is_stopped':sound.isStopped(),
  // 'file_name':sound.getFilename(),
  // 'file_path':sound.getFilePath()
 })
       }} style={[styles.btnStyle,{width:120,marginTop:50,backgroundColor:'#333'}]} activeOpacity={.4}>
           <Text style={{fontSize:20,color:'#f0e9e9',padding:5,textAline:'center',fontWaight:'bold'}}>
           Hello
           </Text>
       </TouchableOpacity>
    </View>
  )
}

export default Sound_player;
const styles = StyleSheet.create({
  albumWraper:{
    alignItems:'center',
    justifyContent:'center'
  },
  album:{
    width:150,
    height:150,
    borderRadius:10
  },
  btn:{
    backgroundColor:'#eaea',
    minWidth:50,
    padding:5,
    borderRadius:10,
  },
  btnTxt:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'600'
  }
});
import { StyleSheet, Text, View,Button } from 'react-native'
import {React,useEffect,useState} from 'react'
import RNFS from 'react-native-fs'
import Sound from 'react-native-sound'
import { requestReadPermission,requestWritePermission } from '../../permissions'

const AudioHome = () => {

  const path=RNFS.ExternalStorageDirectoryPath
  const [allData,setAlldata]=useState([])
  const writeDirectory=async()=>{
    try{    const newDir = await RNFS.mkdir(path + '/newDir');
      console.log('Directory created: ', newDir);}
    catch(e){ console.log(e); }

  }
  const readDirectory=()=>{
    RNFS.readDir(path)
     .then((res) => {
        setAlldata(res[2].path)
        console.log(res[2].path.split('.').pop())
        
      })
     .catch((err) => {
        console.log('Error reading directory', err);
      })
  }

  const sound=new Sound(`file:${allData}`,Sound.MAIN_BUNDLE,(err)=>{console.log(err)})
const playSound=()=>{
  if(sound.isLoaded() & !sound.isPlaying()){
    console.log('sound is loaded')
    sound.play((success) => {console.log(success)})
  } 
}
  useEffect(()=>{
    requestReadPermission()
    requestWritePermission()
  },[])
  return (
    <View style={{gap:10}}>
      <Text>AudioHome</Text>
      <Button title="Read Directory" onPress={readDirectory}/>
      <Button title="Write Directory" onPress={writeDirectory}/>
      <Button title="Play Sound" onPress={playSound}/>
      <Button title="stop Sound" onPress={()=>{sound.pause()}}/>
      <Button title="is plaing" onPress={()=>{
        console.log(sound.isPlaying(),sound.getPitch(),sound.getVolume(),
        sound.getCurrentTime((sec,p)=>{console.log(sec,p)}));
        }}/>
    </View>
  )
}

export default AudioHome;

const styles = StyleSheet.create({})
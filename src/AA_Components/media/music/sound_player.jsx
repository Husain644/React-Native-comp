import { Button, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {musicData} from './audio/music_data.jsx'
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const Sound_player = () => {
  const[index,setIndex]=useState(0);
 const sound=new Sound(musicData[1].url, Sound.MAIN_BUNDLE,(error)=>{
  if(error){console.log(error)}});
  
console.log(musicData.length > index)
 

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

        <TouchableOpacity style={styles.btn} onPress={()=>{sound.play()}}>
          <Text style={styles.btnTxt}>Play</Text>
       </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>{sound.stop()}}>
          <Text style={styles.btnTxt}>Stop</Text>
       </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn} onPress={()=>{
          if(musicData.length > index+1){setIndex(index+1)}
          else{setIndex(0)}
          }}>
          <Text style={styles.btnTxt}>Next</Text>
       </TouchableOpacity>
       </View>
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
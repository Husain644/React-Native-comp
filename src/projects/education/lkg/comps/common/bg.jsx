import { StyleSheet, Text, View,StatusBar,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const Bg = ({ children }) => {
 const navigation=useNavigation();
 const [mute,setMute]=useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{padding:10}} onPress={()=>{navigation.goBack()}}>
            <Icon1 name="long-arrow-alt-left" color="red" size={45}/>
        </TouchableOpacity>
          <TouchableOpacity style={{padding:10}} onPress={()=>{setMute(!mute)}}>
            <Icon1 name={mute?"volume-mute":"volume-up"} color="red" size={45}/>
        </TouchableOpacity>
      </View>
        <Video
        muted={mute}        // 🔇 Toggle this to mute/unmute
        repeat={true}
        source={{ uri:require('../../assets/videos/bg1.mp4')}} // Local or remote
        style={styles.vid}
        controls={false} // show play/pause etc.
        resizeMode="cover"
      />
       <StatusBar hidden={true} />
        {children}
    </View>
  )
}

export default Bg;

const styles = StyleSheet.create({
  mainContainer:{
     flex:1},
  vid:{ 
    position:'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    zIndex:-10  
   }
});
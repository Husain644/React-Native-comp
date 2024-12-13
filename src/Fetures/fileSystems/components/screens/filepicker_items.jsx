import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native'
import {React} from 'react'
import { useRoute } from '@react-navigation/native'
import Video from 'react-native-video';
import TrackPlayer from 'react-native-track-player';

import FileViewer from "react-native-file-viewer";

const FilePickerItems = () => {
  const route = useRoute();
  const data = route.params.data
  console.log(data[0].uri)
  return (
    <View>
      <Text>FilePickerItems</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={RenderComp}
      />
    </View>
  )
}
export default FilePickerItems


const RenderComp = ({ item, index }) => {
 
  console.log(item.type)

  if (item.type.split('/')[0] === 'video') {
    return (
      <Video   
      source={{uri:item.uri}}           // the video file
      paused={false}                     // make it start    
      style={{width:'100%',height:350}}  // any style you want
      repeat={true}
      />)
  }
  else if (item.type.split('/')[0] === 'image') {
    return (
      <View style={{padding: 5, borderBottomWidth: 2, borderBottomColor: '#999' }}>
        <Image source={{uri:item.uri}} style={{ width: '100%', height: 350 }} resizeMode="contain" />
        <Text style={{ fontSize: 12, height: 12, bottom: 0, left: 10, width: '95%' }}>{item.name}</Text>
      </View>)
  }
  else if (item.type.split('/')[0] === 'audio'){
    
      TrackPlayer.setupPlayer();
      TrackPlayer.add([{
          id: item.name,
          url: item.uri,
          title: 'Track Title',
          artist: 'Track Artist',
      }])
    return(
    <View style={{}}>
         <TouchableOpacity onPress={async()=>{await TrackPlayer.play()}} style={{height:40,borderBottomWidth:2,marginBottom:2}}>
          <Text style={{height:14,fontSize:12,width:'100%',overflow:'scroll'}}>{item.uri}</Text>
          <Text style={{fontSize:15,paddingLeft:15}}>play</Text></TouchableOpacity>       
    </View>)
  }
  else if(item.type.split('/')[0] === 'application') {
     const open=()=>{
      const path = FileViewer.open(item.uri).then(() =>{console.log('file open')}).catch((error) => {console.log(error)});
    }
    return(
       <TouchableOpacity onPress={()=>{open()}}>
        <Text style={{fontSize:18,color:'#000'}}>open document</Text>
       </TouchableOpacity>
    )}
  return (<Text style={{ fontSize: 25, padding: 20 }}>{'undefined types'}{item.type}</Text>)
}


const styles = StyleSheet.create({})
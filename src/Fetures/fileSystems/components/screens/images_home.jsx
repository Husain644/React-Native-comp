import { StyleSheet, Text, View,Button } from 'react-native'
import {React,useEffect,useState} from 'react'
import RNFS from 'react-native-fs'
import { requestReadPermission,requestWritePermission } from '../../permissions'
import { getAllFiles } from '../func'

const ImagesHome = () => {
  const path=RNFS.ExternalStorageDirectoryPath
  const  path2=RNFS.PicturesDirectoryPath
  const [allData,setAlldata]=useState([])
  const [allPhotos,setPhotos] = useState([])

  const lst=[]
  const recur=async(i)=>{     //i is must be an object  
      if(i.isFile()){
        const ext = i.path.split('.').pop()
        if(ext=mp3){lst.push(i.path);console.log(i.name)}
        
      }
      else if(i.isDirectory()){
          dirs=await RNFS.readDir(i.path)
          dirs.forEach((items)=>{recur(items)})
      }}

const getAllImages=()=>{
  console.log(lst)
}

const readDirectory=()=>{
    RNFS.readDir(`${path}`)   //take a path  --->>> '/emmulated/storage/0/gallery/images'
     .then((res) => {
      res.forEach((items)=>{recur(items)})    // return a list. like --[{name:'gallery',isFile:()=>false,isDirectory:()=>true,path:'/emmulated/storage/0/gallery/images},{}]
      console.log(res.length) 
      }).catch((err) => {
        console.log('Error reading directory', err);
      })
}

  useEffect(()=>{
    requestReadPermission()
    requestWritePermission()
  },[])

  return (
    <View style={{gap:10}}>
      <Text>ImagesHome</Text>
      <Button title="Read Directory" onPress={readDirectory}/>
      <Button title="get all files" onPress={getAllImages}/>
      <Button title='all files' onPress={()=>{console.log(allData.length)}}/> 
      <Button title='all photos' onPress={()=>{console.log(lst.length)}}/>  
    </View>
  )
}

export default ImagesHome;

const styles = StyleSheet.create({})
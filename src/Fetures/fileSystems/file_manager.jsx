import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {React,useEffect} from 'react'
import FilePicker from './fileSystem'
import { requestReadPermission,requestWritePermission } from './permissions'
import { NavigationContainer,useNavigation  } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ImagesHome from './components/screens/images_home'
import AudioHome from './components/screens/audio_home'
import VideosHome from './components/screens/videos_home'
import DocHome from './components/screens/doc_home'
import FilePickerItems from './components/screens/filepicker_items';




const FileManager = () => {
  const Stack=createStackNavigator()
  const otions={headerShown: true}
  return (
     <NavigationContainer>
       <Stack.Navigator  initialRouteName= {FileManagerHome}  >
          <Stack.Screen name="FileManagerHome" component={FileManagerHome} options={{headerShown:false}} />
          <Stack.Screen name="allimages" component={ImagesHome} options={otions} />
          <Stack.Screen name="allvideos" component={VideosHome} options={otions} />
          <Stack.Screen name="allaudios" component={AudioHome} options={otions} />
          <Stack.Screen name="alldocs" component={DocHome} options={otions} />
          <Stack.Screen name="filepickeritems" component={FilePickerItems} options={{headerShown:true}}/>
       </Stack.Navigator>
     </NavigationContainer>
 
  )
}

export default FileManager; 

const FileManagerHome=()=>{
  const navigation=useNavigation()

  const toScreen=(comp)=>{
    navigation.navigate(comp)
  }
  return(
    <View style={{padding:20,backgroundColor:'#eaea'}}>
      <FilePicker/> 
      <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'#000',marginTop:20}}>FileManager</Text>
      <TouchableOpacity onPress={()=>{toScreen('allimages')}} style={styles.navContainer}>
                       <Text style={styles.navTxt}>see all images</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{toScreen('allvideos')}} style={styles.navContainer}>
                       <Text style={styles.navTxt}>see all videos</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{toScreen('allaudios')}} style={styles.navContainer}>
                       <Text style={styles.navTxt}>see all Audio</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{toScreen('alldocs')}} style={styles.navContainer}>
                       <Text style={styles.navTxt}>see all Doccuments</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navContainer:{
    marginTop:20,
    padding:10,
    backgroundColor:'#fff',
    borderRadius:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent:'center',
    alignItems:'center'
  },
navTxt:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000'
}
})
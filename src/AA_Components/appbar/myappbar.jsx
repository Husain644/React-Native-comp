import { StyleSheet, Text, TouchableHighlight,TouchableOpacity, View,Dimensions } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { H6 } from '../divider/heading';
import CustomInput from './utility';
import { SmallModal } from './utility';
import Animated, { useSharedValue,useAnimatedStyle,withTiming } from 'react-native-reanimated';


const MyappBar = () => {
    const [showMenu,setShowMenu]=useState(false)
    const val=useSharedValue(0) 
    const menuWidth= useAnimatedStyle(()=>{return {width:val.value}})
    const handleMenu=()=>{
      if (showMenu){
        val.value=withTiming(0,{duration:500})
        setShowMenu(false)
      }
      else {
        val.value=withTiming(250,{duration:500})
        setShowMenu(true)
      }
    }
  return (
    <View style={{height:400,paddingVertical:5}}>
     <H6 txt='simple app bar'/>
     <View style={{height:200}}>
     <View 
        style={{width:'100%',height:60,backgroundColor:'skyblue',alignItems:'center',justifyContent:'space-between',
        flexDirection:'row',paddingHorizontal:10
       }}> 
        <TouchableHighlight onPress={()=>handleMenu()}>
        <Icon name={showMenu?"close":"bars"} size={30} color="#000" style={{}} />
      </TouchableHighlight>
      <Text style={{fontSize:20, fontWeight:'bold',color:'red'}}>My App</Text>
      <Icon name="search" size={30} color="#000" style={{}} />
      <Icon name="envelope-o" size={30} color="#000" style={{}} />
      </View> 
      <Animated.View  
      style={[{backgroundColor:'#eaea',flex:1,zIndex:3,borderRightWidth:1},menuWidth]}>
     
      </Animated.View>
      <TouchableOpacity onPress={handleMenu}
      style={{display:showMenu?'flex':'none',position:'absolute',height:'100%',width:'100%',backgroundColor:'#000',
     opacity:0.3, zIndex:2}}>
      </TouchableOpacity>
     </View>


      {/*  second app bar  */}
      
      <H6 txt='app bar with search option'/>
      <View 
      style={{width:'100%',height:60,backgroundColor:'skyblue',alignItems:'center',justifyContent:'space-between',
        flexDirection:'row',paddingHorizontal:10
       }}> 
      <TouchableHighlight onPress={()=>{}}>
        <Icon name="bars" size={30} color="#000" style={{}} />
      </TouchableHighlight>
      <Text style={{fontSize:20, fontWeight:'bold',color:'red'}}>My App</Text>
        <CustomInput placeholder='search...'/>
        <View style={{height:'100%',width:40,alignItems:'flex-end',justifyContent:'space-between',padding:5}}>
        <SmallModal />
        <Icon name="envelope-o" size={20} color="#000" style={{}} />
        </View>
      </View>
    </View>
  )
}

export default MyappBar

const styles = StyleSheet.create({
    
})
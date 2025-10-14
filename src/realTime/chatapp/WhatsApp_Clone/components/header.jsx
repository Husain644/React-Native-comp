import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { clearTokens } from './whatsappUtils.js';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [menu,setShowMenu]=useState(false);
   const navigation=useNavigation()

  return (
    <View style={styles.container} onPress={()=>{setShowMenu(false)}}>
        <Text style={styles.whtasapp}>WhatsApp</Text>
        <View style={styles.iconsWrapper}>
             <TouchableOpacity onPress={()=>{}} style={[styles.btnStyle]} activeOpacity={.4}>
                 <Icon name="qrcode" style={{}} size={22} color="#999"  />
             </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{}} style={[styles.btnStyle]} activeOpacity={.4}>
                     <Icon name="camera" style={{}} size={22} color="#999"  />
             </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setShowMenu(!menu)}} style={[styles.btnStyle]} activeOpacity={.4}>
                      <Icon name="ellipsis-v" style={{}} size={22} color="#999"  />
             </TouchableOpacity>
              { menu && 
              <View style={{position:'absolute',top:40,right:-20,backgroundColor:'#fff',elevation:5,width:200,alignItems:'center',
              borderRadius:5,paddingVertical:5,zIndex:99}}>
              <View style={{backgroundColor:'#fff',width:'90%',gap:10}}>
                   <TouchableOpacity onPress={()=>{setShowMenu(false)}} style={{paddingHorizontal:15,flexDirection:'row',gap:10}} activeOpacity={.4}>
                    <Icon name="plus"  size={18} color="#add8e6"  />
                    <Text style={{fontSize:16,color:'#000'}}>create new group</Text>
                </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{
                      clearTokens();setShowMenu(false);
                       navigation.replace('login')
                      }} style={{paddingHorizontal:15,flexDirection:'row',gap:10}} activeOpacity={.4}>
                    <Icon name="power-off"  size={20} color="#ff0000"  />
                    <Text style={{fontSize:16,color:'#000'}}>LogOut</Text>
                </TouchableOpacity>
              </View>
              </View>
              }
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  whtasapp:{
    fontSize:25,
    color:'#18a518',
    fontWeight:'500',

  },
   container:{
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#ccc',
    paddingHorizontal:25,
    position:'relative',
    zIndex:99,
   },
   iconsWrapper:{
    flexDirection:'row',
    gap:10
   },
   btnStyle:{
    padding:10
   }
})
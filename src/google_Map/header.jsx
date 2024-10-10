import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
    const navigation = useNavigation()
  return (
    <>
    <View style={[styles.conainer]} > 
    <Icon name="align-justify" size={30} color="#000" /> 
    <TouchableOpacity 
     style={[styles.toMap]}  
     onPress={()=>navigation.navigate("Place")}>
     <Icon name="search" size={20} color="#000" />
      <Text style={{color:'#999'}}>
        Where are you going ?
      </Text>
     </TouchableOpacity>
    </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    conainer:{      
           paddingHorizontal:15,
           paddingVertical:10,
           backgroundColor:'#ccc',
           flexDirection:'row',
           width:'100%',
           justifyContent:'space-between'
    },
    menu:{
         
    },
    toMap:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        width:'80%',
        backgroundColor:'#fff',
        borderRadius:10,
        paddingHorizontal:10
    }
})
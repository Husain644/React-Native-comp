import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ChkboxNew = () => {
    const [chacked,setChecked]=useState(false)
  return (
    <View style={{padding:15,alignItems:'center'}}>
      <Text>ChkboxNew</Text>
       <TouchableOpacity onPress={()=>setChecked(!chacked)} 
       style={{backgroundColor:'#fff',borderRadius:5,margin:10,height:30,width:30,borderWidth:1,
            justifyContent:'center',alignItems:'center'}}>
            {chacked&&<Icon name={'check'} size={25} color={'#000'}/>}
        </TouchableOpacity>
        
    </View>
  )
}

export default ChkboxNew

const styles = StyleSheet.create({})
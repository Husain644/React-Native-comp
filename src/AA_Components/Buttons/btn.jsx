import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Btns = () => {
  return (
    <View style={styles.btnwrap}>

        <TouchableOpacity 
        style={{backgroundColor:'#ea4c89',paddingHorizontal:10,borderRadius:8,shadowColor: "#000",height:40, alignItems:'center',
                    justifyContent: 'center', shadowOffset:{width:0,height:9}, shadowOpacity:0.8,shadowRadius:3,elevation:10}}>
          <Text style={{textAlign:'center',fontSize:16,color:'#fff',fontWeight:'bold'}}>Button 1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={{backgroundColor:'#ccc',paddingHorizontal:10,borderRadius:8,shadowColor:"#000",height:45,display:'flex',flexDirection:'row',
            alignItems: 'center',justifyContent: 'center',gap:5,
        shadowOffset:{width:0,height:9},shadowOpacity:0.8,shadowRadius:3,elevation:10}}>
          <Text style={{textAlign:'center',fontSize:18,color:'#000',fontWeight:'bold'}}>Button 2</Text>
          <Icon style ={{}} name="send" size={20} color="#000" /> 
        </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'#fff',paddingHorizontal:10,borderRadius:8,shadowColor:"#000",height:45,display:'flex',flexDirection:'row',
            alignItems: 'center',justifyContent: 'center',gap:5,borderWidth:1,borderColor:'#ccc',
        shadowOffset:{width:0,height:9},shadowOpacity:0.8,shadowRadius:3,elevation:10}}>
          <Text style={{textAlign:'center',fontSize:16,color:'#000',fontWeight:'bold'}}>Button 2</Text>
          <Icon style ={{}} name="send" size={18} color="#000" /> 
        </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'#fff',paddingHorizontal:10,borderRadius:2,shadowColor:"#000",height:50,display:'flex',flexDirection:'row',
            alignItems: 'center',justifyContent: 'center',gap:5,borderWidth:1,borderColor:'#ccc',
        shadowOffset:{width:0,height:9},shadowOpacity:0.8,shadowRadius:3,elevation:10}}>
          <Text style={{textAlign:'center',fontSize:16,color:'#000',fontWeight:'bold'}}>Button 2</Text>
          <Icon style ={{}} name="send" size={18} color="#000" /> 
        </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'blue',paddingHorizontal:10,borderRadius:50,height:50,width:200,display:'flex',flexDirection:'row',
            alignItems: 'center',justifyContent: 'center',gap:5,borderWidth:1,borderColor:'#ccc',
            shadowColor:"red", shadowOffset:{width:0,height:9},shadowOpacity:0.8,shadowRadius:3,elevation:10}}>
          <Text style={{textAlign:'center',fontSize:16,color:'#fff',fontWeight:'bold'}}>Button 2</Text>
          <Icon style ={{}} name="send" size={18} color="#fff" /> 
        </TouchableOpacity>

       <Button style={{}} color="red"  title="simple btn" onPress={()=>{}}/>
       <Button style={{}} color="blue"  title="simple btn"/>
       <Button style={{}} color="#000" title="simple btn"/>
    </View>
  )
}

export default Btns

const styles = StyleSheet.create({
         btnwrap:{
            display:'flex',
             flexDirection: 'row',
             flexWrap: 'wrap',
             gap:20,
             padding:20,
             backgroundColor:'#bdf6f7',

         },
  
})
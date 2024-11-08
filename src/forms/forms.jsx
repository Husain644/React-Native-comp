import { StyleSheet, Text, View,TextInput } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FormData from './formData';
import DateTime from './date&timepicker/datetime';

const Forms = () => {

    const [focus,setFocus]=useState(0)
    const [data,setData]=useState({
      name:'Husain',
      email:'',
      password:'',
      confirmPassword:'',
      phone:'',
      address:'',
    })

 
  return (
    <View style={{padding:20,gap:20}}>
      <FormData/>
      {/* input1 start */}
      <View style={{borderWidth:1,borderRadius:10,flexDirection:'row',gap:4,alignItems:'center'}}>
        <Icon name="user-plus" size={20} style={{marginLeft:5
        }} 
        color="#000" />
        <TextInput style={{flex:1,padding:5}} placeholder='Name' placeholderTextColor='#999'/>
      </View>
      {/* input1 end */}

      {/* input2 start */}
        <View style={{borderWidth:1,borderRadius:10,flexDirection:'row',gap:4,alignItems:'center'}}>
          <Text style={{top:-12,left:12,position:'absolute', backgroundColor:'#fff',paddingHorizontal:5}}>enter your name</Text>
        <Icon name="user-plus" size={20} style={{marginLeft:5}}  color="#000" />
        <TextInput style={{flex:1,padding:5}} placeholder={focus===0?'Name':''} placeholderTextColor='#999'
      // value={data.name}
       onFocus={()=>{setFocus(1)}}
      //   onBlur={() => setFocus(0)}
        />
      </View>
      {/* input2 end */}

            {/* input3 start */}
        <View style={{borderBottomWidth:1,borderRadius:2,flexDirection:'row',gap:4,alignItems:'center',backgroundColor:'#ccc'}}>
        <Text style={{top:data.name.length>0?-18:focus===0?-18:10,left:12,position:'absolute', backgroundColor:'#fff',paddingHorizontal:5}}>enter your name</Text>
        <Icon name="user-plus" size={20} style={{marginLeft:5}}  color="#000" />
        <TextInput style={{flex:1,padding:5}} placeholder={focus===0?'Name':''} placeholderTextColor='#999'
      // value={data.name}
      onFocus={()=>{setFocus(2)}}
      onBlur={() => setFocus(0)}
      // 
        />
      </View>
      {/* input3 end */}
      
            {/* input4 start */}
            <View style={{borderBottomWidth:1,borderRadius:2,flexDirection:'row',gap:4,alignItems:'center',backgroundColor:'#ccc'}}>
        <Text style={{top:data.name.length>0?-18:focus===0?-18:10,left:5,position:'absolute', backgroundColor:'#fff',paddingHorizontal:5}}>enter your name</Text>
        <TextInput style={{flex:1,padding:5}} placeholder={focus===0?'Name':''} placeholderTextColor='#999'
      // value={data.name}
      onFocus={()=>{setFocus(2)}}
      onBlur={() => setFocus(0)}
       
        />
        <Icon name="user-plus" size={20} style={{marginRight:5}}  color="#000" />
      </View>
      {/* input4 end */}
        
        {/* input5 start */}
        <View style={{borderWidth:1,borderRadius:10,flexDirection:'row',gap:4,alignItems:'center',backgroundColor:'#fff'}}>
        <Text style={{top:data.name.length>0?-16:focus===0?-16:10,left:22,position:'absolute', backgroundColor:'#fff',paddingHorizontal:5}}>enter your name</Text>
        <Icon name="user-plus" size={20} style={{marginRight:5,position:'absolute',top:-15}}  color="#000" />
        <TextInput style={{flex:1,padding:10,textAlignVertical: 'top'}} multiline={true}    numberOfLines={8}   placeholder={focus===0?'Name':''} placeholderTextColor='#999'
      // value={data.name}
        //  onFocus={()=>{setFocus(2)}}
        // onBlur={() => setFocus(0)}
        />
      </View>
      {/* input5 end */}

          {/* input6 start */}
          <View style={{borderBottomWidth:1,borderRadius:2,flexDirection:'row',gap:4,alignItems:'center',backgroundColor:'#ccc'}}>
        <Text style={{top:data.name.length>0?-18:focus===0?-18:10,left:15,position:'absolute', backgroundColor:'#fff',paddingHorizontal:5}}>enter your name</Text>
        <Icon name="user-plus" size={20} style={{marginRight:5,position:'absolute',top:-15}}  color="#000" />
        <TextInput style={{flex:1,padding:10,textAlignVertical: 'top'}} multiline={true}    numberOfLines={8}   placeholder={focus===0?'Name':''} placeholderTextColor='#999'
      // value={data.name}
        //  onFocus={()=>{setFocus(2)}}
        // onBlur={() => setFocus(0)}
        />
      </View>
      {/* input6 end */}



    <DateTime/>
    </View>
  )
}

export default Forms

const styles = StyleSheet.create({})
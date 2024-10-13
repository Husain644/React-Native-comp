import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import axios from 'axios'

const FormDataUpload = () => {
    const initial={name:'',email:'',password:''}
    const [data,setData]=useState(initial)
    const handleInputChange=(name,value)=>{
        setData({...data,[name]:value})
    }

    const Submit=()=>{
        const url="http://localhost:8000/"
        const data =  new FormData();
        data.append('name', 'Md');
        data.append('email', 'test@example.com');
        data.append('password', '123456')   
        axios({
            method: 'POST',
            data: data,
            url:url,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
          }).then(request => {
            console.log(request.data);
          }).catch(err => {
            console.log(err);
          })
           
    }
  return (
    <View style={{borderWidth:1,gap:10}}>
      <Text style={{fontSize:18}}>name is {data.name} and email is {data.email} and password is {data.password}</Text>

    <TextInput style={{backgroundColor:'#ccc'}} placeholder='name' 
      onChangeText ={(e)=>{handleInputChange('name',e)}} />

    <TextInput style={{backgroundColor:'#ccc'}} placeholder='Email' 
      onChangeText ={(e)=>{handleInputChange('email',e)}} />
    
    <TextInput style={{backgroundColor:'#ccc'}} placeholder='Password' 
      onChangeText ={(e)=>{handleInputChange('password',e)}} />
      <TouchableOpacity onPress={()=>{Submit()}} >
        <Text style={{color:'#fff',backgroundColor:'blue',fontSize:20,textAlign:'center',padding:5,fontWeight:'bold'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormDataUpload

const styles = StyleSheet.create({})
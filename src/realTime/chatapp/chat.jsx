import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React,{useState,useEffect,useMemo} from 'react'
import axios from 'axios'
import io from 'socket.io-client'


const Chat = ({url}) => {
    const socket = useMemo(()=>io(`http://192.168.15.197:8000/${url}`,
    {extraHeaders: {
    extra: "some-value",
    Authorization: "Bearer my-secret-token","x-client": "react-native"}}),[])
    const [message,setMessage] = useState([])
    const [inputmsg,setInputmsg] = useState("blank")
    socket.on("connect",()=>{ console.log("connected to server")})
    useEffect(()=>{
        socket.on("fromServer",(msg)=>{
            setMessage([...message,msg])
        })
        return()=>{
            socket.off("connect")
            socket.off("fromServer")
        }  
    },[message])
   
  return (
    <View style={{height:"50%",borderWidth:1,margin:10,padding:10}}>
        <Text>Chat</Text>
        <TextInput placeholder='enter text' onChangeText={(text)=>setInputmsg(text)} value={inputmsg}
        style={{borderWidth:1,paddingHorizontal:20}}/>
        <TouchableOpacity 
        style={{backgroundColor:"cyan",padding:10,borderRadius:5,marginBottom:20}}
        onPress={()=>{
            socket.emit("message",inputmsg)
        }}>
            <Text>Send Message</Text>
        </TouchableOpacity>
        {
            message.map((msg,index)=>(
                <Text key={index}>{msg}</Text>
            ))
        }
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
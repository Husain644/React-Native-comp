import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import AllList from './screens/allList'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './components/chat';
import Status from './screens/status';
import Calls from './screens/calls';
import {GetSocket} from './components/whatsappUtils.js'
import Ragister from './screens/ragister&login/ragister.jsx';
import Login from './screens/ragister&login/login.jsx';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const WhatsApp_Home = () => {
  const [accessToken, setAccessToken] = useState(storage.getString('accessToken'));
  const [newSocket,setNewSocket]=useState(null)

  const Stack=createNativeStackNavigator()
  const socket=GetSocket()
  useEffect(() => {
    setNewSocket(socket)
      return () => {
            if (socket) {
                  socket.disconnect();
            }
      }
}, [accessToken]);
  return (
        <NavigationContainer>
              <Stack.Navigator initialRouteName={accessToken?"allList":"login"} >  
                  <Stack.Screen  name="allList"    options={{headerShown:false}} >
                        {props =>accessToken?<AllList {...props} socket={newSocket} />:<Login {...props} setAccessToken={setAccessToken} />}
                  </Stack.Screen>
                  <Stack.Screen  name="chat"   options={{headerShown:false}} >{props=><Chat {...props} socket={newSocket}/>}</Stack.Screen>
                  <Stack.Screen  name="status"  component={Status}  options={{headerShown:false}} />
                  <Stack.Screen  name="calls"  component={Calls}  options={{headerShown:false}} />
                  <Stack.Screen  name="ragister"  component={Ragister}  options={{headerShown:false}} />
                  <Stack.Screen name="login"  options={{headerShown:false}} >
                     {props => <Login {...props} setAccessToken={setAccessToken} />}
                  </Stack.Screen>        
              </Stack.Navigator>
        </NavigationContainer>   
  )
}
export default WhatsApp_Home

const styles = StyleSheet.create({

})
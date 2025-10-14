import { io } from 'socket.io-client';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import { MMKV } from 'react-native-mmkv';


export function GetSocket(){
    const myUserId=getMyUserId()
    const socket = io(`http://192.168.30.197:8000/whatsapp`,
        {
        extraHeaders: {
        extra: "some-value",
        myuserid:myUserId,
        Authorization: "Bearer my-secret-token",
        "x-client": "react-native"
        }})
        return socket
}


export  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      return res[0];
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled');
      } else {
        console.error(err);
      }
    }
  };

export const api = axios.create({
  baseURL: 'http://192.168.30.197:8000/whatsapp', // change this to your backend URL
  timeout: 10000, // optional
  headers: {
    'Content-Type': 'application/json',
  },
});

export const storage = new MMKV();

export function getAccessToken(){
  return storage.getString('accessToken');
}
export function getRefreshToken(){
  return storage.getString('refreshToken');
}
export function clearTokens(){
    storage.delete('accessToken');
    storage.delete('refreshToken');
}

export function getMyUserId(){
  return storage.getString('myuserid');
}
export function setUserChat(_id,chats){
  if(chats){
    storage.set(_id,JSON.stringify(chats));
  } 
}
export function getUserChat(_id){
  const chats=storage.getString(_id);
  return chats?JSON.parse(chats):[];
  
}

export function formatChatTime(isoString) {
  console.log(isoString);
  if (!isoString) return '';
  const date = new Date(isoString);
  const now = new Date();

  const isToday = date.toDateString() === now.toDateString();

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();

  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (isToday) return time;
  if (isYesterday) return 'Yesterday';

  return date.toLocaleDateString([], {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

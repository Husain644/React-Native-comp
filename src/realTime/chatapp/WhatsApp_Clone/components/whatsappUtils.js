import { io } from 'socket.io-client';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import { MMKV } from 'react-native-mmkv';
import {ServerUrl} from 'react-native-dotenv'


export function GetSocket(loginId) {
  console.log(ServerUrl)
  try {
      const socket = io(`${ServerUrl}/whatsapp`, {
    path: "/socket.io",              // must match server
    transports: ["websocket", "polling"], // both
    withCredentials: false,
     query: {
      myuserid: loginId || "68eb87e0754c8327d11004e0",
      Authorization: "Bearer my-secret-token",
    },
  });

  socket.on("connect", () => {
    console.log("Connected and socketId: ", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error("Connection Error:", err.message);
  });

  return socket;
  } catch (error) {
    console.log('error is ' , error)
  }
}


export  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      return res[0];
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {

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

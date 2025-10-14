import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Header from '../components/header'
import BottomNav from '../components/bottom_nav'
import { useNavigation } from '@react-navigation/native'
import { getMyUserId } from '../components/whatsappUtils'
import blankDp from '../assets/dp.png'
import { setUserChat,getUserChat,formatChatTime } from '../components/whatsappUtils.js'

const AllList = ({route,navigation,socket}) => {
      const [data,setData]=useState([]);
      
 useEffect(() => {
       if (!socket) return;
       const handleMessage = (socketData) => {
         console.log("message received", socketData.text,socketData.senderId);
         const Chats=getUserChat(socketData.senderId);
         setUserChat(socketData.senderId,[...Chats,{sender:false,text:socketData.text,time:socketData.time}]); 
   setData(prevData => {
  const matchedUser = prevData.find(user => user._id === socketData.senderId);
  if (!matchedUser) return prevData;
  const others = prevData.filter(user => user._id !== socketData.senderId);
  return [matchedUser, ...others]})};
       socket.on("message", handleMessage);
       return () => {
         socket.off("message", handleMessage);
       };
     }, [socket]);
  const getData=async ()=>{
  try {
      const result=await axios.get('http://192.168.30.197:8000/whatsapp/all')
      const filterData=result?.data?.allUser.filter(item=>item._id!==getMyUserId())
     setData(filterData)
  } catch (error) {
    console.log(error)
  }
  }
 useEffect(()=>{
   getData()
 },[])
  const Navigation=useNavigation()
  function ToChat(dta){
    Navigation.navigate('chat',dta)
  }
  return (
    <View style={styles.Maincontainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {data?.map((item, index) => {
          const imageSource = item.dp? { uri: `http://192.168.30.197:8000/whatsapp/static/${item.dp}` }: blankDp;
          const lastMessage=getUserChat(item?._id).pop()
          return (
          <TouchableOpacity key={index} onPress={()=>ToChat(item)} style={styles.userContainer} activeOpacity={0.4}>
            <Image style={styles.dp} source={imageSource} />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={{ fontSize: 20, color: '#000', fontWeight: '600' }}>{item.name}</Text>
                <Text style={{ paddingRight: 10 }}>{formatChatTime(lastMessage?.time)}</Text>
              </View>
              <Text 
                style={{ fontSize: 14, width: '100%' }}
                numberOfLines={1}   // 👈 better than overflow+height
              >
                {lastMessage?.text||'...'} 
              </Text>
            </View>
          </TouchableOpacity>
        )})}
      </ScrollView>
      <BottomNav screen="allList"/>
    </View>
  )
}

export default AllList

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1, // 👈 IMPORTANT for scrolling
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 20, // extra space for scrolling

  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    gap: 10,
  },
  dp: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#999',

  },
})

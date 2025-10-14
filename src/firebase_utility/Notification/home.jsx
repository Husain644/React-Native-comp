// HomeFirebase.js
import React, { useEffect,useState } from 'react';
import { Alert, Platform,View,Text,ScrollView,Image } from 'react-native';
import { getApp } from '@react-native-firebase/app';
import { getMessaging, getToken, requestPermission, AuthorizationStatus, onMessage } from '@react-native-firebase/messaging';
import notifee , { AndroidStyle,AndroidImportance,AndroidVisibility} from '@notifee/react-native';

export default function HomeFirebase() {
  const [msg,setMsg]=useState([])

  useEffect(() => {
    const app = getApp();
    const messaging = getMessaging(app);
   async function  initFCM(){
    const authStatus = await requestPermission(messaging);
    const enabled = authStatus === AuthorizationStatus.AUTHORIZED || authStatus === AuthorizationStatus.PROVISIONAL;
    if (enabled){
            const token = await getToken(messaging);
             console.log('📲 FCM Token:', token);
            return token
    }
    else{
    console.log('❌ Notification permission denied');
    return null;
    }}
    initFCM()
    // Foreground messages
    const unsubscribe = onMessage(messaging, async remoteMessage => {
      console.log('📩 Foreground message:', remoteMessage);
           
    const channelId = await notifee.createChannel({
    id: 'default-new',
    name: 'Default Notifications-new',
    importance: AndroidImportance.HIGH, // how intrusive notification is
    sound: 'noti2',                   // or custom sound file
    vibration: true,                    // enable vibration
    lights: true,                       // enable LED
    badge: true,                        // show app badge
    description: 'Used for general notifications',
    visibility:AndroidVisibility.PRIVATE
    });
      await notifee.displayNotification({
      id: remoteMessage.data.id,
      title: remoteMessage.data.title,
      body: remoteMessage.data.body,
      android: {
        channelId:channelId,
        smallIcon:'ic_notification',
         color: remoteMessage.data.iconColor || 'red',
        largeIcon:remoteMessage.data.largeIcon,
        style: {
        type: AndroidStyle.BIGPICTURE,
         picture:remoteMessage.data.image
              },
        pressAction: {
          id: 'default'}}})

      // Show simple Alert (not a system notification)
      setMsg(prevMsg=>[...prevMsg,   {
        title:remoteMessage.data.title || 'New Message',
        desc:remoteMessage.data?.body || 'You have a new notification',
        image:remoteMessage.data.image
       }]);
    });
    return unsubscribe;
  }, []);

//   return null;
return(
<View style={{width:'100%', height:600, backgroundColor:'#ccc'}}>
  <ScrollView contentContainerStyle={{alignItems:'center', flexGrow: 1, paddingVertical: 5}}>
    <Text style={{fontSize:20, color:'#000', marginBottom:10}}>{msg.length}-Notifications</Text>
    {msg.map((item,index) => (
      <View
        key={index}
        style={{
          backgroundColor:'#fff',
          width:'90%',
          borderRadius:5,
          padding:5,
          borderWidth:1,
          marginBottom:5  // instead of gap
        }}
      >
        <Text style={{fontSize:18,color:'#000'}}>{item.title}</Text>
        <Text style={{fontSize:16,color:'#000'}}>{item.desc}</Text>
        <Image src={item.image} style={{height:200,width:'85%'}}/>
      </View>
    ))}
  </ScrollView>
</View>

)

}

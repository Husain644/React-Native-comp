import React, { useEffect } from 'react';
import { View, Button ,StyleSheet,Text} from 'react-native';
import notifee , { AndroidStyle,AndroidImportance,AndroidVisibility } from '@notifee/react-native';

const NotifeeNotification = () => {

    async function onDisplayNotification(data) {
      
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
      id: data.id,
      title: data.title,
      body: data.body,
      android: {
        channelId,
        smallIcon:'ic_notification', // optional, defaults to 'ic_launcher'
         color: data.iconColor || 'red',
        largeIcon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTsqEVFPrFLO-Sl-_-pHnaeUq9DqSQKGeeQ&s',
        style: {
        type: AndroidStyle.BIGPICTURE,
         picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7w_ptRP9lqSCNKwXZGtVS3LfYUqbKy5_SxA&s', // image URL
              },
        pressAction: {
          id: 'default'}}})
      }
 
//  useEffect(()=>{
//     setInterval(()=>{
//     const num=Math.round(Math.random()*10000)
//     onDisplayNotification(data={ id:`${num/10}`,title:`This is  updated title`,desc:`this is description number is ${num}`,iconColor:'#6b0080'})},5000)
//  },[])

  return (
    <View>
     <Button title="Display Notification" onPress={() => onDisplayNotification(data={
    id:'120',title:'This is title',body:'this is description',iconColor:'green'
     })} />
      <Text></Text>
     
    </View>
  )
}

export default NotifeeNotification

const styles = StyleSheet.create({})
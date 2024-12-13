import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import notifee from '@notifee/react-native';

const NotifeeHome = () => {
    async function onDisplayNotification() {
        //  Request permissions (required for iOS)
        // await notifee.requestPermission()
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
        // Display a notification
        await notifee.displayNotification({
          title: '<p style="color: #4caf50;"><b>Hii,This is notiications</span></p></b></p> &#128576;',
          body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
          android: {
            channelId,
            //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
              id: 'default',
            },
          },
        });
      }
  return (
    <View style={{padding:10}}>
      <Button title="Display Notification" onPress={() => onDisplayNotification()} />
    </View>
  )
}

export default NotifeeHome
  
const styles = StyleSheet.create({})
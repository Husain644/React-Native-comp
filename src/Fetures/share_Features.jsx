import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Share from 'react-native-share';
import React from 'react'

const Share_It = () => {
const options={
  title: 'React Native Share',
  message: 'Check out this React Native app!',
  url: 'https://github.com/react-native-community/react-native-share',
  subject: 'React Native Share Example', //  for email
  // social: Share.Social.WHATSAPP,
  //recipient: "916396625635",
  //social: Share.Social.INSTAGRAM, // specify either 'INSTAGRAM', 'FACEBOOK', 'TWITTER', 'WHATSAPP', or 'EMAIL'
}

const onShare=async() => {
    Share.open(options)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      err && console.log(err);
    });

    }
  return (
    <View>
      <Text>Share_It</Text>
      <TouchableOpacity onPress={onShare} 
      style={{width:'100%',height:50,backgroundColor:'lightgreen'}}>
        <Text>Share</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Share_It;

const styles = StyleSheet.create({})
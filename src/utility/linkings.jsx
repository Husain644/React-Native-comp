import { useState,useEffect } from "react";
import { Linking, Alert, Platform,Text,View,TouchableOpacity,StyleSheet,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function OpenAnyApp() {
  const apps=[
  { name: "WhatsApp", scheme: "whatsapp://send?&text=Hello this is from react native app"},//`whatsapp://send?phone=${cleanedNumber}&text=${encodeURIComponent(message)}` to specific number
  { name: "Instagram", scheme: "instagram://user?username=reactnative"},
  { name: "Twitter", scheme: "twitter://user?screen_name=reactnative" },
  { name: "YouTube", scheme: "vnd.youtube://dQw4w9WgXcQ"},
  { name: "Gmail", scheme: `mailto:${'husainmd0587@gmail.com'}?subject=${encodeURIComponent('testing')}&body=${encodeURIComponent('hello this is testing')}` },
  { name: "ChatGPT", scheme: "chatgpt://" },
  { name: "ChatGPT Web", scheme: "https://chat.openai.com" },
  {name:'gallery',scheme:"content://media/internal/images/media"},
  {name:'audio',scheme:"content://media/internal/audio/media"},
  {name:'google search',scheme:`https://www.google.com/search?q=${query='react-native'}`},
  {name:'call to 9898989898',scheme:`tel:${9898989898}`},
  {name:'sms to 6396625635',scheme:`sms:${6396625635}${"?body="}${encodeURIComponent('hello')}`}
  ]
  const [data,SetData]=useState(apps)

const FilterData=async()=>{
  const newData = [];
for (const item of apps) {
  const supported = await Linking.canOpenURL(item.scheme);
  newData.push({ ...item, canOpen: supported });
}
SetData(newData)
}

useEffect(()=>{
  FilterData()
},[])
  async function openApp(scheme){
       try {
         const supported = await Linking.canOpenURL(scheme);
            if (supported){
               Linking.openURL(scheme);
            }
            else{
               Alert.alert("App not installed or cannot open", scheme);
            }
       } catch (error) {
         Alert.alert("Error opening app", e.message);
       }
  }

  const openSetting =async()=>{try {
          Linking.openSettings() //open app setting (own app .react-native app)
          // await Linking.openURL("intent://#Intent;action=android.settings.WIFI_SETTINGS;end")
          // await Linking.openURL("android.settings.LOCATION_SOURCE_SETTINGS:")
        } catch (error) {
          console.log(error)
        }}

  return (
    <View style={{flex:1,backgroundColor:'#b8f5a099',paddingTop:20}}>
        <TouchableOpacity onPress={openSetting} style={{position:'absolute',top:10,right:10,zIndex:999}}>
           <Icon name='gear' size={30} color='#900' />
        </TouchableOpacity>
      <Text style={{fontSize:30,color:'#000',textTransform:'capitalize',textAlign:'center'}}>Open App</Text>

     <ScrollView contentContainerStyle={styles.scroll}>
          {
            data.map((item,index)=>{
              return(
                  <TouchableOpacity key={index} disabled={item.canOpen?false:true} onPress={()=>{openApp(item.scheme)}} 
                  style={[styles.btnStyle,{width:220,opacity:item.canOpen?1:0.5}]} activeOpacity={.4}>
                    <Text style={{fontSize:20,color:'#fff',padding:5,textAline:'center',fontWaight:'bold'}}>
                    {item.name}
                    </Text>
                </TouchableOpacity>
              )
            })
          }

     </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
  scroll:{
    backgroundColor:'#fff',
    minWidth:'100%',
    alignItems:'center',
  },
  btnStyle:{
      backgroundColor:'#f37d47',
      borderRadius:10,
      alignItems:'center',
      marginTop:20
}
})
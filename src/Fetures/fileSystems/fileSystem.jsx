import {View, Text, Button,TouchableOpacity} from 'react-native';
import React from 'react';
import DocumentPicker, { types,pick } from 'react-native-document-picker';
import ReactNativeFsHome from './react-native-fs';


export default function App() {
  const selectDoc = async () => {
    try{ 
      const res=await DocumentPicker.pick({
        type:[DocumentPicker.types.audio]
      })
      console.log(res[0])}
    catch(err){
      console.log('error:', err);
    }
   

  }

  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          textAlign: 'center',
          marginVertical: 40,
        }}>
        Document Picker
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Select Document" onPress={selectDoc}/>
      </View>
      <TouchableOpacity style={{margin:40}} onPress={selectDoc}><Text style={{fontSize:28,backgroundColor:'#eaea'}}>clic</Text></TouchableOpacity>
      <ReactNativeFsHome/>
    </View>
  );
}

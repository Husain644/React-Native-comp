import { View, Text, Button, TouchableOpacity } from 'react-native';
import {React,useEffect} from 'react';
import DocumentPicker, { types, pick } from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import { requestReadPermission } from './permissions';

export default function FilePicker() {
  useEffect(() => {
    requestReadPermission();
  }, []);
  const navigation = useNavigation();
  const allDock = async(options) => {
    try {const res = await DocumentPicker.pick(options.types);
                     navigation.navigate('filepickeritems',{data:res});}
    catch (err) {console.log('error:', err);}}

  return (
    <View style={{backgroundColor:'#fff',paddingVertical:20}}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          textAlign: 'center'
        }}>
        Document Picker
      </Text>
      <Text style={{
        fontSize: 12,
        textAlign: 'center',
      }}>with  react-native-document-picker</Text>
      <View style={{ marginHorizontal: 10 }}>
        <Button title="Select Document" 
        onPress={()=>{allDock({types:{type:[DocumentPicker.types.allFiles],allowMultiSelection:true}})}} />

      </View>
  
    </View>
  );
}

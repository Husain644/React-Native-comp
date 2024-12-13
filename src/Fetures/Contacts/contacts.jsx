import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native'
import {React ,useState} from 'react'
import Contacts from 'react-native-contacts';
import { ContactsPermission } from '../fileSystems/permissions';

const ContactsHome = () => {
    const [contactsNum,setContactsNum]=useState([])
    const getContacts = async () => {
        if(await ContactsPermission()){
            console.log('inner run ')
            try { 
                const res = await Contacts.getAll();
                res.sort((a,b)=>{a.displayName - b.displayName})
                setContactsNum(res)
             }
            catch (err) { console.log('error is',err) }
        }
      {
        return <View><Text>please provide contacts permissions</Text></View>}
    }
   
    return (
        <ScrollView style={{borderBottomWidth:1,padding:15}} >
            <Text>ContactsHome</Text>
            <TouchableOpacity onPress={getContacts}>
                <Text style={{fontSize:25,padding:10,backgroundColor:'#eaea',textAlign:'center'}}>Get Contacts</Text>
            </TouchableOpacity>
           {
            contactsNum.map((item,index)=>(
                <View key={index+1} style={{borderBottomWidth:1,paddingLeft:25}}>
                          <Text style={{fontSize:18,marginTop:2}}>{item.displayName}</Text>
                          <View  style={{fontSize:12}}>
                             <Text>{item.phoneNumbers[0]?.number.replaceAll(" ","")}</Text>  
                            </View>
                </View>
          
            ))
 
           }
        </ScrollView>
    )
}

export default ContactsHome

const styles = StyleSheet.create({})
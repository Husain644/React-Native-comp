import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Shadow } from '../css/shadow';
const MyAutocomp = () => {
    const city=['jaypur','alwar','bikaner','bankrota','kota','shahpur','ajmer','jaypurNew','jaygarh','jaynagar']
    const [searchText, setSearchText] = useState('')
    const filterData =searchText.length >= 2 ? city.filter(item=>item.toLowerCase().includes(searchText.toLowerCase())):[]
  return (
    <View style={{minHeight:200,borderWidth:2,padding:15}}>
      <Text>MyAutocomp</Text>
      <View style={[Shadow.s1]}>
      <TextInput placeholder='Search City' value={searchText} onChangeText={(text)=>{setSearchText(text)}}
       style={{height:45,borderRadius:5,paddingHorizontal:10}}/>
       <Icon name="search" size={20} color="gray" style={{position:'absolute',top:10,right:10}}/>
      </View>
      {  filterData.length > 0 &&
             <ScrollView style={[Shadow.s1,{marginTop:10,padding:10}]}>
             { 
               filterData.map((item,index)=>(
                 <Text key={index} style={{marginVertical:5,borderBottomWidth:1}}>{item}</Text>
               ))
             }</ScrollView>
      }
 
    </View>
  )
}

export default MyAutocomp

const styles = StyleSheet.create({})
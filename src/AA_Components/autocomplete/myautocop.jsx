import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native'
import {React,useState} from 'react'

const MyAutocomp = () => {
    const city=['jaypur','alwar','bikaner','bankrota','kota','shahpur','ajmer']
    const [searchText, setSearchText] = useState('')
    const filterData =searchText.length >= 2 ? city.filter(item=>item.toLowerCase().includes(searchText.toLowerCase())):[]
  return (
    <View style={{minHeight:200,borderWidth:2,padding:15}}>
      <Text>MyAutocomp</Text>
      <TextInput placeholder='Search City' value={searchText} onChangeText={(text)=>{setSearchText(text)}}
       style={{height:40,borderWidth:1,borderColor:'gray'}}/>
      <ScrollView style={{}}>
      {
        filterData.map((item,index)=>(
          <Text key={index} style={{marginTop:10,borderBottomWidth:1}}>{item}</Text>
        ))
      }</ScrollView>
    </View>
  )
}

export default MyAutocomp

const styles = StyleSheet.create({})
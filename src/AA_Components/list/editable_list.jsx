import { StyleSheet, Text, View, ScrollView, Button,TouchableOpacity,TextInput } from 'react-native'
import {Reac,useState} from 'react'
import { H4 } from '../divider/heading'
import { Data } from '../table/data'

const EditableList = () => {

  return (
    <View style={styles.container}>
      <H4 txt="Editable List" />
      <ScrollView contentContainerStyle={styles.list}
      >
        {Data.map((item, index) => {
          return (
            <View key={index} style={styles.item} >
              <Text style={{ fontSize:12 }} >{item.rol}</Text>
              <Text style={{ fontSize: 20 }} >{item.name}</Text>
              <Text style={{ fontSize:12 }} >{item.class}</Text>
              <View style={{width:150,flexDirection:'row',flexWrap:'wrap'}}>{item.subect.map((sub,i)=>{return(<Text key={i}>{sub}, </Text>)})}</View>
              <Button title='edit' color="#cccc" onClick={() => { }}>Edit</Button>
            </View>)
        })}
      </ScrollView>
      <TouchableOpacity  onPress={()=>{}}
      style={{height:'100%',width:'100%',position:'absolute',backgroundColor:'#000',alignItems:'center',justifyContent:'center',
      opacity:0.5}}>
               <View style={{width:'100%',padding:10,backgroundColor:'#fff'}}>
                 <TextInput placeholder='name'/>
               </View>
      </TouchableOpacity>
    </View>
  )
}

export default EditableList

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingVertical: 20,
    backgroundColor: 'lightgreen',
    minWidth: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    minWidth: '95%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

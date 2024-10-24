import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React from 'react'
import { H4 } from '../divider/heading'

const EditableList = () => {
    const data=[{name:'husain',id:1},{name:'sumit',id:2},{name:'rehan',id:3},
      {name:'husain',id:4},{name:'sumit',id:5},{name:'rehan',id:6},
      {name:'husain',id:7},{name:'sumit',id:8},{name:'rehan',id:10}]
  return (
    <View style={styles.container}>
      <H4 txt="Editable List" />
        <FlatList
            contentContainerStyle={styles.flate_list}
            data={data}
            renderItem={({item})=>(
                <View style={styles.item} >
                    <Text style={{fontSize:20}} >{item.id}</Text>
                    <Text style={{fontSize:20}} >{item.name}</Text>
                     <Button title='edit' color="#cccc" onClick={()=>{}}>Edit</Button>
                </View>
            )}
            keyExtractor={(item)=>item.id.toString()}
        />
    </View>
  )
}

export default EditableList

const styles = StyleSheet.create({
    container: {
      height:500,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flate_list:{
        paddingVertical:20,
        backgroundColor:'lightgreen',
        minWidth:'90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
      backgroundColor:'#fff',
      flexDirection:'row',
      minWidth:'95%',
      padding:10,
      borderRadius:5,
      marginBottom:10,
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  });

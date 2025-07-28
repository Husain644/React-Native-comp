import { syllabus } from "../data/data";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const Items = () => {
const navigation = useNavigation();
  return (
        <DrawerContentScrollView   contentContainerStyle={styles.mainContainer}>
          <Text style={{fontSize:25,color:'#000',borderBottomWidth:2,borderBottomColor:'#130c8baa',
            fontStyle:'italic',textTransform:'uppercase'
          }}>CNC Syllabus</Text> 
               
      {
        syllabus.map((item,index)=>{
          return(
          <Text key={index} style={styles.txt}>
           <Text style={{color:'#000',fontSize:14,fontWeight:400}}>{index+1}.</Text>
          {item.name}
          
          </Text> 
        )})
      }
        </DrawerContentScrollView>
 

  )
}

export default Items
const styles = StyleSheet.create({
  mainContainer:{
    paddingTop:10,
    backgroundColor:'#d1cccc',
    alignItems:'center'
  },
  txt: {
    fontSize:16,
    width:'90%',
    color: "red",
    fontStyle: "italic",
    fontWeight: "600",
    textTransform: "uppercase",
    marginTop:5,
    paddingLeft:5,
    borderBottomWidth:1,
    backgroundColor:'#fff',
    borderRadius:5
  },
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { syllabus } from './data/data'

const CncHome = () => {

  return (
    <View>
      {
        syllabus.map((item,index)=>{
          return(
          <Text key={index} style={styles.txt}>{index+1}. {item}</Text> 
        )})
      }
    </View>
  )
}

export default CncHome

const styles = StyleSheet.create({
  txt: {
    fontSize:20,
    color: "red",
    fontStyle: "italic",
    fontWeight: "600",
    textTransform: "uppercase",
    marginTop:5,
    paddingLeft:20
  },
});
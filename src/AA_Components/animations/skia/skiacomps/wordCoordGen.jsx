import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const WordCoordGen = () => {
const listGen = (from = -1, to=50) => {
  const lst = [];
  for (let i = from + 1; i <= to; i++) {
    lst.push(i)
  }
  return lst;
};

  return (
    <View style={styles.container}>
      {
        listGen().map((i) => (
          <View key={i} style={{ width: 25, height: 25, position:'absolute',
            left: (i % 10) * 35, top: Math.floor(i / 10) * 35,
          borderWidth: 1, borderColor: '#eaea',
          backgroundColor: i%2===0?'#ccc':'#eee'}}>
            <Text style={{ fontSize: 8 }}>x {(i % 10) * 40}</Text> 
              <Text style={{ fontSize: 8 }}>y {Math.floor(i / 10) * 25}</Text> 
         </View> ))
      }
    </View>
  )
}

export default WordCoordGen

const styles = StyleSheet.create({ 
    container: {
        width: '100%',
        height: 350,
        marginTop:20,
        borderWidth:1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowRadius: 3.84,
        elevation: 5,
        flexWrap: 'wrap',

    }
})
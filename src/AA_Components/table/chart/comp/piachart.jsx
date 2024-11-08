import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { piaData } from '../../data'

const Piachart = ({ pieData }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <View style={styles.main}>
        <View style={styles.innerWraper}>
          <View style={styles.inner}></View>
        </View>
      </View>


    </View>
  )
}

export default Piachart

const styles = StyleSheet.create({
  main: { width: 300, height: 300, borderRadius: 150, borderWidth: 1, 
    overflow:'hidden',
    alignItems: 'center', justifyContent: 'center' },

    innerWraper:{width: 150, height: 150, borderWidth:1,  alignItems: 'center', justifyContent: 'center',
       transform: [{ rotateZ:'0deg'},{ translateY: 75 },{ translateX: 75}]} ,
  inner: {
    position:'absolute',
    width: 1, height: 250, borderWidth:1,
    transformOrigin: 'center',
    alignSelf:'center',
    transform: [{ rotate: '45deg' }]  
  }
   
})
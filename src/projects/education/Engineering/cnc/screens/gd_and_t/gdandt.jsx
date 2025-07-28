import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AllGdandT } from './comps/data'
import Card from './comps/card'

const Gdandt = () => {

  return (
    <View style={styles.container}>
      {
        AllGdandT.map((item,index)=>{
            return(
                   <Card key={index} title={item.title} imageUrl={item.images}  />
            )
        })
      }
    </View>
  )
}
export default Gdandt

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderTopWidth:1,
        backgroundColor:'#f0f0f0'
    }
})
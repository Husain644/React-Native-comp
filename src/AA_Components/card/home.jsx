import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './card'
import Card2 from './card2'
import Story from './story/story'

const CardHome = () => {
  return (
    <>
      <Card/>
                 <Border/>
      <Card2/>
                <Border/>
      <Story/>
                  <Border/>


    </>
  )
}

export default CardHome

const styles = StyleSheet.create({})


const Border=()=>{return(
    <View style={{backgroundColor:'#000',width:'100%',height:2
    }}></View>
)}
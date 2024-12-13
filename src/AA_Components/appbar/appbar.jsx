import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import MyappBar from './myappbar'
import {H3,H5} from '../divider/heading';


const AppbarComp = () => {
  return (
    <>
    <Text style={{width:'100%',fontSize:25,textAlign:'center',color:'#fff',backgroundColor:'red'}}>This is app bar section</Text>
    <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
        <H5 txt="This is my app bar"/>
      <MyappBar/>
    </>
  )
}

export default AppbarComp

const styles = StyleSheet.create({})
import { View, Text } from 'react-native'
import React from 'react'
import MMKV_DB from './mmkv_database/db'
import StudentScreen from './sql_storage/main'

const StorageMain = () => {
  return (
    <>
      <Text style={{width:'100%',color:'#ff0000',fontSize:20, borderBottomWidth:2,textAlign:'center'}}>This is React Native Sqlite storage</Text>
        <StudentScreen/>
      <Text style={{width:'100%',color:'#ff0000',fontSize:20,borderTopWidth:2,textAlign:'center'}}>This is React Native MMKV storage</Text>
         <MMKV_DB/>
    </>
  )
}

export default StorageMain
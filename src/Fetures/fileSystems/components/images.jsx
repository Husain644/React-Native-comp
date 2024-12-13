import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import RNFS from 'react-native-fs'

const ImagesComp = ({data}) => {
    const lst=[]
    const recur=(i)=>{
        if(i.isFile()){lst.push(i.path)}
        else if(i.isDirectory()){
            recur(RNFS.readDir(i.path))
        }
       
    }
    const getAllImages=()=>{
        data.forEach((items)=>recur(items))
        console.log(lst.length)
    }
  
  return (
    <ScrollView>
      <Text>ImagesComp</Text>
      <Button title='get all images' onPress={getAllImages}/>
      <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
        {
            data.map((item,index)=>{
                return(
                    
                    <Image key={index}    
                    source={{uri: `file:{item.path}`}} 
                    style={{width:'45%', height:200,marginTop:5}} /> 
                )
            })
        }
      </View>
    
    </ScrollView>
  )
}

export default ImagesComp

const styles = StyleSheet.create({})
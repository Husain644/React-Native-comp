import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const H1 = ({txt}) =>{return(<Text style={{width:'100%',marginVertical:5,fontWeight:'bold',fontSize:40,textAlign:'center',color:'#000',backgroundColor:'#ccc'}}>{txt}</Text>)}
export const H2 = ({txt}) => {return<Text style={{width:'100%',marginVertical:5,fontWeight:'bold',fontSize:35,textAlign:'center',color:'#000',backgroundColor:'#ccc'}}>{txt}</Text>}
export const H3 = ({txt}) => {return<Text style={{width:'100%',marginVertical:5,fontWeight:'bold',fontSize:30,textAlign:'center',color:'#000',backgroundColor:'#ccc'}}>{txt}</Text>}
export const H4 = ({txt}) => {return<Text style={{width:'100%',marginVertical:5,fontWeight:'bold',fontSize:25,textAlign:'center',color:'#000',backgroundColor:'#ccc'}}>{txt}</Text>}
export const H5 = ({txt}) => {return<Text style={{width:'100%',marginVertical:5,fontWeight:'bold',fontSize:20,textAlign:'center',color:'#000',backgroundColor:'#ccc'}}>{txt}</Text>}
export const H6 = ({txt}) => {return<Text style={{width:'100%',marginVertical:5,fontWeight:'bold',fontSize:15,textAlign:'center',color:'#000',backgroundColor:'#ccc'}}>{txt}</Text>}
export const H7 = ({txt}) => {return<Text style={{width:'100%',marginVertical:5,fontWeight:'bold',fontSize:10,textAlign:'center',color:'#000',backgroundColor:'#ccc'}}>{txt}</Text>}


const Headings=() => {
    return (
        <View>
           <H1 txt={'gusd'}/>
            <H2 txt={'Heading 2'} />
            <H3 txt={'Heading 3'} />
            <H4 txt={'Heading 4'} />
            <H5 txt={'Heading 5'} />
            <H6 txt={'Heading 6'} />
            <H7 txt={'Heading 7'} />
        </View>
    )
 
}
export default Headings;
const styles = StyleSheet.create({})


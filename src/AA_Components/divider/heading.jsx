import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const H1 = ({txt="Heading 1",style={}}) =>{return(<Text style={[styles.heading, {fontSize:40,},style]}>{txt}</Text>)}
export const H2 = ({txt="Heading 2",style={}}) => {return<Text style={[styles.heading, {fontSize:35,},style]}>{txt}</Text>}
export const H3 = ({txt="Heading 3",style={}}) => {return<Text style={[styles.heading, {fontSize:30,},style]}>{txt}</Text>}
export const H4 = ({txt="Heading 4",style={}}) => {return<Text style={[styles.heading, {fontSize:25,},style]}>{txt}</Text>}
export const H5 = ({txt="Heading 5",style={}}) => {return<Text style={[styles.heading, {fontSize:20,},style]}>{txt}</Text>}
export const H6 = ({txt="Heading 6",style={}}) => {return<Text style={[styles.heading, {fontSize:15,},style]}>{txt}</Text>}
export const H7 = ({txt="Heading 7",style={}}) => {return<Text style={[styles.heading, {fontSize:10,},style]}>{txt}</Text>}


const Headings=() => {
    return (
        <>
           <H1 txt={'Heading 1'}/>
            <H2 txt={'Heading 2'} />
            <H3 txt={'Heading 3'} />
            <H4 txt={'Heading 4'} />
            <H5 txt={'Heading 5'} />
            <H6 txt={'Heading 6'} />
            <H7 txt={'Heading 7'} />
        </>
    )
 
}
export default Headings;
const styles = StyleSheet.create({
    heading:{
        width:'100%',
        marginVertical:5,
        fontWeight:'bold',
        textAlign:'center',
        color:'#000',
        backgroundColor:'#ccc',
        textTransform:'capitalize'
    }
})


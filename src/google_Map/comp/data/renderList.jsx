import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const RenderList = (data) => {
    console.log(data)
 
  return ( 
    <View style={styles.container}>
        <Icon name="map-marker" color="#999" size={25} />
        <Text style={styles.dscr}>
            {data.data.description}
        </Text>

    </View>
    
  )
}

export default RenderList

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        padding:0,
        flexDirection: 'row',
        gap:5,
        height:40,
        alignSelf:'center',
        alignItems:'center',
        flex:1
    },
    dscr:{
        padding:3,
        fontSize:16,
        backgroundColor:'#fff',
        borderRadius:5,
        flex:1,
        shadowColor:'#000',
        shadowOffset:{height:5,width:5},
        shadowOpacity:0.7,
        shadowRadius:5,
        elevation:10
        
    }
})
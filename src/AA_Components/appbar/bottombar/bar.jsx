import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Bar = () => {
    const [activeMenu,setActiveMenu]=useState(0)
    const handleMenu=(index)=>{
        setActiveMenu(index)
    }
    const data=[{name:'search',icon:'search'},{name:'profile',icon:'user'},{name:'setting',icon:'cog'},
        {name:'file',icon:'folder-o'}]
  return (
    <View style={styles.bar}>
        
        {data.map((item,index)=>{
            return(
                <TouchableOpacity key={index} style={[styles.menu,activeMenu===index&& styles.active_menu]} onPress={()=>{handleMenu(index)}}>
                <Text style={{ fontWeight: 'bold'}}>{item.name}</Text>
                <Icon name={item.icon} size={15} color="#000" /> 
                </TouchableOpacity>
            )
        })}
    </View>
  )
}

export default Bar

const styles = StyleSheet.create({
    bar: {
        position:'absolute',
        bottom: 0,
        right: 0,
        left:0,
        height: 35,
        backgroundColor: '#ccc',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 99,
        elevation: 10, // Android only property for shadows
    },
    menu:{
        flexDirection: 'row',
        alignItems: 'center',
        gap:5,
        height: '100%',
        width:'25%',
        justifyContent:'center',
        borderTopWidth:1,

    },
    active_menu:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderTopWidth:0,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        
    }
})
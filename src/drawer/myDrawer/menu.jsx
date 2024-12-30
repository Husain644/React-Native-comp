import { StyleSheet, Text, View,Button,TouchableOpacity,Animated } from 'react-native'
import {React,useState,useRef} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Menu = ({showDrawer=false}) => {
    const position = useRef(new Animated.Value(-500)).current;
    const navigation = useNavigation();
    const menuItems=[{name:'CompA',icon:'home',url:'CompA'}, {name:'CompB',icon:'contacts',url:'CompB'},]
    const[show,setShow]=useState(showDrawer)

     const shower=()=>{
        show? Animated.timing(position,{
            toValue: -500,
            duration: 500,
            useNativeDriver: true,
          }).start():Animated.timing(position, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start()
          setShow(!show)
    }
  return (
    <>
      <TouchableOpacity style={[styles.backdrop,show?{}:{display:'none'}]} onPress={shower} ></TouchableOpacity>
       <TouchableOpacity onPress={shower} 
       style={styles.menu}>
         {
            show?<Icon name="close" size={35} color="#000" />:<Icon name="menu" size={35} color="#000" />
         }
         </TouchableOpacity> 
      <Animated.View style={[styles.container,{ transform:[{translateX:position}]}]}>
        {
            menuItems.map((item,index)=>(
                <TouchableOpacity key={index} onPress={()=>{navigation.navigate(item.url)}}>
                    <View style={styles.menuItem}>
                        <Icon name={item.icon} size={25} color="#000" />
                        <Text style={{fontSize:18,color:'#000',marginLeft:10}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            ))
        }
      </Animated.View>
    </>
  )
}

export default Menu

const styles = StyleSheet.create({
    backdrop:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent:'center',
        alignItems:'center',
    }
    ,
    menu:{
        position:'absolute',
        top:10,
        right:20,
        zIndex:3,
        borderRadius:5
    }
    ,
    container:{
        position:'absolute',
        minHeight:'100%',
        top:0,
        left:0,
        backgroundColor:'#ccc',
        width:'80%',
        padding:10,
        zIndex:2,
    },
    menuItem:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#fff',
        marginTop:10,
        padding:8,
        borderRadius:5
    }
    })



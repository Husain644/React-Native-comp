import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native'
import {React,useState,useRef} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as Animatable from 'react-native-animatable';



const FabButton = () => {
    const data=[{name:'search',icon:'search'},{name:'profile',icon:'user'},{name:'setting',icon:'cog'},
        {name:'file',icon:'folder-o'}]
        const [activeMenu,setActiveMenu]=useState(0)
        const handleMenu=(index)=>{
            setActiveMenu(index)
        }
    
        const [run,setRun]=useState(false)
   
      const RunAnim=()=>{
        setRun(!run)
      }

      const rotating = {
     
      };

     
  return (
    <View style={{width:'90%',margin:10,alignSelf:'center',borderWidth:1,overflow:'hidden'}}>
            <Animatable.View style={styles.bar} 
            animation={{from:{translateX:run?-100:0},to:{translateX:run?0:-100},}} 
            duration={500}
            direction='alternate'
            easing='ease'
            iterationCount={1}
            delay={200}>
        {data.map((item,index)=>{
            return(
                <TouchableOpacity key={index} style={[styles.menu,activeMenu===index&& styles.active_menu]} onPress={()=>{handleMenu(index)}}>
                 <Icon name={item.icon} size={35} color="#fff" /> 
                <Text style={{ fontWeight: 'bold',color:'#000',fontSize:12}}>{item.name}</Text>
                </TouchableOpacity>
            )
        })}
    </Animatable.View>
                <TouchableOpacity  style={{position:'absolute',bottom:30,right:50,backgroundColor:'blue',padding:10,borderRadius:50,
                    height:70,alignItems: 'center',justifyContent: 'center',flexDirection:'row',gap:10
                }} onPress={RunAnim}>
                 <Animatable.View   
                                   animation={{from: {rotate: run?'0deg':'180deg'},to: {rotate: run?'180deg':'0deg'},}} 
                                    duration={1000}
                                    direction='alternate'
                                    easing='ease'
                                    iterationCount={1}
                                    delay={200}>
                 <Icon name={"plus"} size={35} color="#fff" /> 
                 </Animatable.View>
                <Text style={{ fontWeight: 'bold',color:'#fff',fontSize:15}}>click</Text>
                </TouchableOpacity>
           
                
    </View>
  )
}

export default FabButton

const styles = StyleSheet.create({
    bar: {
        position:'relative',
        bottom: 0,
        width:80,
        left:0,
        padding:5,
        gap:10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 9,
        elevation: 1, // Android only property for shadows
    },
    menu:{
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',  
        backgroundColor:'skyblue',
        borderRadius:15,
        padding:5,
        
    },
    active_menu:{
        borderColor:'blue' ,
        borderWidth:2
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreateArray } from '../../../utility/func';

const Watch = () => {
// var date = new Date().getDate(); //To get the Current Date
// var month = new Date().getMonth() + 1; //To get the Current Month
// var year = new Date().getFullYear(); //To get the Current Year
// var hours = new Date().getHours(); //To get the Current Hours
// var min = new Date().getMinutes(); //To get the Current Minutes
// var sec = new Date().getSeconds(); //To get the Current Seconds



const [time,setTime]=React.useState({hours:0,min:0,sec:0,day:0,month:0,year:0});

React.useEffect(()=>{
    setInterval(()=>{
        setTime(
            {hours:new Date().getHours(),min:new Date().getMinutes(),sec:new Date().getSeconds(),
              year:new Date().getFullYear(),month:new Date().getMonth(),day:new Date().getDate() 
            }
        )
    },1000)
},[])

const num=CreateArray(12)
  return (
    <View style={styles.container}>
        <View style={styles.watchCover}>
        {
          num.map((i,index)=>{
                return <View key={index} 
                style={[styles.num,{transform:[{rotateZ:`${i*30}deg`}]}]}>
                    <Text style={{fontSize:25,color:'red',transform:[{rotateZ:`${-i*30}deg`}]}}>{i}</Text>
                    
                    </View>
            })
        }
        <View style={[styles.hour,{transform:[{rotateZ:`${(time.hours % 12||12)*30+(time.min/2)}deg`},{translateY:-35}] }]}></View>
        <View style={[styles.minut,{transform:[{rotateZ:`${time.min*6}deg`},{translateY:-45}]}]}></View>
        <View style={[styles.second,{transform:[{rotateZ:`${time.sec*6}deg`},{translateY:-45}]}]}></View>
        <Text style={styles.circle}></Text>
        </View>
        <Text style={{fontSize:40,color:'#fff',width:'70%',fontWeight:'bold',borderRadius:10,textAlign:'center',backgroundColor:'red'}}>{[time.hours % 12||12,':',time.min,':',time.sec]}</Text>
        <Text style={{fontSize:20,color:'#999'}}>{[time.day,'/',time.month,'/',time.year]}</Text>
    </View>
  )
}

export default Watch

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingVertical:20,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    
    },
    watchCover:{
        width:300,
        height:300,
        borderRadius:150,
        backgroundColor:'#ccc',
        position:'relative',
        overflow:'visible',
        marginBottom:20,
        borderWidth:3, 
        justifyContent: 'center',
        alignItems: 'center',   
    },
    num:{
        position:'absolute',
        height:'90%',
    },
    circle:{
              height:20,
              width:20,
              borderRadius:10,
              backgroundColor:'black',
              position:'absolute',       
    },

    hour:{
        position:'absolute', 
        width:10,
        backgroundColor:'red',
        height:110,
        borderRadius:10
    },
    minut:{
        position:'absolute', 
        width:6,
        backgroundColor:'green',
        height:130,
        borderRadius:5
    },
    second:{
        position:'absolute', 
        width:3,
        backgroundColor:'blue',
        height:130,
    }

})
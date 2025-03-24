import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import {React,useState,useEffect} from 'react'
import Sound from 'react-native-sound'
import Icon from 'react-native-vector-icons/dist/Entypo';
import Animated, {
    useSharedValue, useAnimatedStyle, withSpring, interpolate,
    withClamp, withDecay, withTiming
} from 'react-native-reanimated'
import { GestureDetector, Gesture, PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import ring1 from './../game.mp3'



const BallSorter = () => { 
    const {height,width}=useWindowDimensions()
    const [sender,setSender]=useState({senderNum:0,getter:0});
    const [sound, setSound] = useState(true);
    const music=new Sound(ring1,Sound.MAIN_BUNDLE,(error)=>{
        if(error){console.log('failed to load the sound', error)}
    })   
    //###############
    const offset=useSharedValue(0);
    const offsetY=useSharedValue(0);
    const offsetStyle=useAnimatedStyle(()=>{return{
        transform:[{translateX:offset.value},{translateY:offsetY.value}]
    }}) 
    
  const mover=()=>{
  offsetY.value=withTiming(-50,{duration:500},(isOk)=>{
    if(isOk){
        offset.value=withTiming(200,{duration:1000},(isOk2)=>{
            if(isOk2){ offsetY.value=withTiming(0,{duration:500})}
        })
    }
  });
}
    return (
        <View style={[styles.container, { height: height, width: width }]}>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%',marginBottom:50,
                borderBottomWidth:1
            }}>
                <View style={{}}><Text style={{fontSize:28}}>Score:100</Text></View>
                <View style={{}}>
                    <View >
                       <TouchableOpacity onPress={()=>{music.stop();setSound(!sound)}}>
                           <Icon style={{transform:[{rotate:"-110deg"}]}} name="sound-mute" size={55} color="#fff"/>
                        </TouchableOpacity>
                    <Text style={{alignSelf:'flex-end',fontWeight:500}}>{sound?'Off':'On'}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.pipeWrapper}>
                <TouchableOpacity 
                        style={[styles.pipe,{transform:[{scale:sender.senderNum===1?1.05:1}]}]} 
                        onPress={()=>{setSender({senderNum:1,getter:sender.getter})}}>

                    <Animated.View style={[styles.ball,{backgroundColor:'red'},offsetStyle]}></Animated.View>
                    <Animated.View style={[styles.ball,{backgroundColor:'green'}]}></Animated.View>
                    <Animated.View style={[styles.ball,{backgroundColor:'green'}]}></Animated.View>
                    <Animated.View style={[styles.ball,{backgroundColor:'red'}]}></Animated.View>
                    <Animated.View style={[styles.ball,{backgroundColor:'red'}]}></Animated.View>
                    <Animated.View style={[styles.ball,{backgroundColor:'green'}]}></Animated.View>
                    <Animated.View style={[styles.ball,{backgroundColor:'green'}]}></Animated.View>
                </TouchableOpacity>

            
                <TouchableOpacity 
                        style={[styles.pipe,{transform:[{scale:sender.senderNum===4?1.05:1}]}]} 
                        onPress={()=>{setSender({senderNum:4,getter:sender.getter});mover()}}> 
                        
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>{music.play((err)=>{console.log(err)}) }}
             style={{margin:20,backgroundColor:'#ccc'}}><Text style={{fontSize:30,paddingHorizontal:20}}>Play</Text></TouchableOpacity>
        </View>
    )
}

export default BallSorter;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pipeWrapper: {
        flexDirection: 'row', 
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        paddingVertical:40
    },
    pipe: {
        width: 50,
        height: 300,
        paddingBottom:2,
        borderColor:'#000',
        borderWidth:3,
        borderTopWidth:1,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
        alignItems: 'center',
        justifyContent:'flex-end',
        gap:1,
        zIndex:-1
    },
    ball: {
      width:40,
      height:40 ,
      borderRadius:23,
      borderWidth:1,
      borderColor:'#fff',
      zIndex:10
    }
})
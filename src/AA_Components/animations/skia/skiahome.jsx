import { StyleSheet, Text, View, TouchableOpacity,ImageBackground,Image } from "react-native";
// import TrackPlayer,{ State } from 'react-native-track-player';
import React, { useState,useEffect,useRef } from "react";
import {Svg } from "./data/data";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  usePathValue,
  Canvas,
  Skia,
  Path,
  DashPathEffect,
  DiscretePathEffect,
  Line2DPathEffect,
  processTransform2d,
  Group} from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Img,music } from "../../../assets/assets";
import Sound from 'react-native-sound';
const colorOption=['green','red','pink','yellow','black','#999']

const Skiahome = () => {
  const [color,setColor]=useState('#999')
  const [silent,setSilent]=useState(false)
  const Pos = useSharedValue({x:200, y:200 });
  const start=useSharedValue({x:0,y:0})
  const [path, setPath] = useState(Skia.Path.Make());
  const newPath = usePathValue((p) => {
    "worklet";
  }, path);
  const panGesture = Gesture.Pan()
    .onBegin((e) => {
      Pos.value = {
        x: e.x,
        y: e.y};
        path.moveTo(
          e.x,
          e.y)   
    })
    .onUpdate((e) => {
      path.lineTo(e.x, e.y);
      Pos.value = {x: e.x,y: e.y,}})
      .onEnd((e)=>{
        start.value={x:e.x,y:e.y}
      })

  const AnimStyle = useAnimatedStyle(() => {
    return {
      left: Pos.value.x,
      top: Pos.value.y,
    };
  });
  const clip = Skia.Path.MakeFromSVGString(
    Svg[4].sv
  )
const scale = 8;
const matrix = Skia.Matrix();
matrix.scale(scale, scale);
matrix.translate(0,-20)
const scaledPath = clip.copy().transform(matrix);

  const soundRef = useRef(null);
 
  useEffect(() => {
    const sound = new Sound(music.afor, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
    });
    soundRef.current = sound;
    return () => {
      sound.release(); // ✅ Cleanup on unmount;
    };
  }, []);
    const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };
useEffect(()=>{
 if(!silent){
  setTimeout(playSound,1000);
 }
},[silent])
return (
  <View style={{alignItems:'center'}}>
    <View style={{position:'absolute',right:10,top:10,}}>
          <TouchableOpacity style={{transform:[{rotate:'160deg'}]}} onPress={()=>{
          setSilent(!silent)
          }}>
         {
          silent?<Icon name="volume-off" size={50} color="#000" />:
          <Icon name="volume-up" size={50} color="#000" />
         }
        </TouchableOpacity>
        <View style={{}}>
         {
          colorOption.map((item,i)=>{
            return <TouchableOpacity key={i} style={{width:40,height:40,marginTop:5,backgroundColor:item,borderRadius:30}}
             onPress={()=>{setColor(item)}}></TouchableOpacity>
        
          })
         }
        </View>
    </View>
      <View style={{width:250,borderWidth:1,padding:20}}>
    
      <GestureDetector gesture={panGesture}>
        <Canvas style={{height:350,borderWidth:1}}>  
          <Group  >
           <Path path={newPath} color={color} style="stroke" strokeWidth={30} />
           <Path path={scaledPath} color="#000" style="stroke" strokeWidth={4} >
             {/* <DashPathEffect intervals={[4, 4]} /> */}
               {/* <DiscretePathEffect length={10} deviation={2} /> */}
              <DashPathEffect intervals={[4, 4]} />
           </Path>
          </Group>
        </Canvas>
      </GestureDetector>
      <Animated.View
        style={[{ width:40, height:40,
          backgroundColor:'#eaea',
          position: "absolute", left: 0,
           top: 0, borderRadius: 20,
           zIndex:-1},
          AnimStyle,  ]}
      >
       <Icon name="caret-up" color={color} size={45} style={{top:-8,right:-6,zIndex:1}}/>
    
      </Animated.View>
    </View>
       <TouchableOpacity
        onPress={() => {setPath(Skia.Path.Make());
          Pos.value=withSpring({ x:200, y:200 })}}
        style={{ width: "100%", backgroundColor: "#eaea", borderRadius: 10 }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>refresh</Text>
      </TouchableOpacity>
      <ImageBackground source={Img.afor} resizeMode="contain"  style={{height:300,width:'100%'}}>
      </ImageBackground>
  </View>
  );
};

export default Skiahome;
const styles = StyleSheet.create({});

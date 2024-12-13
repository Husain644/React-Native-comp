import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Watch from './watch/watch';

const Anim = () => {
  const [run,setRun]=React.useState(false)
  const[anim,setAnim]=React.useState(-1)
   
  const setr=()=>{
    setRun(!run)
    setAnim(-1)
  }

  const builtInAnimations = [
    'bounce',
    'flash',
    'jello',
    'pulse',
    'rotate',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble',
    'bounceIn',
    'bounceInDown',
    'bounceInUp',
    'bounceInLeft', 
    'bounceInRight', 
    'bounceOut', 'bounceOutDown', 'bounceOutUp', 'bounceOutLeft', 
    'bounceOutRight', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInUp',
     'fadeInUpBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig',
      'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutUp', 'fadeOutUpBig', 'fadeOutLeft',
       'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'flipInX', 'flipInY', 'flipOutX', 
       'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'slideInDown', 'slideInUp', 'slideInLeft', 
       'slideInRight', 'slideOutDown', 'slideOutUp', 'slideOutLeft', 'slideOutRight', 'zoomIn', 
       'zoomInDown', 'zoomInUp', 'zoomInLeft', 'zoomInRight', 'zoomOut', 'zoomOutDown', 'zoomOutUp',
        'zoomOutLeft', 'zoomOutRight'

  ]
  const cstm_Anm = {
    from: {
      opacity: 0.8,
    },
    to: {
      opacity: 1,
    },
  };
  const linear={
    0:{
      translateX:0,
      backgroundColor:'white',
      color:'black'
    },
    0.4:{
      translateX:60,
       backgroundColor:'#ccc',
       color:'black'
    },
    0.6:{
      translateX:120,
      backgroundColor:'#ccc',
      color:'#999'
    },
    0.8:{
      translateX:180,
       backgroundColor:'#999',
      color:'white'
    }
  }
  const animRunner=(i)=>{
    setAnim(anim===i?-1:i)}

  const rotating = {
    from: {
      rotate: '30deg'
    },
    to: {
      rotate: '360deg'
    },
  };
  const rack = {
    from: {
      rotate: '30deg',
      left:'0%'
    },
    to: {
      rotate: '360deg',
      left:'100%'
    },
  };
  const racktxt = {
    from: {
      left:'0%'
    },
    to: {
      left:'100%'
    },
  };


  return (
    <View style={{ width: '100%', minHeight: 200, marginTop: 30, backgroundColor: 'lightgreen',paddingVertical:30}}>
        <Text style={{fontSize:18,textAlign:'center',color:'#f7096e',fontWeight:'bold'}}>This is animations from react-native-animatable library</Text>
        <Button title={run?'stop animations':'start animations'} color={run?'#e84659':'#5a6de4'} 
        style={{padding:5}} onPress={setr} />

      {builtInAnimations.map((items,index)=>{
        return(
          <Animatable.Text 
          onPress={()=>{animRunner(index)}}
          key={index}
          style={{ marginTop:20, width: '90%',alignSelf:'center', fontSize: 20, textAlign: 'center',padding:5,borderRadius:5,
          backgroundColor:index%2==0? 'pink' :'white'}}
          animation={run||anim===index?items:cstm_Anm} 
          duration={2000}
          direction='alternate'
          easing='ease'
          iterationCount='infinite'
          delay={2000}> 
          
           {index+1}. {items} Animation
        </Animatable.Text>
        )})
      }

{/* Linear Travel Animations By Anymatable library */}
<Animatable.Text
style={{margin:10,padding:5,backgroundColor:'white',maxWidth:100}}
  animation={linear}
  duration={2000}
  delay={1000}
  easing='ease-in-out'
  iterationCount='infinite'
  direction='alternate'
>
  liniear travel
</Animatable.Text>

<View style={{position:'relative',height:70,marginBottom:50,backgroundColor:'#ddeeda'}}>
<Animatable.View
style={{backgroundColor:'#faf49f',width:60,height:60,borderRadius:10,position:'absolute',top:0,left:30,
borderWidth:5,justifyContent:'center',borderColor:'blue'}}
animation={rotating}
duration={3000}
direction='normal'
easing='linear'
iterationCount='infinite'
> 
</Animatable.View>
<Text style={{top:15,left:40,color:'red',fontSize:12,position:'absolute',fontWeight:'bold'}}>Rotating</Text>
</View>

{/* Rack and pinion gear movment animations  start*/}
<View style={{position:'relative',height:70,marginBottom:50,backgroundColor:'#ddeeda'}}>
<Animatable.View
style={{backgroundColor:'#faf49f',width:60,height:60,borderRadius:15,position:'absolute',bottom:5,
borderWidth:5,justifyContent:'center',borderColor:'blue'}}
animation={rack}
duration={5000}
direction='alternate'
easing='linear'
iterationCount='infinite'
> 
</Animatable.View>
<Animatable.Text
animation={racktxt}
duration={5000}
direction='alternate'
easing='linear'
iterationCount='infinite'
style={{top:15,left:45,color:'red',fontSize:12,position:'absolute',
fontWeight:'bold'}}>Linear</Animatable.Text>
</View>
{/* Rack and pinion gear movment animations  End*/}

<Watch />
    </View>
  )
}

export default Anim

const styles = StyleSheet.create({})
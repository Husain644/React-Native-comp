import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';


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

  return (
    <View style={{ width: '100%', minHeight: 200, marginTop: 30, backgroundColor: 'lightgreen',paddingVertical:30}}>
        <Text>This is animations from react-native-animatable library</Text>
        <Button title={run?'stop animations':'start animations'} color={run?'#e84659':'#5a6de4'} 
        style={{padding:5}} onPress={setr} />

      {builtInAnimations.map((items,index)=>{
        return(
          <Animatable.Text 
          onPress={()=>{animRunner(index)}}
          key={index}
          style={{ marginTop:20, width: '90%',alignSelf:'center', fontSize: 20, textAlign: 'center',
          backgroundColor:index%2==0? 'pink' :'white'}}
          animation={run||anim===index?items:cstm_Anm} 
          duration={1000}
          direction='alternate'
          easing='ease'
          iterationCount='infinite'
          delay={2000}
          >
           {items} Animation
        </Animatable.Text>
        )})
      }


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

<Animatable.View
style={{backgroundColor:'#fff',width:50,height:50,margin:20,borderRadius:10,borderWidth:5,
borderColor:'blue'}}
animation={rotating}
duration={2000}
direction='normal'
easing='linear'
iterationCount='infinite'
> 
<Text>&&</Text>
</Animatable.View>
    </View>
  )
}

export default Anim

const styles = StyleSheet.create({})
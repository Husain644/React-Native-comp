import { useState } from 'react';
import {View,TouchableOpacity} from 'react-native' 
import * as Animatable from 'react-native-animatable';

export const AnimView=({animation='',duration=1000,direction='alternate',easing='ease',
  iterationCount='infinite',
  delay=200},props)=>{
  return(
    <Animatable.View 
    animation={animation}
    duration={duration}
    direction={direction}
    easing={easing}
    iterationCount={iterationCount}
    delay={delay}   
    >
      {props.children}
    </Animatable.View>
  )
}

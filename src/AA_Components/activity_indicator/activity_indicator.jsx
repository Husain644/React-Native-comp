import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { View,StyleSheet,ActivityIndicator as RnIndicator } from 'react-native';
import ProgressBar from './progressbar/progressbar';
import ReanimProgress from './reanim_progress';

const Activity_Indicatr = () => (
    <>      
  <ActivityIndicator
  style={{}}
   size="medium"  // or 'small', 'medium', 'large'
   animating={true} 
   hidesWhenStopped={true}
   color={MD2Colors.red800} />
    <RnIndicator />
    <RnIndicator size="large" />
    <RnIndicator size="small" color="#0000ff" />
    <RnIndicator size="large" color="#00ff00" />
    <RnIndicator size={150} color="red" animating={true}/>
    <ReanimProgress />
    <ProgressBar />
    </>
);

export default Activity_Indicatr;

const styles = StyleSheet.create({


})
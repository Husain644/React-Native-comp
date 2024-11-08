import { StyleSheet, Text, View,ScrollView, Animated, Button } from 'react-native'
import {React,useRef,} from 'react'
import { H3,H5 } from '../divider/heading'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Sldr from './sldr';


const slider = () => {
  const scrollRef = useRef();
  const handleScroll = (event) => {
    const positionX = event.nativeEvent.contentOffset.x;
    const positionY = event.nativeEvent.contentOffset.y;
   
  }


const ScrollTo = () => {
  console.log('Scroll')
  scrollRef.current?.scrollTo({
    x: 80,
    animated: true,
  });
}
  return (
    <View style={{paddingTop:30,gap:10}}>
          <H3 txt="Slider" style={{margin:0}}/>
    <H5 txt="animation slider" style={{color:'#fff',backgroundColor:'#999',margin:0}}/>
    <ProgressBar progress={1} 
       animatedValue={.5}
    color={MD3Colors.error50} />
   <Button title='animate' onPress={()=>{ScrollTo()}}/>

   <ScrollView horizontal
   contentContainerStyle={{}}
    onScroll={handleScroll}
   scrollEventThrottle={100}
   pagingEnabled={true}
   contentOffset={{x: 400, y: 0}}
     ref={scrollRef}
     endFillColor="red"
    onContentSizeChange={(e)=>{console.log(e)}}  //Called when scrollable content view of the ScrollView changes.
    showsHorizontalScrollIndicator={false}
>
        
          <H3 style={{width:400}} txt="hello slide1"/>
          <H3 style={{width:400}} txt="hello slide2"/>
          <H3 style={{width:400}} txt="hello slide3"/>
      </ScrollView>
      <Text>slider</Text>
      <Sldr />
    </View>
  )
}

export default slider

const styles = StyleSheet.create({})
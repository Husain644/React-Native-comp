import { StyleSheet, Text, View, ScrollView, Animated, Button,Dimensions } from 'react-native'
import { React, useRef,useState } from 'react'
import { H3, H5 } from '../divider/heading'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import MySlider from './sldr';
import { Data } from '../table/data';


const slider = () => {
  const width=Dimensions.get('window').width
  const scrollRef = useRef();
  const[index,setindex]= useState(1)
  const handleScroll = (event) => {
    const positionX = event.nativeEvent.contentOffset.x;
    // console.log(Math.round(positionX/width))
    // setindex(Math.round(positionX/width)+1)
  }

  const ScrollTo = () => {
    scrollRef.current?.scrollTo({
      x:width*index,
      animated: true,
    });
    setindex(index + 1)
  }
  return (
    <View style={{ paddingTop: 30, gap: 10 }}>
      <H3 txt="Slider" style={{ margin: 0 }} />
      <H5 txt="animation slider" style={{ color: '#fff', backgroundColor: '#999', margin: 0 }} />
      <ProgressBar progress={1}
        animatedValue={.5}
        color={MD3Colors.error50} />
      <Button title={`animate index ${index}`} onPress={() => { ScrollTo() }} />

      <ScrollView horizontal
        contentContainerStyle={{}}
        onScroll={handleScroll}
        scrollEventThrottle={100}
        pagingEnabled={true}
        contentOffset={{ x: 400, y: 0 }}
        ref={scrollRef}
        endFillColor="red"
        onContentSizeChange={(e) => { console.log(e) }}  //Called when scrollable content view of the ScrollView changes.
        showsHorizontalScrollIndicator={false}
      >

     {
      Data.map((item,i)=>{
        return(
          <View key={i} style={{ width: 150,borderRadius:5,borderWidth:1, backgroundColor: '#eaeaea', margin: 10 }}>
            <Text style={{paddingHorizontal:5}}>Name {item.name}</Text>
            <Text style={{paddingHorizontal:5}}>Roll {item.rol}</Text>
            <Text style={{paddingHorizontal:5}}>Class {item.class}</Text>
            <Text style={{paddingHorizontal:5}}>Ph {item.contact}</Text>
            <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap',borderTopWidth:1,paddingHorizontal:5}}
            >{item.subect.map((subect) =>{return( <Text >{subect}, </Text>)})}</View>
          </View>
        )
      })
     }
      </ScrollView>
      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',padding:10}}>
        <Button title="Previous" onPress={() => {
          if (index > 1) {
            setindex(index - 1)
          }
        }} />
        <Button title="Next" onPress={() => {
          scrollRef.current?.scrollTo({
            x:160*index,
            animated: true,
          })
          setindex(index + 1)
        }} />
      </View>
      <Button title="Reset" onPress={() => { setindex(1) }} />
      <MySlider />
    </View>
  )
}

export default slider

const styles = StyleSheet.create({})
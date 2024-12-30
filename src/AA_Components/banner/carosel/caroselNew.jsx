import { StyleSheet, Text, View,ImageBackground,useWindowDimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { Img,cs } from '../../../assets/assets';

const CaroselNew = () => {
    const width=useWindowDimensions().width
    const data=[Img.auto,Img.bike,Img.car,Img.parcel]
  return (
    <View style={{ flex: 1 }}>
    <Carousel
        loop
        width={width}
        height={width/2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index+1)}
        renderItem={({item,i}) => (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor:'pink',
                    padding:10
                }}
            >
             <ImageBackground resizeMode='cover' source={item} style={{flex:1,height:'100%'}}>
             <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    {i}
                </Text>
             </ImageBackground>
            </View>
        )}
    />
    <View style={[cs.rowCenter,cs.p20]}>
      
        {
           data.map((item,index)=>{
            return (
                <View key={index}><Text>{index+1}</Text></View>
            )
           })
        }
    </View>
</View>
  )
}

export default CaroselNew

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useId } from 'react'
import {FontIcon } from '../../../../../assets/assets';
import { useNavigation } from '@react-navigation/native';


const ItemsComp = ({ item }) => {
   const navigation=useNavigation();
   const ToDetails=(i)=>{
    navigation.navigate('details',{i})
   }
  const getRatings = (num = 1) => {
    let content = [];
    for (let i = 0; i < num; i++) {
      content.push(<FontIcon key={i} size={15} color='rgb(194, 166, 7)' />);
    }
    return content;
  }

  return (
    <TouchableOpacity onPress={()=>ToDetails(item)} style={{ width: '47%', padding: 2, borderWidth: 2, borderColor: '#ccc', borderRadius: 10, marginTop: 10, backgroundColor: 'yellow' }}>
      <ImageBackground key={item.uid} source={item.images[0]} resizeMode="cover" style={{ width: '100%', height: 200 }}>
        <TouchableOpacity style={{ padding: 5, backgroundColor: 'rgba(0,0,0,0.5)', top: 5, right: 5, position: 'absolute', borderRadius: 5, width: 40, alignItems: 'center' }}>
          <FontIcon name='heart-o' color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{
        flexDirection: 'row', paddingTop: 2, position: 'absolute', top: 5, backgroundColor: 'rgba(0,0,0,.3)', padding: 2, borderRadius: 3
      }}>{getRatings(item.rating)}</View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
        <View style={{ flex: 7 }}>
          <Text style={{ fontSize: 15, color: '#000', padding: 2 }}>{item.name}</Text>
          <Text style={{ fontSize: 10, width: 100, height: 22 }}>{item.desc}</Text>
        </View>
        <View style={{ flex: 2.5 }}>
          <TouchableOpacity style={{ padding: 5, backgroundColor: '#5f9ea0', borderRadius: 5 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>click</Text></TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemsComp;
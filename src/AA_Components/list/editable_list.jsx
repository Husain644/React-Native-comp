import { StyleSheet, Text, View, ScrollView, Button,TouchableOpacity,TextInput } from 'react-native'
import {React,useState} from 'react'
import { H4 } from '../divider/heading'
import { Data } from '../table/data'
import Animated,{withTiming,useSharedValue,useAnimatedStyle} from 'react-native-reanimated'
import { opacity } from 'react-native-reanimated/lib/typescript/Colors'

const EditableList = () => {
    const animVal=useSharedValue(0);
    const animStyle=useAnimatedStyle(()=>({
     opacity:animVal.value
    }))
 const editEnale=()=>{
  console.log('click hua he')
    if(animVal>0){animVal.value=withTiming(0,1000)}
    else{animVal.value=withTiming(1,1000)}
 }

  return (
    <View style={styles.container}>
      <H4 txt="Editable List" /> 
      <ScrollView contentContainerStyle={styles.list}
      >
        {Data.map((item, index) => {
          return (
            <View key={index} style={styles.item} >
              <Text style={{ fontSize:12 }} >{item.rol}</Text>
              <Text style={{ fontSize: 20 }} >{item.name}</Text>
              <Text style={{ fontSize:12 }} >{item.class}</Text>
              <View style={{width:150,flexDirection:'row',flexWrap:'wrap'}}>
                  {item.subect.map((sub,i)=>{return(<Text key={i}>{sub}, </Text>)})}</View>
              <TouchableOpacity  style={{backgroundColor:'#000',borderRadius:5}} onPress={()=>{editEnale();console.log('enable editing')}}>
                <Text  style={{color:'#fff',padding:5,fontSize:18}}>Edit</Text>
              </TouchableOpacity>
            </View>)
        })}
      </ScrollView>
      <Animated.View
      style={[{height:'100%',width:'100%',position:'absolute',backgroundColor:'#000',
            alignItems:'center',justifyContent:'center'},animStyle]}>
               <View style={{width:'100%',padding:10,backgroundColor:'#fff'}}>
                 <TextInput placeholder='name'/>
               </View>
      </Animated.View>
    </View>
  )
}

export default EditableList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingVertical: 20,
    backgroundColor: 'lightgreen',
    minWidth: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    minWidth: '95%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

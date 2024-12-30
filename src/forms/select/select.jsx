import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Select = () => {
    const [selected, setSelected] = useState(false)
    const [item, setItem] = useState('select one')
    const toggle=()=>{
        setSelected(!selected)
    }

  return (
    <View style={{padding:20,backgroundColor:'#ccc'}}>
      <Text style={{fontSize:25,color:'blue',textAlign:'center',borderBottomWidth:1}}>Select</Text>
       <TouchableOpacity onPress={toggle} 
       style={{padding:5,paddingHorizontal:10,flexDirection:'row',borderRadius:5,alignItems:'center',justifyContent:'space-between'
       ,backgroundColor:'#fff',
       borderWidth:1,marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:600,padding:2}}>{item}</Text>
            <Icon name={selected?"angle-up":"angle-down"} size={30} color="#000"/>    
     
       </TouchableOpacity>
       <View style={[{padding:5,backgroundColor:'#fff'},{height:selected?'auto':0,display:selected?'flex':'none'}]}>
            <TouchableOpacity style={{borderBottomWidth:1,margin:2}} onPress={()=>{setItem('item1');setSelected(false)}}>
                <Text style={{fontSize:18}}>item1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderBottomWidth:1,margin:2}} onPress={()=>{setItem('item2');setSelected(false)}}>
                 <Text style={{fontSize:18}}>item2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderBottomWidth:1,margin:2}} onPress={()=>{setItem('item3');setSelected(false)}}>
                  <Text style={{fontSize:18}}>item3</Text>
            </TouchableOpacity>
       </View>
    </View>
  )
}

export default Select

const styles = StyleSheet.create({})
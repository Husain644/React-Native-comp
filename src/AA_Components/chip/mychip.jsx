import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {useState,React} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Mychip = () => {
    const [items,setItems]=useState([1,2,3,4])
    const remover=(item2)=>{
        setItems(items.filter(item=>item!==item2))
  
    }
 
  return (
    <View  style={{padding:10,backgroundColor:'#fff',flexDirection:'row',gap:20,flexWrap:'wrap'}}>
       { items.includes(1)&& <View style={{flexDirection:'row',padding:5,borderRadius:5,backgroundColor:'#ebeaea',alignItems:'center',
            justifyContent:'center'}}>
            <Text style={{fontSize:15,marginLeft:10,color:'#333'}}>
                chip  1
                </Text>
          <TouchableOpacity  onPress={()=>{remover(1)}} style={{marginLeft:10}}>
            <Icon  name="remove" color="" size={20}/>
          </TouchableOpacity>
        </View>}

        {items.includes(2)&&
            <View style={{flexDirection:'row',padding:5,borderRadius:5,backgroundColor:'#ebeaea',alignItems:'center',
            justifyContent:'center'}}>
            <Text style={{fontSize:15,marginLeft:10,color:'#333'}}>chip 2</Text>
          <TouchableOpacity onPress={()=>{remover(2)}} style={{marginLeft:10}}>
            <Icon  name="trash-o" color="" size={15}/>
          </TouchableOpacity>
        </View>}

       {items.includes(3)&& 
        <View style={{flexDirection:'row',padding:5,borderRadius:5,backgroundColor:'#ebeaea',alignItems:'center',
            justifyContent:'center'}}>
            <Text style={{fontSize:15,marginLeft:10,color:'#333'}}>chip 3</Text>
          <TouchableOpacity  onPress={()=>{remover(3)}} style={{marginLeft:10}}>
            <Icon  name="rotate-right" color="" size={15}/>
          </TouchableOpacity>   
        </View>}

        {items.includes(4)&&
        <View style={{flexDirection:'row',padding:5,borderRadius:5,backgroundColor:'#ebeaea',alignItems:'center',
            justifyContent:'center'}}>
             <TouchableOpacity   onPress={()=>{remover(4)}}  style={{marginLeft:5}}>
            <Icon  name="power-off" color="red" size={20}/>
          </TouchableOpacity>
            <Text style={{fontSize:15,marginHorizontal:5,color:'#333'}}>chip 4</Text>
  
        </View>
        }
        
    </View>
  )
}

export default Mychip

const styles = StyleSheet.create({})
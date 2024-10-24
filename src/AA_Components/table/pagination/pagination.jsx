import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from "react-native";
import {React,useState} from "react";
import { H3 } from "../../divider/heading";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Data2 } from "../data";


const Pagination = () => {
    const itmShow=10    ///how much item show at once in the screen
    const [page,setPage]=useState(1)   ///page number 
    const dataSlice=Data2.slice((page-1)*itmShow,page*itmShow)   //sliced data from main data
   
  return ( 
   <>
        <H3 txt="Pagination table" style={{backgroundColor:'blue',color:'#fff'}}/>    
        <View style={styles.container}>
        <View style={[styles.wrapper,styles.headerWrapper]}>
            <Text style={[styles.item,{fontWeight:'normal',color:'#fff',flex:1}]}>Sr No</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Name</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff',flex:1.2}]}>Number</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Email</Text>
        </View>
      {dataSlice.map((item, index) => {
        return (
          <View key={item.id} style={[styles.wrapper,index%2===0&&{backgroundColor:'#e7e2c4'}]}>
            <Text style={[styles.item,{flex:1}]}>
              {item.id}
            </Text>
            <Text style={styles.item}>
              {item.full_name}
            </Text>
            <Text style={[styles.item,{flex:1}]}>
              {item.number}
            </Text>
            <Text style={styles.item}>
              {item.email}
            </Text>
          </View>
        );
      })}
         </View>
         <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
         <TouchableOpacity style={{borderWidth:1,borderRadius:20,padding:5}} onPress={()=>setPage(1)}>
            <Icon name="long-arrow-left" size={25} color="#000" /> 
          </TouchableOpacity>

            <TouchableOpacity disabled={page<= 1} style={{borderWidth:1,padding:5,borderRadius:5,fontWeight:'bold',opacity:page<= 1?0.3:1}} 
            onPress={()=>{setPage(page-1)}}>
              <Text style={{fontSize:16,color:'#000'}}>Page {page-1}</Text>
            </TouchableOpacity>
             <View style={{borderBottomWidth:2,padding:5,fontWeight:'bold',backgroundColor:'#fff'}} 
             onPress={()=>{}}>
              <Text style={{fontSize:16,color:'#000'}}>Page {page}</Text>
            </View>
               <TouchableOpacity disabled={Data2.length<= page*itmShow} 
               style={{borderWidth:1,padding:5,borderRadius:5,fontWeight:'bold',opacity:Data2.length<= page*itmShow?0.3:1}} 
                onPress={()=>{setPage(page+1)}}>
               <Text style={{fontSize:16,color:'#000'}}>Page {page+1}</Text>
             </TouchableOpacity>
          <TouchableOpacity style={{borderWidth:1,borderRadius:20,padding:5}} onPress={()=>setPage(Math.floor(Data2.length/itmShow))}>
            <Icon name="long-arrow-right" size={25} color="#000" /> 
          </TouchableOpacity>
          
          </View> 
   </>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor:'#ccc',    
  }, 
  headerWrapper:{
    backgroundColor:'#1796b0',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignItems:'center'
  }, 
    wrapper: {
    flexDirection: "row",
    width:'100%',
    backgroundColor:'orange',
    margin:1
  },
  item:{
    flex:3,
    textAlign: 'center',
    padding:3,
    
  }
});

import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { H6 } from "../divider/heading";

const Table = () => {
  const Data = [
    { name: "Husain", rol: 120, class: "10th" ,contact:'9198989898',subect:['hindi','english','math','science','biology','social-scince']},
    { name: "Rehan", rol: 90, class: "12th",contact:'9198989898',subect:['hindi','english','math','science','biology','social-scince']},
    { name: "Sumit", rol: 80, class: "11th" ,contact:'9198989898',subect:['hindi','english','math','science','biology','social-scince']},
    { name: "Asif", rol: 50, class: "9th",contact:'9198989898',subect:['hindi','english','math','science','biology','social-scince']},
    { name: "sakib", rol: 70, class: "8th" ,contact:'9198989898',subect:['hindi','english','math','science','biology','social-scince']},
    { name: "Rohan", rol: 85, class: "10th" ,contact:'9198989898',subect:['hindi','english','math','science','biology','social-scince']}
  ]

  return (
   <>


        <H6 txt="Table1" style={{backgroundColor:'red',color:'#fff'}}/>
       <View style={styles.container}>
        <View style={[styles.wrapper,styles.headerWrapper]}>
            <Text style={[styles.item,{fontWeight:'normal',color:'#fff',width:'10%'}]}>Sr No</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Name</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Roll</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Class</Text>
        </View>
      {Data.map((item, index) => {
        return (
          <View key={index} style={[styles.wrapper,index%2===0&&{backgroundColor:'#edcb0e'}]}>
            <Text style={[styles.item,{width:'10%'}]}>
              {index+1}
            </Text>
            <Text style={styles.item}>
              {item.name}
            </Text>
            <Text style={styles.item}>
              {item.rol}
            </Text>
            <Text style={styles.item}>
              {item.class}
            </Text>
          </View>
        );
      })}
    </View>




    <H6 txt="Table2" style={{backgroundColor:'red',color:'#fff'}}/>
    <View style={styles.container}>
        <View style={[styles.wrapper,styles.headerWrapper]}>
            <Text style={[styles.item,{fontWeight:'normal',color:'#fff',width:'10%'}]}>Sr No</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Name</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Roll</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff'}]}>Class</Text>
        </View>
      {Data.map((item, index) => {
        return (
          <View key={index} style={[styles.wrapper,index%2===0&&{backgroundColor:'#e7e2c4'}]}>
            <Text style={[styles.item,{width:'10%'}]}>
              {index+1}
            </Text>
            <Text style={styles.item}>
              {item.name}
            </Text>
            <Text style={styles.item}>
              {item.rol}
            </Text>
            <Text style={styles.item}>
              {item.class}
            </Text>
          </View>
        );
      })}
    </View>




    <H6 txt="Table3" style={{backgroundColor:'#2fe81d',color:'blue'}}/>
    <ScrollView contentContainerStyle={[styles.container]}>
        <View style={[styles.wrapper,styles.headerWrapper,{backgroundColor:'#f34216'}]}>
            <Text style={[styles.item,{fontWeight:'normal',color:'#fff',width:40}]}>Sr No</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff',width:100}]}>Name</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff',width:100}]}>Roll</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff',width:100}]}>Class</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff',width:100}]}>Contact</Text>
            <Text style={[styles.item,{fontWeight:'bold',color:'#fff',width:100}]}>Subects</Text>
        </View>
      {Data.map((item, index) => {
        return (
          <View key={index} style={[styles.wrapper,index%2===0&&{backgroundColor:'#edcb0e'}]}>
            <Text style={[styles.item,{width:40}]}>
              {index+1}
            </Text>
            <Text style={[styles.item,{width:100}]}>
              {item.name}
            </Text>
            <Text style={[styles.item,{width:100}]}>
              {item.rol}
            </Text>
            <Text style={[styles.item,{width:100}]}>
              {item.class}
            </Text>
          </View>
        );
      })}
    </ScrollView>
   </>
  );
};

export default Table;

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
    width:'30%',
    textAlign: 'center',
    padding:6,
    
  }
});

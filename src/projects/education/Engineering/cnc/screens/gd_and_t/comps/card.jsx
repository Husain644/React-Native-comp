import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet, Dimensions,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, imageUrl }) => {
    const navigation=useNavigation();
    const navigate=()=>{
        navigation.navigate('gdandtcomp',{title,imageUrl})
    }
  return (
   <View style={{width:'50%'}}>
        <TouchableOpacity onPress={navigate} style={styles.card} activeOpacity={0.5}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
   </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding:8,
    margin:5,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

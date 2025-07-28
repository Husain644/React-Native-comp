import { ImageBackground, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { syllabus } from '../data/data'

const NavigationHome = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
         {
             syllabus.map((item,index)=>{
               return(            
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate(item.screen)}} style={styles.cardContainer}>
                    <ImageBackground source={ {uri: item.img} } 
                        imageStyle={{ borderRadius: 10 }}
                        resizeMode="cover" style={styles.image}>
                          <View style={styles.textContainer}>
                            <Text style={styles.textTitle}>
                              {item.name}
                            </Text>
                          </View>
                        </ImageBackground> 
                  </TouchableOpacity>
             )})
           }
    </ScrollView>
  )
}

export default NavigationHome

const styles = StyleSheet.create({
  container:{
    padding: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
    cardContainer:{
    width: '90%',
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    },
    image:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
    },
    textContainer:{
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
    },
    textTitle:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    letterSpacing: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    }
})
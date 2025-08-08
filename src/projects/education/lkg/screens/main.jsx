import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import { Data } from '../assets/data'
import { useNavigation } from '@react-navigation/native'

const Main = () => {
    const navigation=useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.mainContainer} >
     {
        Data.map((item,index)=>{return(
        <TouchableOpacity style={styles.container} key={index} onPress={()=>{navigation.navigate(item.screen)}}>
            <Image style={styles.img} source={item.img} resizeMode='stretch' />
            <Text style={styles.txt} >{item.name}</Text>
        </TouchableOpacity>
        )})
     }
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        backgroundColor:'#999'
    },
    container:{
        width:'32%',
        borderWidth:2,
        borderRadius:5,
        marginTop:10,
        backgroundColor:'#fff000'
    },
    img:{
        width:'100%',
        height:200
    },
    txt:{

        fontSize:25,
        fontWeight:'600',
        left:10
    }
})
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import Bg from '../../comps/common/bg'
import { HindiData } from '../../assets/data'
import { useNavigation } from '@react-navigation/native'

const Hindi = () => {
  const navigation=useNavigation();
  return (
    <Bg>
   <View style={styles.mainContainer}>
        {
        HindiData.map((item,index)=>{
          return(
              <TouchableOpacity  key={index}  style={styles.btn}
              onPress={()=>{navigation.navigate(item.screen)}}>
                   <Image source={item.url} style={styles.img}/>
                   <Text style={styles.txt} >{item.name}</Text>
              </TouchableOpacity>
          )})
       }
    </View>
    </Bg>
  )
}

export default Hindi;

const styles = StyleSheet.create({
   mainContainer:{
  flexDirection:'row',
  flexWrap:'wrap'
   },
   btn:{
    width:150,
    height:150,
    borderRadius:15,
    backgroundColor:'#eaea',
    padding:10
   },
   img:{
    width:'100%',
    height:130
   },
   txt:{
    fontSize:25,
    color:'#fff'
   }
});
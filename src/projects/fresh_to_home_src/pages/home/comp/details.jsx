import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, useWindowDimensions, ImageBackground } from 'react-native'
import {React,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { IoIcon, FontIcon } from '../../../../../assets/assets'
import css from '../../../../../AA_Components/css/css'

const Details = ({ route }) => {
    const { width, height } = useWindowDimensions()
    const navigation = useNavigation();
    const data = route.params.i
    const [quantity,setQuantity]=useState(1)
    const ToCart=(i)=>{
        navigation.navigate('cart',{i,quantity})
       }

    return (

        <View style={{}}>
            <ScrollView horizontal={true}  pagingEnabled >
                {
                    data.images.map((item, index) => {
                        return (<ImageBackground key={index} style={{ width: width,height:300 }} resizeMode='cover' source={item}>
                            <View style={[css.rowBetween, css.ph10, css.mv20]}>
                                <TouchableOpacity style={styles.imgIn}
                                    onPress={() => { navigation.navigate('home')}}>
                                    <FontIcon name='long-arrow-left' color='#000' size={30} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.imgIn}>
                                    <FontIcon name='heart-o' color='#000' size={30} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.imgIn}>
                                    <FontIcon name='whatsapp' color='#000' size={30} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 18, fontWeight: 200, color: '#000' }}>{index + 1}/{data.images.length}</Text>
                            </View>
                        </ImageBackground>)
                    })
                }
            </ScrollView>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, color: '#000' }}>
                    {data.name}
                </Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>
                    {data.desc}
                </Text>
            </View>

{/* review section Start */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
                    <View style={{flexDirection:'row',gap:10,alignItems:'flex-end'}}>
                    <Text style={{fontSize:20,color:'#ccc',textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>₹{data.notprice}.00</Text>
                    <Text style={{fontSize:25,color:'#008000'}}>₹{data.price}.00<Text style={{fontSize:20,color:'#000'}}>/kg</Text>
                    </Text>
                    </View>
                      <View style={{flexDirection:'row'}}>
                      <FontIcon color='#FFA500'/><FontIcon color='#FFA500'/><FontIcon color='#FFA500'/><FontIcon color='#FFA500'/><FontIcon />
                     
                      </View>
                       
                    </View>
                
{/* review section and price End */}
    
            <View style={{ width:width, flexDirection: 'row', justifyContent: 'flex-start',paddingHorizontal:20,alignItems:'center'}}>
              <View style={{borderWidth:1,borderRadius:5,flexDirection:'row',width:150,justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=>{setQuantity(i=>i>1?i-1:1)}}
                  
                  style={{borderRightWidth:1,padding:10}}><FontIcon  name="minus"/></TouchableOpacity>
                  <Text style={{fontSize:20,padding:5}}>{quantity}</Text>
                  <TouchableOpacity onPress={()=>{setQuantity(i=>i+1)}} style={{borderLeftWidth:1,padding:10}}><FontIcon name="plus"/></TouchableOpacity>
              </View>
                  <View style={{marginLeft:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>(Totel Price ₹= {data.price*quantity}.00)</Text>
                  </View>
            </View>
            <TouchableOpacity onPress={()=>ToCart(data)} style={{width:120,backgroundColor:'#008000',borderRadius:5,justifyContent:'center',padding:8,
                marginTop:20,alignSelf:'flex-end',right:20}}>
                    <Text style={{fontSize:18,fontWeight:500,color:'#fff',textAlign:'center'}}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details
const styles = StyleSheet.create({

    imgIn: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        borderRadius: 25,
        padding: 2,

    }
})
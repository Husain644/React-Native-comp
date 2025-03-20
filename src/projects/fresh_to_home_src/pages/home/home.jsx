import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground,
   ScrollView, useWindowDimensions ,FlatList} from 'react-native'
import { React, useEffect,useState } from 'react'
import { Img,FontIcon } from './../../../../assets/assets';
import Header from './../components/header/header'
import ItemsComp from './comp/items_comp';
import { DummyData } from '../../utils/dummy_data';


const Home = () => {
  const width = useWindowDimensions().width
  const [carIndx,setCarIndx]=useState(1)
  useEffect(()=> { })



  return (
    <View style={{ flex: 1 }}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingHorizontal: 20,
        borderBottomWidth: 1, borderColor: '#999'}}>
        <TouchableOpacity style={{
          backgroundColor: '#e5e8e8', borderWidth: 1, borderColor: '#ccc', width: '90%', fontSize: 18, borderRadius: 10, flexDirection: 'row', padding: 5, gap: 5
        }}><FontIcon name="search" size={25} /><Text style={{ fontWeight: 'bold', color: '#000' }}>Search...</Text></TouchableOpacity> 
        <Header bg={"transperent"} />
      </View>
            <FlatList
            numColumns={2}
            data={DummyData}
            renderItem={({item})=>(<ItemsComp item={item}/>)}
            columnWrapperStyle={{justifyContent:'space-evenly'}}
            />

            
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, color: '#000' }}>Explore</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: '#999' }}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.exploreImg}>
          <ImageBackground source={Img.parcel} style={styles.img}><Text style={styles.expText}>parcel</Text></ImageBackground>
          <ImageBackground source={Img.auto} style={styles.img}><Text style={styles.expText}>auto</Text></ImageBackground>
          <ImageBackground source={Img.car} style={styles.img}><Text style={styles.expText}>car</Text></ImageBackground>
          <ImageBackground source={Img.bike} style={styles.img}><Text style={styles.expText}>bike</Text></ImageBackground>
        </View>
      </View>
      {/* ads carosel */}
      <View style={{ padding:20,paddingHorizontal:0, width: width, backgroundColor: '#eaea' }}>
        <ScrollView
          onScroll={(event) => { 
            setCarIndx(Math.floor((event.nativeEvent.contentOffset.x+(width/2))/width)) }}
          scrollEventThrottle={70}
          horizontal
          pagingEnabled
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.adsContainer}>
          <TouchableOpacity activeOpacity={0.6}
            style={[styles.adsWrapper, {  width: width }]}>
            <View style={styles.adsTxtWrap}>
              <Text >Refferyour freinds and Earn ₹50</Text>
              <Text >comp 1</Text>
            </View>
            <ImageBackground source={Img.rapido} style={styles.img}>
            </ImageBackground>
          </TouchableOpacity>   
          <TouchableOpacity activeOpacity={0.6}
            style={[styles.adsWrapper, {  width: width }]}>
            <View style={styles.adsTxtWrap}>
              <Text >Refferyour freinds and Earn ₹50</Text>
              <Text >comp 2</Text>
            </View>
            <ImageBackground source={Img.web} style={styles.img}>
            </ImageBackground>
          </TouchableOpacity>    
        </ScrollView>
        <View style={{
          position: 'absolute', bottom: 20, left: '50%', backgroundColor: '#ccc', height: 15, width: 50, zIndex: 9, flexDirection: 'row'
          , alignItems: 'center', justifyContent: 'center', gap: 10, borderRadius: 5
        }}>
          <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: carIndx===0?'#ccc':'#fff', borderWidth: 2, borderColor: '#fff' }}></View>
          <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: carIndx===1?'#ccc':'#fff', borderWidth: 2, borderColor: '#fff' }}></View>
        </View>
      </View>
      {/* ads carosel end */}
      <View style={{position:'absolute',bottom:0,left:10}}>
        <Text style={{fontSize:50,fontFamily:'Roboto',color:'#ccc',opacity:0.7}}>#go Rapido</Text>
        <Text style={{fontSize:20}}>made For India 🇮🇳</Text>
        <Text style={{fontSize:16}}>❤️ Crafted in Jaipur</Text>
      </View>
     
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  exploreImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff'
  },
  img: {
    width: 80,
    aspectRatio: 1,
    position: 'relative'
  },
  expText: {
    position: 'absolute',
    bottom: -10,
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: 15
  },
  adsContainer: {
    gap:0,
    padding:0
  },
  adsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal:30,
    borderWidth: 1,
    borderColor: '#999',
  },
  adsTxtWrap:{
    borderWidth:1,
  }
})
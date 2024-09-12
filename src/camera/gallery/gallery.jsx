import { StyleSheet, Text, View, Button, Image,FlatList,ScrollView } from 'react-native'
import { React, useState,useEffect } from 'react'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'

const Gallery = ({navigation}) => {
    const [photos, setPhotos] = useState(null)
    const[num,setNum] = useState(2000)
  
    const get = async () => {
        const res = await CameraRoll.getPhotos({ first:num, assetType: 'Photos', });
        setPhotos(res.edges)
    }
    const loadMore=()=>{
        setNum(num=>num+50)
        console.log(num)
    }
    useEffect(() =>{get()},[num])
  

    return (
    <View style={{flex:1,display:'relative'}}>
          <Button title="Go Back" style={{position:'absolute',top:0}} onPress={()=>{navigation.goBack()}}></Button>
            <FlatList
            numColumns={2}
            initialNumToRender={20}
              style={styles.container}
                data={photos}
                renderItem={({item }) => (
                    <View style={{width:'50%',height:200,backgroundColor:'#fff',padding:3}}>
                        <Image style={{width:'100%',height:'100%'}} source={{ uri: item.node.image.uri }} />
                    </View>
                )}
            />
        

    </View>
    )
}

export default Gallery

const styles = StyleSheet.create({
    container:{
        width:'95%',
        marginRight:'auto',
        marginLeft:'auto'
        
    }
})
import { StyleSheet, Text, View, ActivityIndicator, Button, TouchableOpacity, Image } from 'react-native'
import { React, useEffect, useState, useCallback, useRef } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Camera, useCameraPermission, useCameraDevice } from 'react-native-vision-camera'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { savePicture } from './saveimg';


const CameraHome = () => {
    const navigation = useNavigation();

    //all state 
    const [isActive, setIsActive] = useState(true)
    const [imageData, setImageData] = useState()
    const [camConfig, setCamConfig] = useState(
        {
            camSide: 'back',
            flash: 'off',
            zoom: 0,
            autoFocus: 'on',
            whiteBalance: 'auto',

        }
    )

    const sideChange = () => {
        if (camConfig.camSide == 'back') {
            setCamConfig({ ...camConfig, camSide: 'front',flash: 'off'})
        }
        else {
            setCamConfig({ ...camConfig, camSide: 'back' })
        }
    }

    const device = useCameraDevice(camConfig.camSide);
    const { hasPermission, requestPermission } = useCameraPermission();

    const camera = useRef(null)

    const takePhoto = async () => {
        if (camera != null) {
            const data = await camera.current.takePhoto({ flash: camConfig.flash })
            setImageData(data.path)
            savePicture(data.path)
        }
    }


    useEffect(() => {
        if (!hasPermission) { requestPermission() }
    },
        [hasPermission])

    useFocusEffect(
        useCallback(() => {
            setIsActive(true);
           
            return () => {
                setIsActive(false);
               
            }
        }, []
        ))

    if (!hasPermission) {
        return <ActivityIndicator />;
    }
    if (!device) {
        return <NoCamera />;
    }
    return (<> 
            <View style={{ flex: 1 }}>
                <Camera style={StyleSheet.absoluteFill}
                    device={device} isActive={isActive} ref={camera} photo={true} />
                <TouchableOpacity style={styles.takeBtn} onPress={takePhoto}></TouchableOpacity>
                <TouchableOpacity style={[styles.takeBtn, { height: 30, width: 30, right: '25%', bottom: 35, borderColor: 'pink' }]}
                    onPress={sideChange}>
                    <Icon name="cached" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.camIcon} onPress={() => {
                    if (camConfig.flash == 'on') {
                        setCamConfig({ ...camConfig, flash: 'off' })
                    }
                    else {
                        setCamConfig({ ...camConfig, flash: 'on' })
                    }
                }}>
                    {camConfig.flash == 'on' ? <Icon name="flash" size={30} color="#fff" /> :
                        <Icon name="flash-off" size={30} color="#fff" />}
                </TouchableOpacity>
                {imageData!=null && <TouchableOpacity  onPress={()=>{navigation.navigate('Photo',{img:imageData})}}  style={styles.img}>         
                     <Image  source={{uri:'file://'+imageData}} 
                      style={{ height:60, width:60, borderRadius:30, borderWidth:3, borderColor:'#fff',padding:5}} />
                
                </TouchableOpacity>}
            </View>
            
</>

    )
}
export default CameraHome
const styles = StyleSheet.create({
    takeBtn: {
        position: 'absolute',
        height: 60,
        width: 60,
        bottom: 20,
        right: '50%',
        transform: [{ translateX: 25 }],
        backgroundColor: 'transparent',
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 30,
    },
    camIcon: {
        position: 'absolute',
        top: 150,
        right: 20,
        opacity: 0.7
    },
    img:{
        position:'absolute',
        bottom:25,
        left:50,
      

    }
})

const NoCamera = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ width: '100%', textAlign: 'center', color: 'red', backgroundColor: '#fff', fontSize: 25 }}>
                No Camera Found !!</Text>
        </View>
    )
}
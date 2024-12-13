import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { React, useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Animated, { useSharedValue, withTiming, useAnimatedStyle,interpolate,interpolateColor } from 'react-native-reanimated';

const FabButton = () => {

    const data = [{ name: 'search', icon: 'search' }, { name: 'profile', icon: 'user' }, { name: 'setting', icon: 'cog' }, 
    { name: 'file', icon: 'folder-o' }]
    const [activeMenu, setActiveMenu] = useState(0)
    const handleMenu = (index) => { setActiveMenu(index) }

    const show=useSharedValue(1)
    const rounded=useSharedValue(1)
    const toggle=()=>{
        show.value=withTiming(show.value===1?2:1,{duration:300})
        rounded.value=withTiming(rounded.value===1?2:1,{duration:1000})
    }
    const animComp=useAnimatedStyle(()=>{
        const lft=interpolate(show.value,[1,2],[0,-100])
        return{
            left:lft
        }
    })
    const animBtn=useAnimatedStyle(()=>{
        const rotate=interpolate(rounded.value,[1,2],[0,360])
        return{
            transform: [{ rotate: `${rotate}deg` }],
            color:interpolateColor(rounded.value,[1,2],["#000","#ccc"])
        }})

        const AnimIcon=Animated.createAnimatedComponent(Icon)
    return (
        <View style={{ width: '90%', margin: 10, alignSelf: 'center', borderWidth: 1, overflow: 'hidden'}}>
            <Animated.View style={[styles.bar,animComp]}>

                {data.map((item, index) =>{ 
                    return (
                        <TouchableOpacity key={index} style={[styles.menu, activeMenu === index && styles.active_menu]}
                         onPress={() => { handleMenu(index) }}>
                            <Icon name={item.icon} size={35} color="#fff" />
                            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 12 }}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </Animated.View>
            <TouchableOpacity style={{
                position: 'absolute', bottom: 30, right: 50, backgroundColor: 'blue', padding: 10, borderRadius: 50,
                height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10
            }} onPress={toggle}  > 
                <View   >
                    <AnimIcon style={[animBtn]} name={"plus"} size={35}  />
                </View>
                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 15 }}>click</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FabButton;

const styles = StyleSheet.create({
    bar: {
        position: 'relative',
        bottom: 0,
        width: 80,
        left: 0,
        padding: 5,
        gap: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 9,
        elevation: 1, // Android only property for shadows
    },
    menu: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'skyblue',
        borderRadius: 15,
        padding: 5,

    },
    active_menu: {
        borderColor: 'blue',
        borderWidth: 2
    }
})
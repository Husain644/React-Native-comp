import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import img from '../../../assets/images/md.jpg'

const Story = () => {

    return (
        <View style={{ padding: 10, backgroundColor: '#cccc' }}>
            <Text>Insta Story</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={[styles.storyWrapper, { borderColor: '#d8097a', }]}>
                    <Image source={img} style={styles.story} />
                </View>
                <View style={[styles.storyWrapper, { borderColor: '#d8097a', }]}>
                    <Image source={img} style={styles.story} />
                </View>
                <View style={[styles.storyWrapper, { borderColor: '#d8097a', }]}>
                    <Image source={img} style={styles.story} />
                </View>
                <View style={[styles.storyWrapper, { borderColor: '#fff',borderWidth:2 }]}>
                    <Image source={img} style={styles.story} />
                </View>
            </View>
            <Icon name="heart" size={20} color="#f00" />
            <Icon name="heart" size={20} color="#fff" />
        </View>
    )
}

export default Story

const styles = StyleSheet.create({
    storyWrapper: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#d8097a',
        padding: 2,
        backgroundColor: '#fff'
    },
    story: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        resizeMode: 'cover',
        borderWidth:1,
        borderColor: '#ccc',
        
    }
})
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDrawerStatus } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title = '', bg = '#ccc' }) => {
    const navigation = useNavigation()
    const isDrawerOpen = useDrawerStatus()
    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingHorizontal: 20,
            borderBottomWidth: 1, borderColor: '#999'
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#e5e8e8', borderWidth: 1, borderColor: '#ccc', width: '90%', fontSize: 18, borderRadius: 10, flexDirection: 'row', padding: 5, gap: 5
            }}><FontIcon name="search" size={25} /><Text style={{ fontWeight: 'bold', color: '#000' }}>Search...</Text></TouchableOpacity>

            <View style={{
                height: 50, backgroundColor: bg, flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between'
                , paddingHorizontal: 15
            }}>
                <Text style={{ fontSize: 20 }}>{title}</Text>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}
                    style={{}}>
                    {
                        isDrawerOpen === "open" ? <Icon name="close" size={35} color="#000" /> : <Icon name="menu" size={35} color="#000" />
                    }
                </TouchableOpacity>
            </View>
        </View>



    )
}

export default Header

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { FontIcon } from '../../../../assets/assets'
import css from '../../../../AA_Components/css/css'
import AddrListItem from '../components/addrListItem'
import { useNavigation } from '@react-navigation/native'


const PickDrop = () => {
    const navigation = useNavigation()
    const [pickDropAdrr, setPickDropAddr] = useState({
        pick: '',
        drop: ''
    })
    const [pickDrop, setPickDrop] = useState('Drop')
    const [placeholder, setPlaceHolder] = useState({val:'your current location',color:'#000'})
    console.log(pickDropAdrr)
    return (
        <>
            <View style={[css.rowBetween, { padding: 10 }]}>
                <View style={[css.rowStart, { gap: 10 }]} >
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <FontIcon name={"long-arrow-left"} size={25} />
                    </TouchableOpacity>
                    <Text style={[css.h4, { color: '#999' }]}>{pickDrop}</Text>
                </View>
                <View style={[css.border, css.rowBetween, css.p5, css.shadow, css.g10]}>
                    <Text style={css.h7}>For me</Text>
                    <FontIcon name='chevron-down' size={15} />
                </View>
            </View>
            <View style={css.container}>
                <View style={[css.border, css.p5, css.shadow, { width: '95%', backgroundColor: '#ccc' }]}>
                    <View style={[css.rowStart, css.g10]}>
                        <FontIcon name='bullseye' color="green" />
                        <TextInput   value={pickDropAdrr.pick}
                            onChangeText={(e) => { setPickDropAddr({ drop: pickDropAdrr.drop, pick: e }) }}
                            onFocus={() => { setPickDrop("Pick"), setPlaceHolder({val:'Pickup location',color:'#999'}) }}
                            onBlur={() => { pickDropAdrr.pick === '' && setPlaceHolder({val:'your current location',color:'#000'}) }}
                            placeholder={placeholder.val} placeholderTextColor={placeholder.color}
                            style={[css.h7, { borderBottomWidth: 1, paddingVertical: 5, flex: 1 }]} />
                    </View>
                    <View style={[css.rowStart, css.g10]}>
                        <FontIcon name='bullseye' color="red"  />
                        <TextInput  value={pickDropAdrr.drop}
                        onChangeText={(e) => { setPickDropAddr({pick:pickDropAdrr.pick,drop:e }) }}
                        onFocus={() => { setPickDrop("Drop") }} 
                        autoFocus={true} placeholder='Drop location' style={[css.h7, { paddingVertical: 5, flex: 1 }]} />
                    </View>
                </View>  
                <View style={[css.border, css.rowStart, css.p5, css.g10, css.m10, { alignSelf: 'flex-start' }]}>
                    <FontIcon name="map-marker" color='blue' size={25} />
                    <Text style={css.h7i}>Select on map</Text>
                </View>
            </View>
            <ScrollView>
                <AddrListItem addr="Sindhi Camp" />
                <AddrListItem addr="200 feet" />
                <AddrListItem addr="Sodala metro" />
                <AddrListItem addr="Hava Mahal" />
                <AddrListItem addr="Sindhi Camp" />
                <AddrListItem addr="200 feet" />
                <AddrListItem addr="Sodala metro" />
                <AddrListItem addr="Hava Mahal" />
                <AddrListItem addr="Sindhi Camp" />
                <AddrListItem addr="200 feet" />
                <AddrListItem addr="Sodala metro" />
                <AddrListItem addr="Hava Mahal" />
                <AddrListItem addr="Sindhi Camp" />
                <AddrListItem addr="200 feet" />
                <AddrListItem addr="Sodala metro" />
                <AddrListItem addr="Hava Mahal" />
            </ScrollView>
        </>
    )
}

export default PickDrop

const styles = StyleSheet.create({
    header: {
        padding: 10,

    }
})
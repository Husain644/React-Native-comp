import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { React, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { H4 } from '../divider/heading';

const Menu = () => {
    const [modal, setShowModal] = useState(0)
    const ToggleModal = (num) => { num !== modal ? setShowModal(num) : setShowModal(0) }
    const height = Dimensions.get('window').height;
    console.log('hello')

    return (
        <View style={{ padding: 20, borderWidth: 1, height: height, gap: 30 }}>
            <H4 txt="this is modal"/>
            {/* backdrop start here */}
            {modal !== 0 && <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff', zIndex: 9 }}>
                <TouchableOpacity onPress={() => { ToggleModal(0) }}
                    style={{ height: '100%', width: '100%', backgroundColor: '#ccc' }}
                ></TouchableOpacity>
            </View>}

            {/* backdrop end here */}
            {/* modal 1 start from here */}
            <TouchableOpacity style={{
                borderWidth: 1, borderRadius: 20, borderColor: '#999', backgroundColor: '#ebeaea'
            }} onPress={() => { ToggleModal(1) }}>
                <Text style={{ fontSize: 20, color: 'blue', padding: 5, textAlign: 'center', fontWeight: 'bold' }}>Long Text</Text>
            </TouchableOpacity>
            {modal === 1 && <View style={{
                alignSelf: 'center', zIndex: 10, top: 100, backgroundColor: '#fff',
                height: height - 200, width: '90%', position: 'absolute', borderRadius: 20, borderWidth: 1
            }}>
                <View style={{ height: 50, }}>
                    <Icon style={{ position: 'absolute', right: 20, top: 10 }} name="envelope-o" size={25} color="red" />
                    <Text style={{
                        fontSize: 20, color: '#000', padding: 5, textAlign: 'center',
                        borderBottomWidth: 2, borderBottomColor: '#999', fontWeight: 'bold'
                    }}>This is a Modal</Text>
                </View>
                <ScrollView style={{ backgroundColor: '#edae7f', padding: 5 }}>
                    <Text style={{ fontSize: 35, color: '#000', textAlign: 'center' }}>Introduction</Text>
                    <Text style={{ fontSize: 18, lineHeight: 22 }}>
                        The Modal component is a basic way to present content above an enclosing view.{"\n"}
                        The quality of an application or a website depends on the time that users spend in it.{"\n"}
                    </Text>
                </ScrollView>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#999', padding: 5, gap: 10, margin: 10,
                        borderRadius: 10, flexDirection: 'row', alignItems: 'center'
                    }} onPress={() => { ToggleModal(0) }}>
                        <Icon name="check" color="#fff" size={20} />
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Agry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10, marginRight: 20 }} onPress={() => { ToggleModal(0) }}>
                        <Text style={{ fontSize: 25, color: 'blue' }}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            {/* modal 1 end here */}

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})
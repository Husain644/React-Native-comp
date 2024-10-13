import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { React, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { H4 } from '../divider/heading';

const Modal = () => {
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
                        Creators do their best to make the best products that, will engage users and not bore
                        them to death. But nowadays simple navigating between pages/screens or scrolling is not
                        enough. The users need to feel alive every single second. What is one of the best tools
                        to engage them more? The answer is modals - popup dialog windows for informing, warning,
                        or stimulating user action. The majority of the best products use them, and the rest should
                        start doing so today.In this article, I will present examples of modals usage in the world
                        of React-Native.{"\n"} RN has a built-in modal component, but there are many noteworthy libraries,
                        which enhance their capabilities.{"\n"} One of the most popular is the react-native-modal, and that’s
                        not without a reason! I will show you how to use this library to create interesting and quite
                        simple solutions, which will definitely find a place in your own project.Below is a little sneak
                        peek of the modals we will create in this project.
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
                        <Text style={{ fontSize: 25, color: 'blue' }}>ok</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            {/* modal 1 end here */}

            {/* modal 2 start from here */}
            <TouchableOpacity style={{
                borderWidth: 1, borderRadius: 20, borderColor: '#999', backgroundColor: '#ebeaea'
            }} onPress={() => { ToggleModal(2) }}>
                <Text style={{ fontSize: 20, color: 'blue', padding: 5, textAlign: 'center', fontWeight: 'bold' }}>Modals 2</Text>
            </TouchableOpacity>
            {modal === 2 && 
            <View style={{
                alignSelf: 'center', zIndex: 10, backgroundColor: '#fff',top:200,
               width: '90%', position: 'absolute', borderWidth:1,
            }}>
                <View style={{ height: 50, backgroundColor: '#caed7f', }}>
                    <Icon style={{ position: 'absolute', right: 20, top: 10 }} name="envelope-o" size={25} color="red" />
                    <Text style={{
                        fontSize: 20, color: '#000', padding: 5, textAlign: 'center',
                        borderBottomWidth: 2, borderBottomColor: '#999', fontWeight: 'bold'
                    }}>This is a Modal</Text>
                </View>
                <ScrollView style={{ padding: 5 }}>
                    <Text style={{ fontSize: 35, color: '#ccc', textAlign: 'center' }}>This is Modal 2</Text>
                    <Text style={{ fontSize: 18, lineHeight: 22 }}>
                        The Modal component is a basic way to present content above an enclosing view.{"\n"}
                        The quality of an application or a website depends on the time that users spend in it.

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
                        <Text style={{ fontSize: 25, color: 'blue' }}>ok</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            {/* modal 2 end here */}


            {/* modal 3 start from here */}
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
                        Creators do their best to make the best products that, will engage users and not bore
                        them to death. But nowadays simple navigating between pages/screens or scrolling is not
                        enough. The users need to feel alive every single second. What is one of the best tools
                        to engage them more? The answer is modals - popup dialog windows for informing, warning,
                        or stimulating user action. The majority of the best products use them, and the rest should
                        start doing so today.In this article, I will present examples of modals usage in the world
                        of React-Native.{"\n"} RN has a built-in modal component, but there are many noteworthy libraries,
                        which enhance their capabilities.{"\n"} One of the most popular is the react-native-modal, and that’s
                        not without a reason! I will show you how to use this library to create interesting and quite
                        simple solutions, which will definitely find a place in your own project.Below is a little sneak
                        peek of the modals we will create in this project.
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
                        <Text style={{ fontSize: 25, color: 'blue' }}>ok</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            {/* modal 3 end here */}




        </View>
    )
}

export default Modal

const styles = StyleSheet.create({})
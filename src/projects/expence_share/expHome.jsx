import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {React,useState} from 'react'

const ExpHome = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'space-between' }}>
            <View style={styles.user}>
                <Text style={styles.userName}>Partner 1</Text>
                <View style={styles.expence}>
                    <Text style={styles.expenceText}>Expence amount</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                        <TextInput style={styles.expenceInput} inputMode="numeric" placeholder='enter Rs' />
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnTxt}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sendToUser}>
                    <Text style={styles.sendUserTxt} >Send Rs. {} To Partner 2</Text>
                    <Text style={styles.sendUserTxt} >Send Rs. {} To Partner 3</Text>
                </View>
            </View>
            <View style={styles.user}>
                <Text style={styles.userName}>Partner 1</Text>
                <View style={styles.expence}>
                    <Text style={styles.expenceText}>Expence amount</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                        <TextInput style={styles.expenceInput} inputMode="numeric" placeholder='enter Rs' />
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnTxt}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sendToUser}>
                    <Text style={styles.sendUserTxt} >Send Rs. {} To Partner 1</Text>
                    <Text style={styles.sendUserTxt} >Send Rs. {} To Partner 3</Text>
                </View>
            </View>
            <View style={styles.user}>
                <Text style={styles.userName}>Partner 1</Text>
                <View style={styles.expence}>
                    <Text style={styles.expenceText}>Expence amount</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                        <TextInput style={styles.expenceInput} inputMode="numeric" placeholder='enter Rs' />
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnTxt}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sendToUser}>
                    <Text style={styles.sendUserTxt} >Send Rs. {} To Partner 2</Text>
                    <Text style={styles.sendUserTxt} >Send Rs. {} To Partner 1</Text>
                </View>
            </View>
        </View>
    )
}

export default ExpHome

const styles = StyleSheet.create({

    user: {
        flex: .32,
        backgroundColor: '#cccc',
        paddingHorizontal: 10
    },
    userName: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    expence: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding:5,
        paddingHorizontal: 10,
    },
    expenceText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000'
    },
    expenceInput: {
        borderWidth: 1,
        width: 200,
        fontSize:20,
        padding:5,
        paddingHorizontal:10,
        borderRadius:10,
    },
    btn:{backgroundColor:'blue',
        padding:10,
        borderRadius:10,

    },
    btnTxt:{
        color:'#fff',
        fontWeight:'bold',
        paddingHorizontal:10,
        fontSize:20
    },
    sendToUser:{
        backgroundColor:'#eaea',
        padding:10
    },
    sendUserTxt:{
        fontSize:18,
        color:'#000',
        borderBottomWidth:1,
        paddingBottom:5,
        borderColor:'red'
    }
})
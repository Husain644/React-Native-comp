import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Alert = () => {
  return (
    <View style={{flex:1}}>
        <View style={styles.backdrop}></View>
        <View style={{}}>
            <Text style={styles.text}>Alert</Text>
            <Text style={styles.text}>This is an alert</Text>
            <Text style={styles.text}>Do you want to proceed?</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                <Text style={{color: 'blue'}} onPress={() => alert('Yes')}>Yes</Text>
                <Text style={{color: 'red'}} onPress={() => alert('No')}>No</Text>
            </View>
        </View>
    </View>
  )
}

export default Alert

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})
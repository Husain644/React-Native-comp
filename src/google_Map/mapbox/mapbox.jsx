import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { MapView } from "@rnmapbox/maps"

const MapboxHome = () => {

  return (
    <View style={styles.page}>
    <View style={styles.container}>
      {/* <MapView style={styles.map} /> */}
    </View>
  </View>
  )
}

export default MapboxHome;

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    container: {
      height: 300,
      width: 300,
      backgroundColor: "tomato"
    },
    map: {
      flex: 1
    }
  })
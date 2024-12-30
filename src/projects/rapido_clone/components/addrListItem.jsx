import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontIcon } from '../../../assets/assets'

const AddrListItem = ({addr=''}) => {
  return (
          <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#eaea', gap: 10 }}>
              <FontIcon size={20} name={"clock-o"} />
              <View style={{ flex: 1 }} >
                <Text style={{ fontFamily: 'sans-serif-medium' }}>{addr}</Text>
                <Text>jaipur Rajasthan India</Text>
              </View>
              <TouchableOpacity style={{ right: 0 }} onPress={() => { }}>
                <FontIcon size={25} name={"heart-o"} /></TouchableOpacity>
            </View>
  )
}

export default AddrListItem
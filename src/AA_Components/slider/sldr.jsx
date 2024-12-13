import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { React, useRef, useState } from 'react'

const MySlider = ({width = 660,angle=''}) => {
  const ref = useRef()
  const [pos, setPos] = useState(0)

  const onScroll = (e) => {
    const index = Math.floor(e.nativeEvent.contentOffset.x * 200 / width)
    setPos(index)
  }
  return (
    <View style={{ padding: 20 }}>
      <View style={{ width: width / 2, borderRadius: 7, borderWidth: 1, overflow: 'hidden', transform: [{ rotateZ: '180deg' }] }}>
        <ScrollView horizontal
          ref={ref}
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ backgroundColor: '#ccc' }}
          overScrollMode="never" //for android
        >
          <View style={{ width: width, height: 20, alignItems: 'flex-end' }}>
            <View style={{ height: 20, width: width / 2, backgroundColor: 'red', borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }}></View>
          </View>
        </ScrollView>
      </View>
      <Text style={{ padding: 25, fontSize: 45 }}>{pos}%</Text>
    </View>

  )
}

export default MySlider;

const styles = StyleSheet.create({})
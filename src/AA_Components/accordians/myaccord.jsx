import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle
} from 'react-native-reanimated'
import { Shadow } from '../css/shadow'

const Myaccord = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const data = [
    {
      name: 'What is React Native Reanimated ?',
      descriptions:
        'React Native Reanimated is a powerful animation library built by Software Mansion. With Reanimated, you can easily create smooth animations and interactions that run on the UI thread.'
    },
    {
      name: 'accordian2',
      descriptions: 'This is accordians2. Lorem ipsum dolor sit amet.'
    },
    {
      name: 'accordian3',
      descriptions: 'This is accordians3. Lorem ipsum dolor sit amet.'
    }
  ]

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const height = useSharedValue(0)

        const animStyle = useAnimatedStyle(() => ({
          height: height.value,
          opacity: height.value === 0 ? 0 : 1
        }))

        const toggle = () => {
          const isOpen = activeIndex === index

          setActiveIndex(isOpen ? null : index)
          height.value = withTiming(isOpen ? 0 : 120, { duration: 300 })
        }

        return (
          <View key={index} style={[styles.card, Shadow.s1]}>
            <TouchableOpacity onPress={toggle} style={styles.header}>
              <Text style={styles.title}>{item.name}</Text>
              <Icon
                name={activeIndex === index ? 'angle-up' : 'angle-down'}
                size={20}
                color="#000"
              />
            </TouchableOpacity>

            <Animated.View style={[styles.body, animStyle]}>
              <Text style={styles.desc}>{item.descriptions}</Text>
            </Animated.View>
          </View>
        )
      })}
    </View>
  )
}

export default Myaccord

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ddeeda',
    borderRadius: 20
  },
  card: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center'
  },
  title: {
    fontSize: 15
  },
  body: {
    overflow: 'hidden',
    paddingHorizontal: 10
  },
  desc: {
    fontSize: 12,
    paddingVertical: 8
  }
})

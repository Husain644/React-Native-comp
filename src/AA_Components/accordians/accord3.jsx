import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated'
import { FontIcon } from '../../assets/assets'

const Accord3 = () => {
  const open = useSharedValue(false)
  const height = useSharedValue(0)
  const rotate = useSharedValue(0)

  const bodyStyle = useAnimatedStyle(() => ({
    height: height.value,
    overflow: 'hidden'
  }))

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }]
  }))

  const handler = () => {
    const isOpen = open.value

    open.value = !isOpen
    height.value = withTiming(isOpen ? 0 : 220, { duration: 300 })
    rotate.value = withTiming(isOpen ? 0 : 180, { duration: 300 })
  }

  return (
    <View>
      <Text>Accord3</Text>

      <View style={styles.card}>
        <TouchableOpacity onPress={handler} style={styles.header}>
          <Text>this is title</Text>
          <Animated.View style={iconStyle}>
            <FontIcon name="chevron-down" />
          </Animated.View>
        </TouchableOpacity>

        {/* ANIMATED WRAPPER */}
        <Animated.View style={bodyStyle}>
          <View style={styles.content}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos
              repellendus, voluptate impedit, magnam delectus veritatis, iusto
              doloribus nostrum praesentium beatae minus nisi similique nam quam
              molestias ad iure cupiditate...
            </Text>
          </View>
        </Animated.View>
      </View>
    </View>
  )
}

export default Accord3

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'center'
  },
  content: {
    paddingHorizontal: 12,
    paddingBottom: 12
  },
  text: {
    fontSize: 12,
    lineHeight: 18
  }
})

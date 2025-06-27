import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rect,Canvas,Group,usePathValue,Skia} from '@shopify/react-native-skia'
import { useFrameCallback } from 'react-native-reanimated'

const SkiaHome = () => {
  const p=usePathValue((path)=>{
    'worklet';
    // console.log(path)
  })
  return (
    <View>
      <Text>SkiaHome</Text>
      <Canvas style={{height:350,width:350}}>
         <Group transform={[{rotate:0.5}]} origin={{x:20,y:25}}>
            <Rect
             x={50}
             y={50}
            height={50} width={50} style="stroke"  strokeWidth={5} color="#000"  />
         </Group>
      </Canvas>
    </View>
  )
}

export default SkiaHome

const styles = StyleSheet.create({})
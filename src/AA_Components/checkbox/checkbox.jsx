import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import PaperChckbox from './paper_chckbox'
import { H5 } from '../divider/heading'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import ChkboxNew from './chkbox_new';

const Chckbox = () => {

   //  animations for toggle button1

   const distance = useSharedValue(0)
   const animStyle = useAnimatedStyle(() => { return { left: distance.value } })
   const [checked, setChecked] = useState(false)
   const toggle = () => {
      if (checked) {
         distance.value = withTiming(30, { duration: 500 })
         setChecked(false)
      } else {
         distance.value = withTiming(0, { duration: 500 })   // animation on toggle
         setChecked(true)
      }
   }
   //end animations

   const [checked2, setChecked2] = useState(false)
   const toggle2 = () => {
      setChecked2(!checked2)
   }
   const [checked3, setChecked3] = useState(false)
   const toggle3 = () => {
      setChecked3(!checked3)
   }

   return (
      <>
         <H5 txt="chackbox start here" />
         <View style={{ width: '100%', padding: 10, display: 'flex', flexDirection: 'row', gap: 20 }} >
            <TouchableOpacity onPress={toggle} >
               <View
                  style={{
                     position: 'relative', borderWidth: 1, borderRadius: 30, width: 60, height: 30, borderColor: '#999',
                     backgroundColor: checked ? '#ccc' : 'skyblue'
                  }}>
                  <Animated.View style={[{
                     height: 30, width: 30, borderRadius: 30, backgroundColor: 'red', position: 'absolute',
                     top: 7, transform: [{ translateY: -7.5 }]
                  },animStyle]}></Animated.View>
               </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={toggle2}
               style={{
                  position: 'relative', borderWidth: 1, borderRadius: 30, width: 60, height: 30, borderColor: '#999', backgroundColor: checked ? '#ccc' : 'skyblue',
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'
               }}>
               <View style={{
                  height: 30, width: 30, borderRadius: 30, backgroundColor: 'red', position: 'absolute',
                  top: 7, left: 0, transform: [{ translateY: -7.5 }, { translateX: checked2 ? 30 : 0 }]
               }}></View>
               <Icon style={{ opacity: checked2 ? 1 : 0 }} name="sun-o" size={20} color="#000" />
               <Icon style={{ opacity: checked2 ? 0 : 1 }} name="moon-o" size={20} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggle3}
               style={{
                  position: 'relative', borderWidth: 1, borderRadius: 30, width: 60, height: 30, borderColor: '#999',
                  backgroundColor: checked3 ? '#ccc' : 'skyblue'
               }}>
               <View style={{
                  height: 30, width: 30, borderRadius: 30, backgroundColor: checked3 ? '#fff' : '#999', position: 'absolute', borderWidth: 1,
                  top: 7, left: 0, transform: [{ translateY: -7.5 }, { translateX: checked3 ? 30 : 0 }]
               }}></View>
            </TouchableOpacity>

         </View>
         {/* checkbox are removed from react native  */}
         <PaperChckbox />
         <ChkboxNew />
      </>
   )
}

export default Chckbox


const styles = StyleSheet.create({})
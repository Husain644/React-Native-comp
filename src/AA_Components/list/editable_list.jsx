import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { H4 } from '../divider/heading'
import { Data } from '../table/data'

const EditableList = () => {
  const animVal = useSharedValue(0)
  const [visible, setVisible] = useState(false)
  const [list, setList] = useState(Data)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [editName, setEditName] = useState('')

  const animStyle = useAnimatedStyle(() => ({
    opacity: animVal.value
  }))

const openEditor = (index) => {
  setSelectedIndex(index)
  setEditName(list[index].name)
  setVisible(true)
  animVal.value = withTiming(1, { duration: 300 })
}


const closeEditor = () => {
  animVal.value = withTiming(0, { duration: 300 })
  setVisible(false)
}

  const saveEdit = () => {
    const updated = [...list]
    updated[selectedIndex] = {
      ...updated[selectedIndex],
      name: editName
    }

    setList(updated)
    closeEditor()
  }

  return (
    <View style={styles.container}>
      <H4 txt="Editable List" />

      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={styles.list}>
        {list.map((item, index) => (
          <View key={index} style={styles.item}>
            <View>
              <Text style={{ fontSize: 12 }}>{item.rol}</Text>
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
              <Text style={{ fontSize: 12 }}>{item.class}</Text>
              <View style={{ width: 150, flexDirection: 'row', flexWrap: 'wrap' }}>
                {item.subect.map((sub, i) => (
                  <Text key={i}>{sub}, </Text>
                ))}
              </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => openEditor(index)}>
              <Text style={styles.btnTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* MODAL */}
<Animated.View
  pointerEvents={visible ? 'auto' : 'none'}
  style={[styles.overlay, animStyle]}
>
        <View style={styles.modal}>
          <TextInput
            value={editName}
            onChangeText={setEditName}
            style={styles.input}
            placeholder="Edit name"
          />

          <TouchableOpacity style={styles.btn} onPress={saveEdit}>
            <Text style={styles.btnTxt}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, { marginTop: 10 }]} onPress={closeEditor}>
            <Text style={styles.btnTxt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  )
}

export default EditableList


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  list: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '95%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 8
  },
  btnTxt: {
    color: '#fff',
    fontSize: 16
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 15,
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
})

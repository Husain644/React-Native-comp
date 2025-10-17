import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv';

const students = new MMKV();

const MMKV_DB = () => {
  const [data, setData] = useState([]);

  // Fetch data and store in MMKV
  const getData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/users');
      const toJson = await res.json();     
      [...toJson, ...toJson].forEach((item) => {
        const fakeName = `${item.username}_${Math.round(Math.random() * 10000)}`;
        students.set(fakeName, JSON.stringify(item));
     
      });

      // Update state immediately
      GetDataFromMMKV();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Read all students from MMKV
  const GetDataFromMMKV = () => {
    const allKeys = students.getAllKeys();
    console.log(allKeys)
    const allStudents = allKeys.map(key => {
      const studentData = students.getString(key);
      try {
        const jsonData= JSON.parse(studentData)
            return jsonData
      } catch (error) {
        if(error) return;
        console.log(error)
      }
  
    })
    setData(allStudents);
  };

  // Add 100 more fake entries
  const addMoreData = async () => {
    await getData();
  };

  // Clear MMKV and reset state
  const clearAllData = () => {
    students.clearAll();
    setData([]);
  };

  // Load initial data on mount
  useEffect(() => {
    GetDataFromMMKV();
  }, []);

  const RenderItem = (item, index) => {
    const cls=Math.round((index%4)+5)
    return (
      <View key={index} style={styles.student}>
        <Text style={styles.txt}>Name - {item.username}</Text>
        <Text style={styles.txt}>Roll-No - {item.id}</Text>
        <Text style={styles.txt}>Class - {cls}</Text>
        <Text style={styles.txt}>isActive - yes</Text>
        <Text style={styles.txt}>Email - {item.email}</Text>
        <Text style={styles.txt}>Mobile - {item.phone}</Text>
        <Text style={styles.txt}>Address - {item.city || 'N/A'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 70,
          backgroundColor: '#ccc',
          width: '100%',
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Text style={[styles.txt, { color: '#000' }]}>No of Students: {data.length}</Text>

        <TouchableOpacity onPress={addMoreData} style={[styles.btnStyle]} activeOpacity={0.4}>
          <Text style={{ fontSize: 18, color: '#0545f5', textAlign: 'center', fontWeight: 'bold' }}>
            Add +100
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={GetDataFromMMKV}
          style={[styles.btnStyle, { backgroundColor: '#f709f7aa' }]}
          activeOpacity={0.4}
        >
          <Text style={{ fontSize: 18, color: '#e9f0e8', textAlign: 'center', fontWeight: 'bold' }}>
            Get Data
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={clearAllData}
          style={[styles.btnStyle, { backgroundColor: '#ff0000' }]}
          activeOpacity={0.4}
        >
          <Text style={{ fontSize: 18, color: '#e9f0e8', textAlign: 'center', fontWeight: 'bold' }}>
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => RenderItem(item, index)}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={5}
        removeClippedSubviews={true}
        contentContainerStyle={styles.scroll}
      />
    </View>
  );
};

export default MMKV_DB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1e3f7',
    alignItems: 'center',
  },
  scroll: {
    minWidth: '100%',
    alignItems: 'center',
  },
  student: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eaea',
    marginTop: 10,
    minWidth: '85%',
  },
  txt: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  btnStyle: {
    backgroundColor: '#fae20c',
    borderRadius: 10,
    maxHeight: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

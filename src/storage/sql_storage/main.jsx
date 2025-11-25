import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { createTables, addStudent, getAllStudents, updateStudent, deleteStudent } from './dbService.js';

export default function StudentScreen() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');
  const [roll, setRoll] = useState('');
  const [editingId, setEditingId] = useState(null); // null = add mode, not editing

  // Load data
  useEffect(() => {
    (async () => {
      await createTables();
      await loadStudents();
    })();
  }, []);

  const loadStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  const resetForm = () => {
    setName('');
    setClassName('');
    setSection('');
    setRoll('');
    setEditingId(null);
  };

  const handleAdd = async () => {
    if (!name) return;
    await addStudent({
      name,
      class: className,
      section,
      roll: Number(roll),
    });
    await loadStudents();
    resetForm();
  };

  const handleUpdate = async () => {
    if (!editingId) return;

    await updateStudent(editingId, {
      name,
      className,      // our updateStudent expects { name, className, section, roll }
      section,
      roll: Number(roll),
    });

    await loadStudents();
    resetForm();
  };

  const handleEditPress = (student) => {
    setEditingId(student.id);
    setName(student.name);
    setClassName(student.class);
    setSection(student.section);
    setRoll(student.roll?.toString() ?? '');
  };

  const handleDeletePress = async (id) => {
    await deleteStudent(id);
    await loadStudents();
    // if deleting the one you're editing
    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <View style={{height:400, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
        {editingId ? 'Edit student' : 'Add student'}
      </Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 4, paddingHorizontal: 8, paddingVertical: 2}}
      />
      <TextInput
        placeholder="Class"
        value={className}
        onChangeText={setClassName}
        style={{ borderWidth: 1, marginVertical: 4,paddingHorizontal: 8, paddingVertical: 2 }}
      />
      <TextInput
        placeholder="Section"
        value={section}
        onChangeText={setSection}
        style={{ borderWidth: 1, marginVertical: 4, paddingHorizontal: 8, paddingVertical: 2 }}
      />
      <TextInput
        placeholder="Roll"
        keyboardType="number-pad"
        value={roll}
        onChangeText={setRoll}
        style={{ borderWidth: 1, marginVertical: 4,paddingHorizontal: 8, paddingVertical: 2}}
      />

      {/* Add / Update buttons */}
      {editingId ? (
        <View style={{ flexDirection: 'row', gap: 8, marginVertical: 8 }}>
          <View style={{ flex: 1, marginRight: 4 }}>
            <Button title="Update" onPress={handleUpdate} />
          </View>
          <View style={{ flex: 1, marginLeft: 4 }}>
            <Button title="Cancel" color="grey" onPress={resetForm} />
          </View>
        </View>
      ) : (
        <View style={{ marginVertical: 2 }}>
          <Button title="Add" onPress={handleAdd} />
        </View>
      )}

      <Text style={{ marginTop: 6, fontSize: 14, fontWeight: 'bold' }}>
        Students List
      </Text>

      <FlatList
        style={{ marginTop: 0}}
        data={students}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#ddd' }} />
        )}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text>
                {item.name}
              </Text>
              <Text>
                Class {item.class} {item.section} | Roll {item.roll}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity
                onPress={() => handleEditPress(item)}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderWidth: 1,
                  borderRadius: 4,
                  marginRight: 4,
                }}
              >
                <Text>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleDeletePress(item.id)}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: 'red',
                }}
              >
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

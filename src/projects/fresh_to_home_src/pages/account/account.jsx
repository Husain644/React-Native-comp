import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import md from './../../../../assets/images/md.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    bio: 'Software Developer',
    avatar: md,
  });

  const [editedData, setEditedData] = useState({...userData});

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
  };

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'John Doe',
      mobile: '9876543210',
      pincode: '560001',
      address: '123 Main Street, Apartment 4B',
      locality: 'Downtown',
      city: 'Bangalore',
      state: 'Karnataka',
      isDefault: true,
      isEditing: false
    }
  ])

  const [newAddress, setNewAddress] = useState({
    name: '',
    mobile: '',
    pincode: '',
    address: '',
    locality: '',
    city: '',
    state: '',
    isDefault: false,
    isEditing: false
  })

  const toggleEdit = (id) => {
    setAddresses(addresses.map(addr => 
      addr.id === id ? {...addr, isEditing: !addr.isEditing} : addr
    ))
  }

  const updateAddress = (id, field, value) => {
    setAddresses(addresses.map(addr =>
      addr.id === id ? {...addr, [field]: value} : addr
    ))
  }

  const addNewAddress = () => {
    setAddresses([...addresses, {
      ...newAddress,
      id: addresses.length + 1
    }])
    setNewAddress({
      name: '',
      mobile: '',
      pincode: '',
      address: '',
      locality: '',
      city: '',
      state: '',
      isDefault: false,
      isEditing: false
    })
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
         source={userData.avatar}
          style={styles.avatar}
        />
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={styles.editButtonText}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={editedData.name}
              onChangeText={(text) => setEditedData({...editedData, name: text})}
            />
          ) : (
            <Text style={styles.value}>{userData.name}</Text>
          )}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Email</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={editedData.email}
              onChangeText={(text) => setEditedData({...editedData, email: text})}
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.value}>{userData.email}</Text>
          )}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Phone</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={editedData.phone}
              onChangeText={(text) => setEditedData({...editedData, phone: text})}
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.value}>{userData.phone}</Text>
          )}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>Bio</Text>
          {isEditing ? (
            <TextInput
              style={[styles.input, styles.bioInput]}
              value={editedData.bio}
              onChangeText={(text) => setEditedData({...editedData, bio: text})}
              multiline
            />
          ) : (
            <Text style={styles.value}>{userData.bio}</Text>
          )}
        </View>

        {isEditing && (
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>My Addresses</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Add New Address</Text>
        </TouchableOpacity>
      </View>
      
      {addresses.map(addr => (
        <View key={addr.id} style={styles.addressCard}>
          {addr.isEditing ? (
            <View style={styles.editForm}>
              <TextInput
                style={styles.input}
                value={addr.name}
                onChangeText={(text) => updateAddress(addr.id, 'name', text)}
                placeholder="Full Name"
              />
              <TextInput
                style={styles.input}
                value={addr.mobile}
                onChangeText={(text) => updateAddress(addr.id, 'mobile', text)}
                placeholder="Mobile Number"
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                value={addr.pincode}
                onChangeText={(text) => updateAddress(addr.id, 'pincode', text)}
                placeholder="Pincode"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                value={addr.address}
                onChangeText={(text) => updateAddress(addr.id, 'address', text)}
                placeholder="Address (House No, Building, Street)"
                multiline
              />
              <TextInput
                style={styles.input}
                value={addr.locality}
                onChangeText={(text) => updateAddress(addr.id, 'locality', text)}
                placeholder="Locality"
              />
              <TextInput
                style={styles.input}
                value={addr.city}
                onChangeText={(text) => updateAddress(addr.id, 'city', text)}
                placeholder="City"
              />
              <TextInput
                style={styles.input}
                value={addr.state}
                onChangeText={(text) => updateAddress(addr.id, 'state', text)}
                placeholder="State"
              />
              <TouchableOpacity 
                style={styles.saveButton}
                onPress={() => toggleEdit(addr.id)}
              >
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <View style={styles.addressHeader}>
                <Text style={styles.name}>{addr.name}</Text>
                {addr.isDefault && (
                  <View style={styles.defaultBadge}>
                    <Text style={styles.defaultText}>DEFAULT</Text>
                  </View>
                )}
              </View>
              <Text style={styles.addressText}>{addr.address}</Text>
              <Text style={styles.addressText}>{addr.locality}</Text>
              <Text style={styles.addressText}>{`${addr.city}, ${addr.state} - ${addr.pincode}`}</Text>
              <Text style={styles.mobile}>Mobile: {addr.mobile}</Text>
              
              <View style={styles.actionButtons}>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => toggleEdit(addr.id)}
                >
                  <Icon name="edit" size={18} color="#2874f0" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                  <Icon name="delete" size={18} color="#ff6161" />
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  editButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#4CD964',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2874f0',
    padding: 8,
    borderRadius: 4
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 4
  },
  addressCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  defaultBadge: {
    backgroundColor: '#2874f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8
  },
  defaultText: {
    color: '#fff',
    fontSize: 12
  },
  addressText: {
    color: '#444',
    marginBottom: 4
  },
  mobile: {
    color: '#444',
    marginTop: 8
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  editButtonText: {
    color: '#2874f0',
    marginLeft: 4
  },
  deleteButtonText: {
    color: '#ff6161',
    marginLeft: 4
  },
  editForm: {
    marginTop: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12
  },
  saveButton: {
    backgroundColor: '#2874f0',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center'
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default ProfileScreen;

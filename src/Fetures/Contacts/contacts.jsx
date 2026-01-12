import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList,
  Alert,
  Share,
  ActivityIndicator,
  TextInput,
  Linking,
} from 'react-native';
import Contacts from 'react-native-contacts';
import RNFS from 'react-native-fs';
import { ContactsPermission } from '../fileSystems/permissions';

const ContactsHome = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sections, setSections] = useState([]);

  // ✅ Fetch contacts
  const getContacts = async () => {
    if (await ContactsPermission()) {
      try {
        setLoading(true);
        const res = await Contacts.getAll();
        res.sort((a, b) =>
          (a.displayName || '').localeCompare(b.displayName || '')
        );
        setContacts(res);
      } catch (err) {
        console.log('Contacts error:', err);
        Alert.alert('Error', 'Unable to fetch contacts');
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Permission Denied', 'Please allow contacts access');
    }
  };

  // ✅ Share all contacts
  const shareAllContacts = async () => {
    if (contacts.length === 0) {
      Alert.alert('No Contacts', 'Please fetch contacts first');
      return;
    }
    const content = contacts
      .map(
        (c) =>
          `${c.displayName || ''} - ${c.phoneNumbers
            .map((p) => p.number.replaceAll(' ', ''))
            .join(', ')}`
      )
      .join('\n');

    const path = RNFS.DocumentDirectoryPath + '/contacts.txt';

    try {
      await RNFS.writeFile(path, content, 'utf8');
      await Share.share({
        title: 'All Contacts',
        url: 'file://' + path,
        message: 'Contacts exported',
      });
    } catch (err) {
      console.log('Share error:', err);
    }
  };

  // ✅ Share single contact
  const shareContact = async (contact) => {
    const content = `${contact.displayName || ''} - ${contact.phoneNumbers
      .map((p) => p.number.replaceAll(' ', ''))
      .join(', ')}`;

    try {
      await Share.share({
        title: 'Contact',
        message: content,
      });
    } catch (err) {
      console.log('Share contact error:', err);
    }
  };

  // ✅ Call primary number
  const callContact = (contact) => {
    const number = contact.phoneNumbers[0]?.number.replaceAll(' ', '');
    if (!number) {
      Alert.alert('No Number', 'This contact has no phone number');
      return;
    }
    Linking.openURL(`tel:${number}`).catch(() =>
      Alert.alert('Error', 'Unable to make a call')
    );
  };

  // ✅ WhatsApp primary number
  const openWhatsApp = (contact) => {
    const number = contact.phoneNumbers[0]?.number.replaceAll(' ', '');
    if (!number) {
      Alert.alert('No Number', 'This contact has no phone number');
      return;
    }
    const url = `whatsapp://send?phone=${number}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) Alert.alert('WhatsApp not installed');
        else return Linking.openURL(url);
      })
      .catch(() => Alert.alert('Error', 'Cannot open WhatsApp'));
  };

  // ✅ Prepare sections for SectionList
  useEffect(() => {
    const grouped = {};
    contacts
      .filter((c) =>
        c.displayName?.toLowerCase().includes(search.toLowerCase())
      )
      .forEach((c) => {
        const letter = (c.displayName?.[0] || '#').toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(c);
      });

    const newSections = Object.keys(grouped)
      .sort()
      .map((letter) => ({ title: letter, data: grouped[letter] }));
    setSections(newSections);
  }, [contacts, search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📇 Contacts</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={getContacts}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Get Contacts</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={shareAllContacts}
        disabled={contacts.length === 0}
      >
        <Text style={styles.buttonText}>Share All Contacts</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Search contacts..."
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />

      {loading && <ActivityIndicator size="large" color="#6C63FF" />}

      {!loading && sections.length === 0 && contacts.length === 0 && (
        <Text style={styles.emptyText}>No contacts loaded.</Text>
      )}

      {!loading && (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item.recordID || index.toString()}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <TouchableOpacity onPress={() => callContact(item)}>
                <Text style={styles.contactName}>{item.displayName}</Text>
                {item.phoneNumbers.length > 0 && (
                  <Text style={styles.contactNumber}>
                    {item.phoneNumbers[0].number.replaceAll(' ', '')}
                    {item.phoneNumbers.length > 1
                      ? ` (+${item.phoneNumbers.length - 1} more)`
                      : ''}
                  </Text>
                )}
              </TouchableOpacity>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => callContact(item)}
                >
                  <Text style={styles.buttonTextSmall}>📞</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.whatsappButton}
                  onPress={() => openWhatsApp(item)}
                >
                  <Text style={styles.buttonTextSmall}>💬</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => shareContact(item)}
                >
                  <Text style={styles.buttonTextSmall}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ContactsHome;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fdfdfd' },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 15, textAlign: 'center', color: '#333' },
  button: { backgroundColor: '#6C63FF', paddingVertical: 12, borderRadius: 8, marginBottom: 10, alignItems: 'center' },
  buttonSecondary: { backgroundColor: '#FF6C63', paddingVertical: 12, borderRadius: 8, marginBottom: 15, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
  buttonTextSmall: { color: '#fff', fontSize: 14, fontWeight: '600' },
  searchInput: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 15 },
  sectionHeader: { backgroundColor: '#e0e0e0', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  sectionHeaderText: { fontWeight: '700', fontSize: 16, color: '#555' },
  contactItem: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f1f1f1', padding: 12, marginVertical: 4, borderRadius: 8, alignItems: 'center' },
  contactName: { fontSize: 18, fontWeight: '600' },
  contactNumber: { fontSize: 14, color: '#555', marginTop: 2 },
  buttonsContainer: { flexDirection: 'row' },
  callButton: { backgroundColor: '#2196F3', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 6, marginRight: 5 },
  whatsappButton: { backgroundColor: '#25D366', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 6, marginRight: 5 },
  shareButton: { backgroundColor: '#4CAF50', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 6 },
  emptyText: { textAlign: 'center', color: '#888', marginTop: 50, fontSize: 16 },
});

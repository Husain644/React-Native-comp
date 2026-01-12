import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity, 
  ScrollView, Alert, TextInput, Clipboard 
} from 'react-native';
import Share from 'react-native-share';

const Share_It = () => {
  const [title, setTitle] = useState('Amazing Content!');
  const [message, setMessage] = useState('Hey! Check out this awesome app I found.');
  const [url, setUrl] = useState('https://google.com');

  const getFullMessage = () => `${message}\n\n${url}`;

  // Reusable Share Logic
  const shareToPlatform = async (platform) => {
    const shareOptions = {
      message: getFullMessage(),
      url: url, // Some platforms prefer the URL field
      social: platform,
    };

    try {
      if (platform === 'GENERAL') {
        await Share.open({ title, message: getFullMessage() });
      } else {
        await Share.shareSingle(shareOptions);
      }
    } catch (error) {
      if (error.message !== 'User did not share') {
        Alert.alert('Not Found', `Make sure the app is installed on your device.`);
      }
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(getFullMessage());
    Alert.alert('Copied!', 'Content copied to clipboard.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Share</Text>
        <Text style={styles.subtitle}>Customize your message below</Text>
      </View>

      {/* EDIT SECTION */}
      <View style={styles.editSection}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.input}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Text style={styles.label}>Link</Text>
        <TextInput
          style={[styles.input, { marginBottom: 0 }]}
          value={url}
          onChangeText={setUrl}
          autoCapitalize="none"
        />
      </View>

      {/* MAIN SHARE BUTTON */}
      <TouchableOpacity 
        onPress={() => shareToPlatform('GENERAL')} 
        style={[styles.button, styles.generalButton]}
      >
        <Text style={styles.buttonText}>📤 Open System Share</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.dividerLine} /><Text style={styles.dividerText}>Quick Platforms</Text><View style={styles.dividerLine} />
      </View>

      {/* SOCIAL GRID */}
      <View style={styles.socialContainer}>
        <SocialTile label="WhatsApp" icon="💬" color="#25D366" onPress={() => shareToPlatform(Share.Social.WHATSAPP)} />
        <SocialTile label="Facebook" icon="👥" color="#1877F2" onPress={() => shareToPlatform(Share.Social.FACEBOOK)} />
        <SocialTile label="X / Twitter" icon="🐦" color="#000000" onPress={() => shareToPlatform(Share.Social.TWITTER)} />
        <SocialTile label="Instagram" icon="📸" color="#E4405F" onPress={() => shareToPlatform(Share.Social.INSTAGRAM)} />
        <SocialTile label="Email" icon="📧" color="#EA4335" onPress={() => shareToPlatform(Share.Social.EMAIL)} />
        <SocialTile label="SMS" icon="📱" color="#4CAF50" onPress={() => shareToPlatform(Share.Social.SMS)} />
        <SocialTile label="Copy Link" icon="🔗" color="#607D8B" onPress={copyToClipboard} />
      </View>

      {/* LIVE PREVIEW */}
      <View style={styles.previewContainer}>
        <Text style={styles.previewTitle}>Live Preview</Text>
        <View style={styles.previewBox}>
          <Text style={styles.previewText}>{message}</Text>
          <Text style={styles.previewUrl}>{url}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Sub-component for the grid items to keep code clean
const SocialTile = ({ label, icon, color, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.socialButton, { backgroundColor: color }]}>
    <Text style={styles.socialIcon}>{icon}</Text>
    <Text style={styles.socialText}>{label}</Text>
  </TouchableOpacity>
);

export default Share_It;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20 },
  header: { marginTop: 30, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1a1a1a' },
  subtitle: { fontSize: 14, color: '#777' },
  editSection: { backgroundColor: '#fff', padding: 15, borderRadius: 15, marginBottom: 20, elevation: 2 },
  label: { fontSize: 12, fontWeight: '700', color: '#bbb', textTransform: 'uppercase', marginBottom: 5 },
  input: { fontSize: 16, color: '#333', borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 15, paddingVertical: 5 },
  button: { width: '100%', height: 55, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 10, elevation: 3 },
  generalButton: { backgroundColor: '#6200ee' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#ddd' },
  dividerText: { marginHorizontal: 10, color: '#999', fontSize: 12, fontWeight: '600' },
  socialContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  socialButton: { width: '31%', height: 80, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 10, elevation: 2 },
  socialIcon: { fontSize: 24, marginBottom: 5 },
  socialText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  previewContainer: { marginTop: 20, marginBottom: 50 },
  previewTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  previewBox: { backgroundColor: '#fff', padding: 15, borderRadius: 12, borderStyle: 'dashed', borderWidth: 1, borderColor: '#ccc' },
  previewText: { fontSize: 14, color: '#444', lineHeight: 20 },
  previewUrl: { fontSize: 13, color: '#2196F3', marginTop: 5 },
});
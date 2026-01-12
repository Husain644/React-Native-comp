import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';

const AUDIO_EXT = [
  'mp3', 'wav', 'aac', 'ogg',
  'm4a', 'flac', 'opus',
  'amr', '3ga', 'mid'
];

const AudioHome = () => {
  const ROOT_PATH = RNFS.ExternalStorageDirectoryPath;

  const [audios, setAudios] = useState([]);
  const [scanning, setScanning] = useState(false);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const soundRef = useRef(null);

  // 🔐 Permission
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
        );
      } else {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        );
      }
    }
  };

  // 🔁 Recursive scan
  const scanDirectory = async (dirPath, collected = []) => {
    try {
      const files = await RNFS.readDir(dirPath);

      for (const file of files) {
        if (file.isFile()) {
          const ext = file.name.split('.').pop()?.toLowerCase();
          if (AUDIO_EXT.includes(ext)) {
            collected.push(file.path);
          }
        } else if (file.isDirectory()) {
          await scanDirectory(file.path, collected);
        }
      }
    } catch (e) {
      // skip protected folders
    }
    return collected;
  };

  const startScan = async () => {
    setScanning(true);
    setAudios([]);

    const result = await scanDirectory(ROOT_PATH);
    setAudios(result);

    setScanning(false);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const playAudio = (path) => {
    stopAudio();

    const sound = new Sound(path, '', (error) => {
      if (error) {
        console.log('Audio load error', error);
        return;
      }
      sound.play();
    });

    soundRef.current = sound;
    setSelectedAudio(path);
    setPreviewVisible(true);
  };

  const stopAudio = () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.release();
      soundRef.current = null;
    }
  };

  const closePreview = () => {
    stopAudio();
    setPreviewVisible(false);
    setSelectedAudio(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 Audio Scanner</Text>

      <Button title="Scan All Audio" onPress={startScan} />

      <Text style={styles.info}>
        {scanning ? (
          <ActivityIndicator size="large" color="#6C63FF" />
        ) : (
          `Audio files found: ${audios.length}`
        )}
      </Text>

      <FlatList
        data={audios}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.audioItem}
            onPress={() => playAudio(item)}
          >
            <Text style={styles.audioName} numberOfLines={1}>
              🎵 {item.split('/').pop()}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* 🔊 AUDIO PLAYER MODAL */}
      <Modal
        visible={previewVisible}
        transparent
        animationType="fade"
        onRequestClose={closePreview}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.closeArea}
            activeOpacity={1}
            onPress={closePreview}
          />

          <View style={styles.audioBox}>
            <Text style={styles.playingText}>
              ▶ Now Playing
            </Text>
            <Text style={styles.audioTitle} numberOfLines={2}>
              {selectedAudio?.split('/').pop()}
            </Text>

            <Button title="Stop" onPress={closePreview} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AudioHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  info: {
    marginVertical: 10,
    fontSize: 16,
  },
  audioItem: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  audioName: {
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeArea: {
    ...StyleSheet.absoluteFillObject,
  },
  audioBox: {
    width: '85%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  playingText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
  },
  audioTitle: {
    textAlign: 'center',
    marginBottom: 15,
  },
});

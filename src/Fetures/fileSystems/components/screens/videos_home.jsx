import React, { useEffect, useState } from 'react';
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
import Video from 'react-native-video';

const VIDEO_EXT = ['mp4', 'mkv', 'avi', 'mov', 'webm', '3gp'];

const VideosHome = () => {
  const ROOT_PATH = RNFS.ExternalStorageDirectoryPath;

  const [videos, setVideos] = useState([]);
  const [scanning, setScanning] = useState(false);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [paused, setPaused] = useState(false);

  // 🔐 Permission
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
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
          if (VIDEO_EXT.includes(ext)) {
            collected.push(file.path);
          }
        } else if (file.isDirectory()) {
          await scanDirectory(file.path, collected);
        }
      }
    } catch (e) {
      // ignore protected folders
    }
    return collected;
  };

  const startScan = async () => {
    setScanning(true);
    setVideos([]);

    const result = await scanDirectory(ROOT_PATH);
    setVideos(result);

    setScanning(false);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const openPreview = (path) => {
    setSelectedVideo(path);
    setPaused(false);
    setPreviewVisible(true);
  };

  const closePreview = () => {
    setPaused(true);
    setPreviewVisible(false);
    setSelectedVideo(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Video Scanner</Text>

      <Button title="Scan All Videos" onPress={startScan} />

      <Text style={styles.info}>
        {scanning ? (
          <ActivityIndicator size="large" color="#6C63FF" />
        ) : (
          `Videos found: ${videos.length}`
        )}
      </Text>

      <FlatList
        data={videos}
        numColumns={2}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.videoBox}
            onPress={() => openPreview(item)}
          >
            <Text numberOfLines={2} style={styles.videoName}>
              {item.split('/').pop()}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* ▶ VIDEO PREVIEW MODAL */}
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

          {selectedVideo && (
            <Video
              source={{ uri: 'file://' + selectedVideo }}
              style={styles.videoPlayer}
              controls
              resizeMode="contain"
              paused={paused}
            />
          )}

          <Button title="Close" onPress={closePreview} />
        </View>
      </Modal>
    </View>
  );
};

export default VideosHome;

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
  videoBox: {
    width: '48%',
    margin: '1%',
    height: 100,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 8,
  },
  videoName: {
    color: '#fff',
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeArea: {
    ...StyleSheet.absoluteFillObject,
  },
  videoPlayer: {
    width: '100%',
    height: '70%',
  },
});

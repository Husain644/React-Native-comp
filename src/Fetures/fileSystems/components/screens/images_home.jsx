import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
    ActivityIndicator,
} from 'react-native';
import RNFS from 'react-native-fs';

const IMAGE_EXT = ['jpg', 'jpeg', 'png', 'webp'];

const ImagesHome = () => {
  const ROOT_PATH = RNFS.ExternalStorageDirectoryPath;

  const [images, setImages] = useState([]);
  const [scanning, setScanning] = useState(false);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔐 Permission
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
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
          if (IMAGE_EXT.includes(ext)) {
            collected.push(file.path);
          }
        } else if (file.isDirectory()) {
          await scanDirectory(file.path, collected);
        }
      }
    } catch (e) {
      // ignore inaccessible folders
    }
    return collected;
  };

  const startScan = async () => {
    setScanning(true);
    setImages([]);

    const result = await scanDirectory(ROOT_PATH);
    setImages(result);

    setScanning(false);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const openPreview = (path) => {
    setSelectedImage(path);
    setPreviewVisible(true);
  };

  const closePreview = () => {
    setPreviewVisible(false);
    setSelectedImage(null);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📸 Image Scanner</Text>

      <Button title="Scan All Images" onPress={startScan} />

      <Text style={styles.info}>
        {scanning ? <ActivityIndicator size="large" color="#6C63FF" /> : `Images found: ${images.length}`}
      </Text>

      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openPreview(item)}>
            <Image
              source={{ uri: 'file://' + item }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
      />

      {/* 🔍 IMAGE PREVIEW MODAL */}
      <Modal
        visible={previewVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closePreview}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.closeArea}
            activeOpacity={1}
            onPress={closePreview}
          />
          <Image
            source={{ uri: 'file://' + selectedImage }}
            style={styles.previewImage}
            resizeMode="contain"
          />
          <Button title="Close" onPress={closePreview} />
        </View>
      </Modal>
    </View>
  );
};

export default ImagesHome;

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
  image: {
    width: '32%',
    height: 120,
    margin: '1%',
    borderRadius: 6,
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
  previewImage: {
    width: '100%',
    height: '80%',
  },
});

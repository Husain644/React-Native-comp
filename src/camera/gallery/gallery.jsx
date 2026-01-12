import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useNavigation } from '@react-navigation/native';

const Gallery = () => {
  const navigation = useNavigation();
  const [photos, setPhotos] = useState([]);
  const [after, setAfter] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

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

  const getPhotos = async () => {
    if (!hasNextPage) return;

    const res = await CameraRoll.getPhotos({
      first: 40,
      after,
      assetType: 'Photos',
    });

    setPhotos(prev => [...prev, ...res.edges]);
    setAfter(res.page_info.end_cursor);
    setHasNextPage(res.page_info.has_next_page);
  };

  useEffect(() => {
    requestPermission().then(getPhotos);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Photos ({photos.length})</Text>
      </View>

      <FlatList
        data={photos}
        numColumns={2}
        keyExtractor={(item, index) => item.node.image.uri + index}
        initialNumToRender={20}
        onEndReached={getPhotos}        // ✅ pagination
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageWrapper}
            onPress={() =>
              navigation.navigate('Photo2', {
                img: item.node.image.uri,
              })
            }
          >
            <Image
              source={{ uri: item.node.image.uri }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  imageWrapper: {
    width: '50%',
    height: 200,
    padding: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

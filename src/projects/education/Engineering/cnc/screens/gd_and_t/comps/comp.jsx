import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Language } from '../../../components/utils/util';
import LottieView from 'lottie-react-native';
import anim from './anim.json'
import { WebView } from 'react-native-webview';

export default function CylindricityPage({route}) {
  const {title,imageUrl}=route.params
  console.log(imageUrl,title)
  const isHindi=Language()==='hi';
  return (
    <ScrollView style={styles.container}>
      

      {/* Title */}
      <Text style={styles.title}>
        {isHindi ? '🌀 सिलिंड्रिसिटी (Cylindricity)' : '🌀 Cylindricity'}
      </Text>

      {/* Image */}
      <Image
        source={{uri:imageUrl}}
        style={styles.image}
        resizeMode='contain'
      />

      {/* Description */}
      <Text style={styles.description}>
        {isHindi
          ? `सिलिंड्रिसिटी एक जियोमेट्रिक टॉलरेंस है जो किसी सिलिंडर की सतह की गोलाई और सीधापन को नियंत्रित करता है। इसका उपयोग यह सुनिश्चित करने के लिए किया जाता है कि पूरे सिलिंडर में एक समानता बनी रहे।`
          : `Cylindricity is a geometric tolerance that controls how round and straight the entire surface of a cylinder must be. It ensures uniformity across the full length of a cylindrical surface.`}
      </Text>

      {/* Video */}
      <Text style={styles.subtitle}>{isHindi ? '🎥 वीडियो' : '🎥 Video Explanation'}</Text>
      <View style={styles.videoContainer}>
        <LottieView
        source={anim}
        autoPlay
        loop
        style={{ width:'100%', height: '100%',backgroundColor:'#ccc' }}

      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  languageToggle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 12,
  },
  langLabel: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#1e1e1e',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 24,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#444',
  },
  videoContainer: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 30,
  },
  webview: {
    flex: 1,
  },
});

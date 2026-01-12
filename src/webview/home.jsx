import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const HomeWebView = () => {
  const urlList = [
    'https://reactnative.dev/',
    'https://chatgpt.com/',
    'https://m.youtube.com',
    'https://github.com'
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      nestedScrollEnabled={true}          // ✅ REQUIRED for Android
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator
        {...(Platform.OS === 'android' && {
        persistentScrollbar: true,
        scrollBarThumbColor: '#1409da',     // ✅ Android thumb color
      })}
    >
      {urlList.map((url, index) => (
        <View key={index} style={styles.webviewContainer}>
          <WebView
            source={{ uri: url }}
            style={styles.webview}
            nestedScrollEnabled={true}    // ✅ inner scroll
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            startInLoadingState={true}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    paddingVertical: 10,
  },
  webviewContainer: {
    height: 450,
    marginVertical: 8,
    marginHorizontal: 22,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  webview: {
    flex: 1,
  },
});

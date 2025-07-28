import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { WebView } from "react-native-webview";
import { Language } from "../../components/utils/util";
import { cncParts } from "../../data/data";

const CNCParts = () => {
  const isHindi = Language() === "hi";
  const width = useWindowDimensions().width;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        {isHindi
          ? "🧩 CNC मशीन के भाग (एनिमेशन सहित)"
          : "🧩 CNC Machine Parts with Animation"}
      </Text>
      {cncParts.map((part, index) => (
        <Animated.View
          entering={FadeInUp.delay(index * 100)}
          key={part.id}
          style={styles.card}
        >
          <Text style={styles.partName}>
            {isHindi ? part.name.hi : part.name.en}
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ height: 200,backgroundColor:'#fff',alignItems:'flex-end'}}
            pagingEnabled={true}
          >
            {part.image.map((item, ind) => {
              return (
                <ImageBackground
                  key={ind}
                  source={item.img}
                  style={[styles.image]}
                  resizeMode="stretch"
                >
                  <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>{item.name}</Text>
                  </View>
                </ImageBackground>
              );
            })}
          </ScrollView>
          <Text style={styles.description}>
            {isHindi ? part.description.hi : part.description.en}
          </Text>

          <View style={styles.videoContainer}>
            <WebView
              source={part.video}
              style={styles.webview}
              javaScriptEnabled
              domStorageEnabled
              allowsFullscreenVideo
            />
          </View>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderTopWidth: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#2c3e50",
    textAlign: "center",
  },
  card: {
    marginBottom: 28,
    backgroundColor: "#daf5dd",
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  partName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3742fa",
    marginBottom: 6,
  },
  image: {
    width:350, 
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  textContainer: {
    position: "absolute",
    top:-10,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
  textTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontStyle: "italic",
    letterSpacing: 1,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    paddingHorizontal:5
  },
  description: {
    fontSize: 15,
    color: "#2f3542",
    marginBottom: 10,
  },
  videoContainer: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  webview: {
    width: "100%",
    height: "100%",
  },
});

export default CNCParts;

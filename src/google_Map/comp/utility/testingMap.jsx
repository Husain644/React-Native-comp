import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Region } from "react-native-maps";

export default function MapWithAddress() {
  const mapRef = useRef(null);
  const [address, setAddress] = useState("Move the map to get address");

  // Called when user stops moving/zooming
  const handleRegionChangeComplete = async (region) => {
    if (!mapRef.current) return;

    try {
      // Take the center of the region
      const result = await mapRef.current.addressForCoordinate({
        latitude: region.latitude,
        longitude: region.longitude,
      });

      console.log("📍 Address result:", result);
      setAddress(
        `${result.name || ""}, ${result.locality || ""}, ${result.country || ""}`
      );
    } catch (err) {
      console.error("❌ Failed to fetch address:", err);
    }
  };

  return (
    <View style={styles.container}>

      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 26.9124,   // Jaipur
          longitude: 75.7873,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onRegionChangeComplete={handleRegionChangeComplete} // 👈 added here
      />
    <View style={styles.addressBox}>
        <Text style={styles.addressText}>{address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  addressBox: {
    position: "absolute",
    top: 20,
    left: 10,
    right: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  addressText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});

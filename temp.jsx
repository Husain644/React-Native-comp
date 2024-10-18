import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'YOUR_API_KEY_HERE';

export default function MapScreen() {
  const origin = { latitude: 37.78825, longitude: -122.4324 };
  const destination = { latitude: 37.759703, longitude: -122.428093 };

  const [routes, setRoutes] = React.useState([]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          provideRouteAlternatives={true}  // Enable alternative routes
          onReady={(result) => {
            setRoutes(result.routes); // Save multiple routes
          }}
        />

        {routes.map((route, index) => (
          <Polyline
            key={`route-${index}`}
            coordinates={route.coordinates}
            strokeWidth={3}
            strokeColor={index === 0 ? "blue" : "green"} // Different colors for routes
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

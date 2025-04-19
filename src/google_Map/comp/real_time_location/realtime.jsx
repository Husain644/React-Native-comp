import React, {useState, useEffect} from 'react';
import {View, Text, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationTracker = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    let watchId = null;

    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs access to your location',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            startWatching();
          } else {
            setLocationError('Location permission denied');
          }
        } catch (err) {
          console.warn(err);
          setLocationError('Failed to request location permission');
        }
      } else {
        startWatching();
      }
    };

    const startWatching = () => {
      watchId = Geolocation.watchPosition(
        position => {
          setCurrentLocation(position.coords);
          setLocationError(null);
        },
        error => {
          setLocationError(error.message);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 10, // Minimum distance (in meters) between updates
          interval: 5000, // Interval for active location updates (ms)
          fastestInterval: 2000, // Fastest interval for location updates (ms)
        },
      );
    };

    requestLocationPermission();

    return () => {
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {locationError ? (
        <Text>Error: {locationError}</Text>
      ) : currentLocation ? (
        <>
          <Text>Latitude: {currentLocation.latitude}</Text>
          <Text>Longitude: {currentLocation.longitude}</Text>
          <Text>Accuracy: {currentLocation.accuracy} meters</Text>
          <Text>Speed: {currentLocation.speed || 0} m/s</Text>
          <Text>Heading: {currentLocation.heading || 0}° from true North</Text>
          <Text>
            Last updated: {new Date(currentLocation.timestamp).toLocaleString()}
          </Text>
        </>
      ) : (
        <Text>Getting location...</Text>
      )}
    </View>
  );
};

export default LocationTracker;
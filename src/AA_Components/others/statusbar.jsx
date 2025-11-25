import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function StatusBarStyling() {

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* Light content (white icons) on dark background */}
      <StatusBar
        // backgroundColor="rgba(0,0,0,.5)"  // Android
        // barStyle="light-content"   // iOS + Android
        translucent={false} //true → content goes behind the status bar
        hidden={false}
      />
      <Text>Home Screen</Text>
    </View>
  );
}

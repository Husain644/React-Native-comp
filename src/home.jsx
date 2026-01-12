import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import Orientation from "react-native-orientation-locker";
import KeepAwake from 'react-native-keep-awake';
import { AllNav } from './NavData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [show, setShow] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(null);
  const position = useRef(new Animated.Value(-500)).current;

  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const shower = () => {
    if (show) {
      Animated.timing(position, {
        toValue: -500,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(position, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setShow(!show);
  };

  const handleMenuItemPress = (item) => {
    setCurrentScreen(item);
    shower(); // Close menu after selection
  };

  const handleMenuItemPressMain = (item) => {
    setCurrentScreen(item);
  };

  const renderContent = () => {
    if (currentScreen && currentScreen.component) {
      const ScreenComponent = currentScreen.component;
      const componentProps = currentScreen.props || {};
      return (
        <View style={styles.contentContainer}>
          <ScreenComponent {...componentProps}/>
        </View>
      );
    }

    return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {AllNav.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMenuItemPressMain(item)}
            style={styles.menuItemContainer}
            activeOpacity={0.7}
          >
            <View style={styles.menuItem}>
              <Icon name={item.icon} size={25} color="#000" />
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{item.screenName}</Text>
                <Text style={styles.menuDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <KeepAwake />
      
      {/* Backdrop */}
      {show && (
        <TouchableOpacity
          style={styles.backdrop}
          onPress={shower}
          activeOpacity={1}
        />
      )}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => setCurrentScreen(null)}
          activeOpacity={0.8}
        >
          <Text style={styles.homeButtonText}>Home Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={shower} style={styles.menuButton} activeOpacity={0.7}>
          {show ? (
            <Icon name="close" size={35} color="#000" />
          ) : (
            <Icon name="menu" size={35} color="#000" />
          )}
        </TouchableOpacity>
      </View>

      {/* Side Menu */}
      <Animated.View
        style={[
          styles.sideMenu,
          { transform: [{ translateX: position }] }
        ]}
      >
        <ScrollView 
          style={styles.sideMenuScrollView}
          contentContainerStyle={styles.sideMenuContent}
          showsVerticalScrollIndicator={false}
        >
          {AllNav.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleMenuItemPress(item)}
              style={styles.sideMenuItem}
              activeOpacity={0.7}
            >
              <Icon name={item.icon} size={25} color="#000" />
              <View style={styles.sideMenuTextContainer}>
                <Text style={styles.sideMenuTitle}>{item.screenName}</Text>
                <Text style={styles.sideMenuDescription} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>

      {/* Main Content */}
      {renderContent()}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  homeButton: {
    backgroundColor: '#292828',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 12,
    right: 20,
    zIndex: 3,
    padding: 5,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#fff',
    width: '80%',
    maxWidth: 300,
    zIndex: 2,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  sideMenuScrollView: {
    flex: 1,
  },
  sideMenuContent: {
    paddingVertical: 80,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  sideMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sideMenuTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  sideMenuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  sideMenuDescription: {
    fontSize: 12,
    color: '#666',
  },
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  menuItemContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
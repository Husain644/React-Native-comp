import * as React from 'react';
import { Button, View,TouchableOpacity,Text,StyleSheet, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
     const navi=()=>{
      navigation.navigate("Profile",{name:'md husain',roll:226})
     }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'lightgreen' }}>
      <TouchableOpacity onPress={navi}>
          <Text style={{marginTop:20,backgroundColor:'red',fontSize:25,color:'white'}}>
            click to go in profile page
          </Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ route,navigation }) {
   const {name,roll}=route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'lightblue',gap:20 }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="change params" onPress={() => navigation.setParams({name:'shah husain',roll:235})} />
      <Text>name:{name},- roll No{roll}</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'pink' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ccc',gap:20 }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  function LogoTitle() {
    return (
      <View style={{width:'100%'}}>
         <Icon name="rocket" size={30} color="#900" />
      </View>
     
    );
  }
  const config = {
    animation:'timing',
    config: {
      duration: 300,
      easing: Easing.linear,
    },
  }
  const closeConfig={
    animation:'timing',
    config: {
      duration: 300,
      easing: Easing.linear,
    },
  }
  return (
    <Stack.Navigator screenOptions={{
      gestureEnabled:true,
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
      //CardStyleInterpolators.forVerticalIOS use other types of interpolators that are needs to be implemented
 }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{name:'Home screen', headerStyle: {
            backgroundColor: '#CB5567'}, headerTintColor: '#fff',  headerTitleStyle: {fontWeight: 'bold'}}}/>
      <Stack.Screen name="Notifications" component={NotificationsScreen} 
      options={{headerTitle:()=><LogoTitle/> }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{name:'husain',roll:120}} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function HomeNav() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}




// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import CompA from './compa';
// import CompB from './compb';



// //const Stack = createNativeStackNavigator()
// const Stack=createStackNavigator();

// export default function HomeNav() {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="CompA">
//         <Stack.Screen name="CompA" component={CompA}  />
//         <Stack.Screen name="CompB" component={CompB}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



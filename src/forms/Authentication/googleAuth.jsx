import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { firebaseAuth, GoogleAuthProvider, signInWithCredential  } from "./firebase/firebase_initialize.jsx";

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId:
    "205302710251-cbdco1fa03r11sc9305qcs4u5sit3do4.apps.googleusercontent.com",
     offlineAccess: true,
});

async function onGoogleButtonPress() {
  try {
    console.log('sign in function run');
    const { idToken } = await GoogleSignin.signIn();
    // const googleCredential = GoogleAuthProvider.credential(idToken);
    // const res = await signInWithCredential(firebaseAuth, googleCredential);
    console.log('User signed in:',idToken);
  } catch (error) {
    console.log('Google sign-in error:', error);
  }
}

const GoogleAuth = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems:'center',
          width: "100%",
          height:"100%",
          backgroundColor:'#e6ccc7'
        }}
      >
        <TouchableOpacity style={{
          width: "50%",
          height:50,
          backgroundColor:'#5247ea'}} onPress={onGoogleButtonPress}>
          <Text style={{fontSize:20,color:'#fffefe',textAlign:'center'}}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({});

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "357362817401-hkjn9lllp7onmh9cql4nf4j2namp7ep7.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      console.log("sign in function run");

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const result = await GoogleSignin.signIn();
      console.log("Google sign-in result:", JSON.stringify(result, null, 2));

      const googleUser = result?.data?.user;
      console.log("Google user:", googleUser);

      setUser(googleUser || null);
    } catch (error) {
      console.log(
        "Google sign-in error (FULL):",
        JSON.stringify(error, null, 2)
      );
    }
  };

  const onGoogleLogout = async () => {
    try {
      // optional but good: revoke access so app is disconnected
      await GoogleSignin.revokeAccess(); // removes the app from Google account
      await GoogleSignin.signOut();      // signs out from current device/session

      setUser(null); // clear local user state
      console.log("✅ Logged out from Google");
    } catch (error) {
      console.log("Google logout error:", JSON.stringify(error, null, 2));
    }
  };

  const avatarUri =
    (user && user.photo) || "https://reactnative.dev/img/tiny_logo.png";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ alignItems: "center" }}>
          <Text>Email: {user?.email || "user@gmail.com"}</Text>
          <Text>Name: {user?.name || "Guest"}</Text>

          <Image source={{ uri: avatarUri }} style={styles.avatar} />
        </View>

        {user ? (
          // If logged in → show Logout button
          <TouchableOpacity style={[styles.button, { backgroundColor: "tomato" }]} onPress={onGoogleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        ) : (
          // If not logged in → show Login button
          <TouchableOpacity style={styles.button} onPress={onGoogleButtonPress}>
            <Text style={styles.buttonText}>Sign In with Google</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6ccc7",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 8,
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#5247ea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal:10
  },
  buttonText: {
    fontSize: 20,
    color: "#fffefe",
    textAlign: "center",
  },
});

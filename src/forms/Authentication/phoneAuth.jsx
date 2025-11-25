import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { getAuth, signInWithPhoneNumber } from "@react-native-firebase/auth";
const auth = getAuth();

const AuthScreen = () => {
  const [phone, setPhone] = useState("");          // "+9198xxxxxx"
  const [confirm, setConfirm] = useState(null);    // Firebase confirmation
  const [code, setCode] = useState("");            // OTP



  // ---------- PHONE SIGN IN: STEP 1 (send OTP) ----------
  const signInWithPhone = async () => {
    if (!phone) {
      Alert.alert("Error", "Please enter phone number with country code, e.g. +9198xxxxxx");
      return;
    }
    try {
      const confirmation = await signInWithPhoneNumber(auth, phone);
      setConfirm(confirmation);
      Alert.alert("OTP Sent", "Please check your SMS for OTP.");
    } catch (err) {
      console.log("Phone Sign-In error:", err);
      Alert.alert("Phone Sign-In error", err.message);
    }
  };

  // ---------- PHONE SIGN IN: STEP 2 (confirm OTP) ----------
  const confirmCode = async () => {
    if (!confirm || !code) {
      Alert.alert("Error", "Enter the OTP first.");
      return;
    }
    try {
      const userCredential = await confirm.confirm(code);
      console.log("Phone user:", userCredential.user);
      Alert.alert("Logged in with Phone", userCredential.user.phoneNumber);
      setConfirm(null);
      setCode("");
    } catch (err) {
      console.log("OTP confirm error:", err);
      Alert.alert("Invalid Code", "The code you entered is invalid.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auth Demo</Text>

   

      {/* ---------- PHONE INPUT ---------- */}
      <TextInput
        style={styles.input}
        placeholder="+91XXXXXXXXXX"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.btn} onPress={signInWithPhone}>
        <Text style={styles.btnText}>Send OTP</Text>
      </TouchableOpacity>

      {/* If OTP has been sent, show input for code */}
      {confirm && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity style={styles.btn} onPress={confirmCode}>
            <Text style={styles.btnText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
  },
  googleBtn: {
    backgroundColor: "#4285F4",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  googleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  orText: {
    textAlign: "center",
    marginVertical: 16,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 12,
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});

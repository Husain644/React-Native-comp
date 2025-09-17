import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Nature from "./assets/images/nature.jpg";
import { useNavigation } from "@react-navigation/native";
import { firebaseAuth } from "./firebase/firebase_initialize.jsx";
import {createUserWithEmailAndPassword} from '@react-native-firebase/auth';


const EmailAuth = () => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const [isRegister, setIsRegister] = useState(false);
  const [userData,setUserData]=useState({email:'jilayi3223@kwifa.com',password:'pass124568@4'});

 const Ragister=async()=>{
    try {
       const res=await createUserWithEmailAndPassword(firebaseAuth,userData.email,userData.password);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
 }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={Nature}
          resizeMode="cover"
          style={[
            styles.mainCintainer,
            { justifyContent: "center" },
          ]}
        >
          <View
            style={[
              styles.container,
              height > width
                ? { height: "90%", width: "95%", flexDirection: "column" }
                : { height: height * 0.9, width: width * 0.85, flexDirection: "row" },
            ]}
          >
            {/* FORM */}
            <View
              style={[
                styles.innerContainer,
                height > width
                  ? { width: "90%" }
                  : { width: "50%", height: "95%" },
              ]}
            >
              <Text style={styles.h2}>
                {isRegister ? "Register with Email" : "Sign In with Email"}
              </Text>

              {/* Extra field for Register */}
              {isRegister && (
                <View style={styles.inputWrapper}>
                  <Icon name="user" size={22} color="#900" />
                  <TextInput
                    placeholder="Full Name"
                    style={styles.inputStyle}
                  />
                </View>
              )}

              <View style={styles.inputWrapper}>
                <Icon name="envelope" size={22} color="#900" />
                <TextInput
                  placeholder="Email"
                  style={styles.inputStyle}
                  keyboardType="email-address"
                  onChangeText={(e)=>{setUserData({...userData,email:e})}}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Icon name="lock" size={22} color="#900" />
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  style={styles.inputStyle}
                  onChangeText={(e)=>{setUserData({...userData,password:e})}}
                />
              </View>

              {/* Confirm Password only for Register */}
              {isRegister && (
                <View style={styles.inputWrapper}>
                  <Icon name="lock" size={22} color="#900" />
                  <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.inputStyle}
                  />
                </View>
              )}

              {!isRegister && (
                <TouchableOpacity
                  onPress={() => {}}
                  style={[styles.btnStyle, { width: "90%" }]}
                  activeOpacity={0.6}
                >
                  <Text style={styles.btnText}>Forgot password?</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                onPress={() => {
                  // Handle Login or Register action here
                  if (isRegister) {
                    Ragister()
                  } else {
                    console.log("Login action");
                  }
                }}
                style={[styles.longBtnStyle]}
                activeOpacity={0.6}
              >
                <Text style={styles.btnText}>
                  {isRegister ? "Register" : "Login"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Social login + toggle */}
            <View
              style={[
                styles.innerContainer,
                height > width
                  ? { width: "90%" }
                  : { width: "50%", height: "95%" },
              ]}
            >
              <Text style={{ fontSize: 20, color: "#000" }}>
                or {isRegister ? "register" : "sign in"} with
              </Text>

              <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                {["phone", "facebook", "google", "twitter", "github"].map(
                  (iconName) => (
                    <TouchableOpacity key={iconName} style={styles.iconWrapper} onPress={()=>{
                        navigation.navigate(iconName)
                    }}>
                      <Icon name={iconName} size={18} color="#fff" />
                    </TouchableOpacity>
                  )
                )}
              </View>

              <View style={{ marginTop: 15, alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "#fff" }}>
                  {isRegister
                    ? "Already have an account?"
                    : "Don’t have an account?"}
                </Text>
                <TouchableOpacity
                  onPress={() => setIsRegister(!isRegister)}
                  activeOpacity={0.6}
                >
                  <Text
                    style={styles.ragister}
                  >
                    {isRegister ? "Login" : "Register"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EmailAuth;

const styles = StyleSheet.create({
  mainCintainer: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 5,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  h2: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 10,
  },
  innerContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    padding: 15,
  },
  iconWrapper: {
    width: 40,
    height: 35,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    margin: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    height: 50,
    borderColor: "#dedada",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    fontStyle: "italic",
  },
  longBtnStyle: {
    backgroundColor: "#663399",
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    marginVertical: 10,
    paddingVertical: 8,
  },
  btnStyle: {
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 4,
    
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  ragister:{
    fontSize: 18,
    color: "#1c065d",
    backgroundColor:'#fff',
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontStyle: "italic",
    marginTop: 10,
    padding:5,
    borderRadius:10,
    width:150,
    borderWidth:1,
    
    textAlign:'center'
  }
});

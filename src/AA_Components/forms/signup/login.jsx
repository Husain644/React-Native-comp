import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import { React, useState,useRef } from "react";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import css from "../../css/css";
import { getData,sendData } from "../../../utility/func";

const Login = () => {
  const [login, setLogin] = useState(true);
  const initial={ email: "", password: "" }
  const [data, setData] = useState(initial);

  const Submit = () => {}
  const width=Dimensions.get('window').width
  const position = useRef(new Animated.Value(0)).current

  const animat=()=>{
    setLogin((v)=>!v)
    Animated.timing(position,{
        toValue: login?-width:0,
        duration: 300,
        useNativeDriver: true,
      }).start()
  }
  
  return (
    <View style={{ flex: 1, flexDirection: "row",overflow:'hidden' }}>
      {/* Login screen */}
      <Animated.View
        style={[css.center,{transform:[{translateX:position}]}]}
      >
        <View
          style={{
            position: "absolute",
            width: 250,
            height: 200,
            backgroundColor: "skyblue",
            top: 0,
            zIndex: 1,
            right: 0,
            borderBottomLeftRadius: 170,
          }}
        ></View>
        <Icon
          name="user"
          size={100}
          style={{ position: "absolute", top: 50, right: 50, zIndex: 9 }}
          color="red"
        />
        <Text
          style={{ color: "#fff", marginBottom: 20, fontSize: 30, zIndex: 10 }}
        >
          Login
        </Text>
        <View style={[css.inputWrapper]}>
        <Text style={css.label}>name</Text>
          <TextInput
            style={[css.input]}
            placeholder="Enter email"
            inputMode="email"
          /><Text style={css.label}>name</Text>
          <TextInput
            style={[css.input]}
            placeholder="Enter password"
            inputMode="text"
            rows={1}
            multiline={true}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={Submit}>
            <Text style={{ padding: 3, fontSize: 18 }}>Forgot password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[css.submitBtn]} onPress={getData}>
            <Text style={[css.submitBtnTxt]}>submit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 20 }}
          onPress={animat}
        >
          <Text
            style={{
              fontSize: 20,
              color: "red",
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            Register ?
          </Text>
        </TouchableOpacity>
      </Animated.View>
      {/* Register screen */}
      <Animated.View
        style={[css.center,{transform:[{translateX:position}]}]}
      >
        <View
          style={{
            position: "absolute",
            width: 250,
            height: 200,
            backgroundColor: "skyblue",
            top: 0,
            zIndex: 1,
            right: 0,
            borderBottomLeftRadius: 170,
          }}
        ></View>
        <Icon
          name="user"
          size={100}
          style={{ position: "absolute", top: 50, right: 50, zIndex: 9 }}
          color="red"
        />
        <Text
          style={{ color: "#fff", marginBottom: 20, fontSize: 30, zIndex: 10 }}
        >
          Register
        </Text>
        <View style={[css.inputWrapper]}>
            <Text style={css.label}>name</Text>
          <TextInput
            style={[css.input]}
            placeholder="Enter email"
            inputMode="email"
          /><Text style={css.label}>name</Text>
          <TextInput
            style={[css.input]}
            placeholder="Enter password"
            inputMode="text"
          /><Text style={css.label}>name</Text>
          <TextInput
          style={[css.input]}
          placeholder="Enter password"
          inputMode="text"
          rows={1}
          multiline={true}
        />
          <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={sendData}>
            <Text style={{ padding: 3, fontSize: 18 }}>Forgot password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[css.submitBtn]} onPress={sendData}>
            <Text style={[css.submitBtnTxt]}>submit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 20 }}
          onPress={animat}
        >
          <Text
            style={{
              fontSize: 20,
              color: "red",
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            Login ?
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});

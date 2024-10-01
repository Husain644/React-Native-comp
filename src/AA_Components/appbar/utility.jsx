import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { React, useState } from "react";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const CustomInput = ({ placeholder = "search" }) => {
  const [value, setValue] = useState("");
  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          backgroundColor: "#fff",
          width: 200,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Icon
        name="search"
        size={20}
        color="#ccc"
        style={{ position: "absolute", top: 8, right: 10 }}
      />
    </View>
  );
};
export default CustomInput;
///////////////////////////////////////
export const SmallModal = () => {
  const data = [
    { name: "New group", icon: "user-plus" },
    { name: "New broadcast", icon: "volume-control-phone" },
    { name: "Linked Devices", icon: "plug" },
    { name: "Starred messages", icon: "star" },
    { name: "Payments", icon: "qrcode" },
    { name: "Setting", icon: "cog" },
  ];
  const [show, setShow] = useState(false);
  const togle = () => {
    setShow(!show);
  };
  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity
        style={{ width: 30, alignItems: "center", padding: 2 }}
        onPress={togle}
      >
        <Icon name="ellipsis-v" size={20} color="#000" style={{}} />
      </TouchableOpacity>
      {show && (
        <>
          <View
            style={{
              position: "absolute",
              top: 20,
              right: 0,
              backgroundColor: "#ccc",
              minWidth: 250,
              zIndex: 10,
              borderRadius: 5,
              padding: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 9,
              },
              shadowOpacity: 0.48,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 1,
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    margin: 5,
                    borderWidth: 1,
                    padding: 5,
                    borderColor: "#999",
                    gap: 10,
                    flexDirection: "row",
                  }}
                >
                  <Icon
                    name={item.icon}
                    size={20}
                    color="#000"
                    style={{ marginRight: 10 }}
                  />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={togle}
            style={{
              position: "absolute",
              top: 0,
              right: -10,
              zIndex: 9,
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}
          ></TouchableOpacity>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({});

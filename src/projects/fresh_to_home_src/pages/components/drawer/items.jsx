import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { FontIcon } from "../../../../../assets/assets";

const pages = [
  { name: "account", url: "account",icon:'user' },
  { name: "cart", url: "cart",icon:'shopping-cart' },
  { name: "home", url: "home",icon:'home' },
  { name: "categories", url: "categories",icon:'align-justify' },
  { name: "favorite", url: "favorite",icon:'thumbs-o-up' },
  { name: "map", url: "map",icon:'map-marker' },
];

const DrawerLink = () => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help Page itm</Text>
      {pages.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => navigation.navigate(item.url)}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <FontIcon name={item.icon}/>
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
};
export default DrawerLink;
const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: "#fff",
    height: "100%",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    backgroundColor: "pink",
    paddingVertical: 10,
  },
  item: { paddingHorizontal: 20, borderBottomWidth: 1 ,borderColor:'#ccc',flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'},
  itemText: { fontSize: 18, textTransform: "capitalize",color:'#000'},
});

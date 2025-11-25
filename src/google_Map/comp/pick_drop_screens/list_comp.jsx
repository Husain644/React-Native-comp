import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListComp = ({item,getLatLong}) => {
  return (
    <View style={{ backgroundColor: "#fff", paddingVertical: 2 }}>
                 <TouchableOpacity
                   onPress={() => {
                     getLatLong(item.place_id,item.description);
                   }}
                   style={{
                     flexDirection: "row",
                     backgroundColor: "#ccc",
                     alignItems: "center",
                     gap: 10,
                   }}
                 >
                   <Icon
                     name="map-marker"
                     style={{ marginLeft: 10 }}
                     color="#000"
                     size={25}
                   />
                   <View style={{}}>
                     <Text style={{ fontSize: 18, color: "#000" }}>
                       {item.structured_formatting.main_text}
                     </Text>
                     <Text style={{ fontSize: 13, color: "#000" }}>
                       {item.description}
                     </Text>
                   </View>
                 </TouchableOpacity>
               </View>
  );
};

export default ListComp;

const styles = StyleSheet.create({});

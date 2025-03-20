import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { H5, H6 } from "../../../../AA_Components/divider/heading";
const Cart = ({ route }) => {
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <H5 txt="My Cart" />
      {/* Address Section */}
      <View>
        <View>
          <Text>
            {" "}
            <Text></Text>
          </Text>
        </View>
        <View>
          <View></View>
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Products List  */}
      <View>
        <Image />
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>

      {/* Price Details */}
      <View>
        <H6 txt="Price Details" />
        <View>
          <Text></Text>
          <Text></Text>
        </View>

        <View>
          <Text></Text>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      {/* place orders and Totals price  */}
      <View>
        <Text></Text>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});

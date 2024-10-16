import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import axios from "axios";

const GetData = () => {
  const Get = async () => {
    const url =
      "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&language=fr&key=AIzaSyC_s-1cRcgLN2mvsN2GDCNUs86t-SXv4us";

axios.get(url, {
        headers: { 'X-XSS-Protection':0},
      })
      .then((res) => console.log(res.data.predictions))
      .catch((err) => console.error(err));
  };
  return (
    <View style={{ padding: 50 }}>
      <Text>GetData</Text>
      <Button title="Get Data" onPress={Get} />
    </View>
  );
};

export default GetData;

const styles = StyleSheet.create({});

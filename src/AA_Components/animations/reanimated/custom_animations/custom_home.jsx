import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WaveAnimation,Star} from "./comp/anim1";

const CustomHome = () => {
  return (
    <>
      <WaveAnimation/>
      <Star/>
    </>
  );
};

export default CustomHome;

const styles = StyleSheet.create({});

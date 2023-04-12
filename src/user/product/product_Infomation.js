import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Product_Infomation(props) {
  return (
    <View>
      <Text>{props.information}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

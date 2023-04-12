import { React, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import HeaderAccount from "../HeaderAccount";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonView from "../dungchung/btn";
import TTinfoUser from "../dungchung/TTinfroUser";

const infoUser = ({ navigation }) => {
  const replaceNav = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderAccount style={{ position: "relative" }} />
      <View style={styles.back}>
        <Ionicons
          onPress={replaceNav}
          style={styles.icon}
          name="arrow-back"
          color="#FFFFFF"
          size={24}
        />
        <Text style={styles.backText}>Thông tin cá nhân</Text>
      </View>

      <TTinfoUser />

      <ButtonView />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    flexDirection: "row",
    height: "100%",
  },

  backText: {
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 30,
    marginBottom: 25,
  },

  icon: {
    position: "absolute",
    top: 6,
  },
});

export default infoUser;

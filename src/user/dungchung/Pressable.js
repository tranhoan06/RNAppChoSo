import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function PressableView() {
    const navigation = useNavigation();
  return (
    <View style={styles.pressable}>
      <View style={{ width: "40%", marginTop: 18 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#CACCCD" : "#EEF3FA",
            borderRadius: 8,
            width: "100%",
            padding: 10,
          })}
        >
          <Text style={[styles.textBtn, { color: "#1790E2" }]}>Hủy</Text>
        </Pressable>
      </View>

      <View style={{ width: "40%", marginTop: 18 }}>
        <Pressable
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#CACCCD" : "#1790E2",
            borderRadius: 8,
            width: "100%",
            padding: 10,
          })}
        >
          <Text style={styles.textBtn}>Lưu</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    pressable: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginBottom: 26,
      },

      textBtn: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
      },
});


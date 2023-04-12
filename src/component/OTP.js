import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";

const OTP = ({ navigation, route }) => {
  const onPressHandler = () => {
    if (route.params.source === "REGISTER") {
      navigation.navigate("Nhập mật khẩu", { source: "REGISTER" });
    }
    if (route.params.source === "FORGOTPASS") {
      navigation.navigate("Nhập mật khẩu", { source: "FORGOTPASS" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <Text style={{ fontSize: 16, color: "black" }}>
          Mã OTP được gửi về SĐT
          <Text style={{ color: "#2F80E1" }}> 123456789</Text>
        </Text>
        <Text>Bạn còn 03 lần lượt yêu cầu mã OTP</Text>
      </View>

      <View style={styles.inputForm}>
        <TextInput
          style={styles.textInput}
          placeholder="Mã OTP"
          keyboardType="phone-pad"
        />
      </View>
      <Text style={{ marginTop: 16 }}>
        Bạn không nhận được mã OTP đăng nhập
        <Text style={{ color: "#2F80E1" }}> Gửi lại mã</Text>
      </Text>

      <View style={{ width: "80%", marginTop: 18 }}>
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#CACCCD" : "#1790E2",
            borderRadius: 8,
            width: "100%",
            padding: 10,
          })}
        >
          <Text style={styles.textBtn}>Tiếp tục</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  inputForm: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    width: "80%",
  },

  textInput: {
    fontSize: 16,
    width: 300,
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    width: "100%",
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default OTP;

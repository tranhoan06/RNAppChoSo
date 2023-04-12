import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Register = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Nhập mã xác nhận", { source: "REGISTER" });
  };

  const onPressHanlerBack = () => {
    navigation.navigate("Đăng nhập");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/img/logo.jpg")} />
      <View style={styles.inputForm}>
        <Icon style={styles.icon} name="phone" color="#ccc" size={20} />
        <TextInput
          style={styles.textInput}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
        />
      </View>

      <View style={{ width: "86%", marginTop: 18 }}>
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

      <Text
        style={{
          color: "#2F80E1",
          fontSize: 16,
          marginTop: 20,
          width: "70%",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        Nếu bạn đã có tài khoản hãy quay trở lại
        <Text onPress={onPressHanlerBack} style={styles.back}>
          {" "}
          Đăng nhập
        </Text>
      </Text>
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

  img: {
    marginTop: -50,
  },

  inputForm: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  textInput: {
    position: "relative",
    fontSize: 16,
    width: 350,
    paddingLeft: 40,
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
  },

  icon: {
    textAlign: "center",
    position: "absolute",
    left: 10,
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  back: {
    fontWeight: "bold",
  },
});

export default Register;

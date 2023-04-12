import { React, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import IconScan from "react-native-vector-icons/AntDesign";
import MiniModal from "../component/miniModal";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_API, BASE_URL } from "../constants.js/app";

const login = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);

  const [showPass, setShowPass] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("Đăng nhập thất bại");
  const [warning, setWarning] = useState(
    "Số điện thoại hoặc mật khẩu không đúng"
  );
  const [content, setContent] = useState(
    "Bạn vui lòng đăng nhập lại hoặc quên mật khẩu để lấy lại mật khẩu đăng nhập"
  );

  // Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPressHandler = () => {
    navigation.navigate("Quên mật khẩu");
  };

  const onPressHandleRegister = () => {
    navigation.navigate("Đăng ký");
  };

  // start firebase

  // if (numberValue?.length > 0 && passValue?.length > 0) {
  //   if (numberValue === "123" && passValue === "abc") {
  //     navigation.navigate("Thành công");
  //     setNumberValue("");
  //     setPassValue("");
  //   } else {
  //     setShowModal(true);
  //     setNumberValue("");
  //     setPassValue("");
  //   }
  // } else {
  //   setShowModal(true);
  //   setNumberValue("");
  //   setPassValue("");
  // }

  const onPressShowModal = async (event) => {
    if (username?.length <= 0 && password?.length <= 0) {
      setShowModal(true);
      return;
    }

    if (username?.length > 0 && password?.length > 0) {
      if (username === "123" && password === "abc") {
        navigation.navigate("Thành công");
        setUsername("");
        setPassword("");
      } else {
        setShowModal(true);
        setUsername("");
        setPassword("");
      }
    } else {
      setShowModal(true);
      setUsername("");
      setPassword("");
    }

    try {
      const response = await axios.post(`${BASE_API}/Login`, {
        username,
        password,
      });
      if (response.status === 200) {
        if (response.data.status === 1) {
          setShowModal(true);
          setUsername("");
          setPassword("");
        } else {
          try {
            await AsyncStorage.setItem("username", username);
            await AsyncStorage.setItem("password", password);
            navigation.navigate("Thành công");
            const t1 = await AsyncStorage.getItem("username");
            const t2 = await AsyncStorage.getItem("password");
            setUsername("");
            setPassword("");
          } catch (error1) {
            console.log(error1);
          }
        }
      } else {
        setShowModal(true);
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      setShowModal(true);
      console.log("error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/img/logo.jpg")} />

      <View style={{ marginBottom: 30 }}>
        <View>
          <View style={styles.inputForm}>
            <Icon style={styles.icon} name="phone" color="#ccc" size={20} />
            <TextInput
              onChangeText={(username) => setUsername(username)}
              style={styles.textInput}
              placeholder="Số điện thoại"
              keyboardType="phone-pad"
              value={username}
            />
          </View>
          <View style={styles.inputForm}>
            <Icon style={styles.icon} name="lock" color="#ccc" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Nhập mật khẩu"
              secureTextEntry={showPass}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity
              style={{ position: "relative" }}
              onPress={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? (
                <Icon
                  style={styles.iconEye}
                  name="eye"
                  color="#ccc"
                  size={20}
                />
              ) : (
                <Icon
                  style={styles.iconEye}
                  name="eye-slash"
                  color="#ccc"
                  size={20}
                />
              )}
            </TouchableOpacity>
            {/* <Icon style={styles.iconEye} name="eye-slash" color="#ccc" size={20} /> */}
          </View>
        </View>

        <View>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkbox}>
              <CheckBox
                textStyle={styles.checkBoxText}
                center
                title="Lưu mật khẩu"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
            </View>
            <Text onPress={onPressHandler} style={styles.text}>
              Quên mật khẩu
            </Text>
          </View>
        </View>

        <View style={styles.submitForm}>
          <Pressable
            onPress={onPressShowModal}
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#CACCCD" : "#1790E2",
              borderRadius: 8,
              width: "80%",
              padding: 10,
            })}
          >
            <Text style={styles.textBtn}>Đăng nhập</Text>
          </Pressable>
          <View style={styles.scan}>
            <IconScan
              style={styles.iconScan}
              name="scan1"
              color="#1790E2"
              size={48}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: "#2F80E1",
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Bạn chưa có tài khoản?
            <Text onPress={onPressHandleRegister} style={styles.textRegister}>
              {" "}
              Đăng ký ngay
            </Text>
          </Text>
        </View>

        <MiniModal
          showModal={showModal}
          setShowModal={() => {
            setShowModal(false);
          }}
          title={title}
          content={content}
          warning={warning}
        />
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
    width: 400,
    marginVertical: 5,
  },

  img: {
    marginTop: -40,
  },

  inputForm: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  icon: {
    textAlign: "center",
    position: "absolute",
    left: 10,
  },

  iconEye: {
    textAlign: "center",
    position: "absolute",
    right: 10,
    top: "-25%",
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

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkBoxText: {
    color: "#2F80E1",
    borderRadius: 6,
  },

  checkbox: {
    marginRight: 15,
  },

  text: {
    color: "#2F80E1",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },

  submitForm: {
    margin: "auto",
    position: "relative",
    marginTop: 10,
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  scan: {
    position: "absolute",
    top: "-10%",
    right: 0,
  },

  textRegister: {
    fontWeight: "bold",
  },
});

export default login;

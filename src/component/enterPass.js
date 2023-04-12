import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ModalForm from "./Modal";

const enterPass = ({ navigation, route }) => {
  const [showPass, setShowPass] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const onPressHandler = () => {
    if (route.params.source === "REGISTER") {
      setShowModal(true);
    }
    if (route.params.source === "FORGOTPASS") {
      setShowModal(true);
    }
  };

  const [messageTitle, setMessagetitle] = useState("Tạo tài khoản thành công");
  const [content, setContent] = useState("Trải nghiệm Chợ Số luôn nhé!");

  const [rePassTitle, setRePasstitle] = useState("Đặt lại mật khẩu thành công");
  const [rePassContent, setRePassContent] = useState(
    "Vui lòng tới bước xác nhận!"
  );

  return (
    <View style={styles.container}>
      <Text style={{ width: "84%" }}>Vui lòng nhập mật khẩu đăng nhập</Text>
      <View style={{ marginTop: 20 }}>
        <View style={styles.inputForm}>
          <Icon style={styles.icon} name="lock" color="#ccc" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Nhập mật khẩu"
            secureTextEntry={showPass}
          />
          <TouchableOpacity
            style={{ position: "relative" }}
            onPress={() => {
              setShowPass(!showPass);
            }}
          >
            {showPass ? (
              <Icon style={styles.iconEye} name="eye" color="#ccc" size={20} />
            ) : (
              <Icon
                style={styles.iconEye}
                name="eye-slash"
                color="#ccc"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.inputForm}>
          <Icon style={styles.icon} name="lock" color="#ccc" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry={showPass}
          />
          <TouchableOpacity
            style={{ position: "relative" }}
            onPress={() => {
              setShowPass(!showPass);
            }}
          >
            {showPass ? (
              <Icon style={styles.iconEye} name="eye" color="#ccc" size={20} />
            ) : (
              <Icon
                style={styles.iconEye}
                name="eye-slash"
                color="#ccc"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: "80%", marginTop: 50 }}>
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#CACCCD" : "#1790E2",
            borderRadius: 8,
            width: "100%",
            padding: 10,
          })}
        >
          <Text style={styles.textBtn}>Hoàn thành</Text>
        </Pressable>
      </View>

      <ModalForm
        showModal={showModal}
        messageTitle={messageTitle}
        setShowModal={() => {
          setShowModal(false);
        }}
        content={content}
        rePassTitle={rePassTitle}
        rePassContent={rePassContent}
        register={route.params.source === "REGISTER"}
        forgotPass={route.params.source === "FORGOTPASS"}
      />
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
    marginTop: 10,
    marginBottom: 10,
  },

  icon: {
    textAlign: "center",
    position: "absolute",
    left: 10,
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

  iconEye: {
    textAlign: "center",
    position: "absolute",
    right: 10,
    top: "-25%",
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default enterPass;

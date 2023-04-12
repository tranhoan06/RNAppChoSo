import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const quenPass = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const onModal = () => {
    setShowModal(!showModal);
  };

  const onCloseModal = () => {
    setShowModal(!showModal);
  };

  const onPressOTP = () => {
    navigation.navigate("Nhập mã xác nhận", { source: "FORGOTPASS" });
    setShowModal(!showModal);
  }

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 14, marginTop: 40, marginBottom: 10, width: "84%" }}
      >
        Nhập số điện thoại của bạn
      </Text>
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
          onPress={onModal}
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

      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType='fade'
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalForm}>
            <View style={styles.textModal}>
              <Text style={styles.textModalTitle}>Xác nhận số điện thoại</Text>
              <Text style={{ fontSize: 14, color: "#9F9E9D", marginTop: 8 }}>
                Mã kích hoạt sẽ gửi tới số điện thoại
              </Text>
              <Text style={{ fontSize: 14, color: "#1790E2" }}>0123456789</Text>
            </View>

            <View style={styles.PressableForm}>
              <Pressable
                onPress={onCloseModal}
                style={({ pressed }) => ({
                  backgroundColor: pressed ? "#CACCCD" : "#EEF3FA",
                  borderRadius: 8,
                  width: "40%",
                  padding: 10,
                  marginTop: 40,
                  marginLeft: 10,
                  marginRight: 5
                })}
              >
                <Text style={[styles.textBtn, {color:'#2F80ED'}]}>Hủy</Text>
              </Pressable>

              <Pressable
                onPress={onPressOTP}
                style={({ pressed }) => ({
                  backgroundColor: pressed ? "#CACCCD" : "#1790E2",
                  borderRadius: 8,
                  width: "40%",
                  padding: 10,
                  marginTop: 40,
                  marginLeft: 5,
                  marginRight: 10
                })}
              >
                <Text style={styles.textBtn}>Xác nhận</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
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

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  //   Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },

  modalForm: {
    width: 300,
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2F80E1",
  },

  PressableForm: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textModal: {
    alignItems: "center",
    marginTop: 16,
  },

  textModalTitle: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default quenPass;

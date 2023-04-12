import { React, useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const ModalForm = ({
  showModal,
  setShowModal,
  messageTitle,
  content,
  register,
  forgotPass,
  rePassTitle,
  rePassContent,
}) => {
  const navigation = useNavigation();

  return (
    <Modal
      visible={showModal}
      transparent
      onRequestClose={() => setShowModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalForm}>
          <View style={{ marginTop: 20 }}>
            <Svg
              width={120}
              height={120}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                opacity={0.4}
                d="M60.433 110c-.62 0-1.239-.142-1.797-.431l-18.006-9.321c-5.109-2.648-9.106-5.619-12.227-9.08-6.83-7.57-10.63-17.288-10.691-27.369L17.5 30.622c-.025-3.829 2.447-7.266 6.142-8.56l33.06-11.527a9.412 9.412 0 0 1 6.152-.034L96.04 21.634c3.715 1.24 6.227 4.653 6.247 8.477l.211 33.203c.066 10.066-3.604 19.823-10.329 27.476-3.086 3.51-7.047 6.526-12.106 9.223l-17.844 9.531a3.822 3.822 0 0 1-1.787.456Z"
                fill="#2F80E1"
              />
              <Path
                d="M56.596 71.605a3.817 3.817 0 0 1-2.678-1.06l-9.584-9.217a3.61 3.61 0 0 1-.03-5.197c1.465-1.447 3.856-1.461 5.34-.035l6.897 6.63 16.837-16.602c1.47-1.446 3.861-1.461 5.341-.034a3.605 3.605 0 0 1 .035 5.197L59.26 70.51a3.8 3.8 0 0 1-2.663 1.094Z"
                fill="#2F80E1"
              />
            </Svg>
          </View>

          <View style={styles.textModal}>
            {forgotPass && (
              <Text style={styles.textModalTitle}>{rePassTitle}</Text>
            )}

            {forgotPass && <Text>{rePassContent}</Text>}

            {register && (
              <Text style={styles.textModalTitle}>{messageTitle}</Text>
            )}

            {register && <Text style={styles.textModalTitle}>{content}</Text>}
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate("Hoàn tất");
              setShowModal(!showModal);
            }}
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#CACCCD" : "#1790E2",
              borderRadius: 8,
              width: "80%",
              padding: 10,
              marginTop: 20,
            })}
          >
            <Text style={styles.textBtn}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
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

  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },

  modalForm: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2F80E1",
  },

  textModal: {
    alignItems: "center",
    marginTop: 16,
  },

  textModalTitle: {
    fontSize: 16,
    fontWeight: "400",
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ModalForm;

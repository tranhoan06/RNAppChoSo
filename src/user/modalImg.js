import { View, Text, Modal, StyleSheet, TouchableOpacity, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from "react";

const ModalImg = ({ showModal, setShowModal }) => {
    const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Bạn chưa chọn ảnh nào!");
    }
  };

  const CameraAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Bạn chưa chọn ảnh nào!");
    }
  };

  return (
    <Modal
      visible={showModal}
      transparent
      onRequestClose={() => setShowModal(false)}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalForm}>
          <TouchableOpacity style={styles.modalFormOpa} onPress={pickImageAsync}>
            <Text style={styles.textWhite}>Bộ sưu tập</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalFormOpa} onPress={CameraAsync}>
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.modalDelete}
          onPress={() => {
            setShowModal(!showModal);
          }}
        >
          <Text style={styles.deleteText}>Hủy</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Modal
  modalContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    backgroundColor: "#00000099",
  },

  modalForm: {
    width: 357,
    height: 88,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2F80E1",
    marginBottom: 14,
  },

  modalDelete: {
    height: 44,
    width: 357,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },

  modalFormOpa: {
    height: "50%",
    width: "100%",
    textAlign: "center",
  },

  text: {
    fontSize: 20,
    color: "#2C2E31",
    width: "100%",
    textAlign: "center",
    flex: 1,
  },

  textWhite: {
    fontSize: 20,
    color: "red",
    width: "100%",
    textAlign: "center",
    paddingTop: 10,
    flex: 1,
  },

  deleteText: {
    fontSize: 20,
    color: "#1790E2",
    textAlign: "center",
    width: "100%",
    flex: 1,
    paddingTop: 6,
  },
});

export default ModalImg;

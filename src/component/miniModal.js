import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

const MiniModal = ({ showModal, setShowModal, title, content, warning }) => {
  return (
    <Modal
      visible={showModal}
      transparent
      onRequestClose={() => setShowModal(false)}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalForm}>
          <View style={styles.textModal}>
            <Text style={styles.textModalTitle}>{title}</Text>
            <Text style={{color: 'red'}}>{warning}</Text>
            <Text style={{ textAlign: "center", marginTop: 14 }}>
              {content}
            </Text>
          </View>

          <Pressable
            onPress={() => {
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
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
    height: "100%",
  },

  modalForm: {
    width: 300,
    height: 198,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2F80E1",
    padding: 6,
  },

  textModal: {
    alignItems: "center",
    marginTop: 16,
  },

  textModalTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: '#1790E2'
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default MiniModal;

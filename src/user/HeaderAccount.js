import { View, Text, StyleSheet, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ModalImg from "./modalImg";


const HeaderAccount = () => {
  const [showIcon, setShowIcon] = useState(true);
  const navigation = useNavigation();

  const onPressHandler = () => {
    setShowIcon(false);
    navigation.navigate("Thông tin cá nhân");
    setShowIcon(true);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ height: 200, position: "relative" }}>
        <View style={styles.topBar}>
          <View style={styles.topBarForm}>
            <View style={{ flexDirection: "row", width: "96%" }}>
              <View>
                <Image
                  style={styles.imgAva}
                  source={require("../assets/img/user.jpg")}
                />
                <FontAwesome
                  onPress={() => setShowModal(true)}
                  style={styles.imgAvaIcon}
                  name="camera"
                  color="#1790E2"
                  size={13}
                />
              </View>

              <View
                style={{
                  width: "80%",
                  flexWrap: "nowrap",
                  marginLeft: 12,
                  marginRight: 16,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  Trần Việt Hoàn
                </Text>
                <Text style={{ fontSize: 11, marginRight: 14 }}>
                  số 9A, ngõ 89 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội
                </Text>
              </View>
            </View>

            <View>
              {showIcon ? (
                <>
                  <Icon
                    style={styles.icon}
                    onPress={onPressHandler}
                    name="edit"
                    color="#1790E2"
                    size={16}
                  />
                  <Icon
                    style={styles.icon}
                    name="copy"
                    color="#1790E2"
                    size={16}
                  />
                </>
              ) : (
                <Icon
                  style={styles.icon}
                  name="copy"
                  color="#1790E2"
                  size={16}
                />
              )}
            </View>
          </View>
        </View>
      </View>

      <ModalImg showModal={showModal}
      setShowModal={() => setShowModal(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    height: 162,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#1790E2",
    position: "absolute",
    left: 0,
    top: 0,
  },

  topBarForm: {
    backgroundColor: "#fff",
    width: "90%",
    position: "absolute",
    right: 18,
    top: 104,
    borderRadius: 14,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    padding: 12,
    flexDirection: "row",
  },

  imgAva: {
    width: 50,
    height: 50,
    borderRadius: 200 / 2,
    position: "relative",
  },

  imgAvaIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  icon: {
    marginRight: 14,
    marginBottom: 3,
    marginTop: 3,
  },
});

export default HeaderAccount;

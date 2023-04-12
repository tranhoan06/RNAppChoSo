import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import OrdinaryPeople from "./OrdinaryPeople";


const editUserInfo = ({ navigation }) => {
  const replaceNav = () => {
    navigation.goBack();
  };

  const [radioButton, setRadioButton] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.back}>
          <Ionicons
            onPress={replaceNav}
            style={styles.icon}
            name="arrow-back"
            color="#FFFFFF"
            size={24}
          />
          <Text style={styles.backText}>Sửa thông tin cá nhân</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentType}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "700",
              marginTop: 25,
              marginLeft: 32,
              marginBottom: 17,
            }}
          >
            Loại khách hàng
          </Text>
          <View>
            {/* Radio btn */}
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#CACCCD",
                marginRight: 12,
                paddingBottom: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 10,
                }}
              >
                <TouchableOpacity onPress={() => setRadioButton("Yes")}>
                  <Text>
                    <Ionicons
                      name={
                        radioButton === "Yes"
                          ? "radio-button-on"
                          : "radio-button-off"
                      }
                      size={18}
                      color="#1790E2"
                    />
                    Hộ kinh doanh
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setRadioButton("No")}>
                  <Text>
                    <Ionicons
                      name={
                        radioButton === "No"
                          ? "radio-button-on"
                          : "radio-button-off"
                      }
                      size={18}
                      color="#1790E2"
                    />
                    Doanh nghiệp
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.contentWarning}>Trường hợp bạn là khách hàng cá nhân thì vui lòng bỏ qua trường thông tin "Loại khách hàng"</Text>

        <OrdinaryPeople/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    backgroundColor: "#FFFFFF",
  },

  containerTop: {
    width: 414,
    height: 113,
    backgroundColor: "#1790E2",
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    flexDirection: "row",
    height: "100%",
  },

  icon: {
    position: "absolute",
    top: 6,
  },

  backText: {
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 30,
    marginBottom: 25,
  },

  content: {
    marginLeft: 12,
    marginRight: 12,
    width: "94%",
  },

  contentType: {
    marginTop:20,
    width: "100%",
  },

  contentWarning: {
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    color: '#B7B7B7',
    cursor: 'disable',
  }
});

export default editUserInfo;

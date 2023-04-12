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
import SwitchSelector from "react-native-switch-selector";
import OrdinaryPeople from "./OrdinaryPeople";
import TTDN from "./TTDN";

const typeOptions = [
  { label: "Thông tin tài khoản", value: "Thông tin tài khoản" },
  { label: "Thông tin doanh nghiệp", value: "Thông tin doanh nghiệp" },
];

const editUserDN = ({ navigation }) => {
  const replaceNav = () => {
    navigation.goBack();
  };

  const onPressHandler = (value) => {
    if (value === "Thông tin doanh nghiệp") {
      setInitialShow(1);
    }
    if (value === "Thông tin tài khoản") {
      setInitialShow(0);
    }
  };

  const [radioButton, setRadioButton] = useState("No");
  const [initialShow, setInitialShow] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
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

          <Text style={styles.contentWarning}>
            Trường hợp bạn là khách hàng cá nhân thì vui lòng bỏ qua trường
            thông tin "Loại khách hàng"
          </Text>
        </View>

        <SwitchSelector
          options={typeOptions}
          textColor="#9F9E9D"
          fontSize={14}
          selectedColor="#FFFFFF"
          buttonColor="#1790E2"
          hasPadding={true}
          borderColor="#1790E2"
          initial={0}
          animationDuration={100}
          style={styles.SwitchForm}
          onPress={(value) => onPressHandler(value)}
        />

        <View style={{ width: "94%" }}>
          {!initialShow ? <OrdinaryPeople /> : <TTDN />}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  center: {
    width: "100%",
    alignItems: "center",
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
    marginTop: 20,
    width: "100%",
  },

  contentWarning: {
    fontSize: 10,
    fontStyle: "italic",
    marginLeft: 10,
    color: "#B7B7B7",
    cursor: "disable",
  },

  formTouch: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 10,
  },

  SwitchForm: {
    width: "94%",
    margin: 10,
    textAlign: "center",
  },
});

export default editUserDN;

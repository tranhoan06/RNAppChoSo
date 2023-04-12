import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import HeaderAccount from "./HeaderAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeAcc = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderAccount />

      <View style={styles.manageForm}>
        <View style={styles.manage}>
          <FontAwesome
            style={styles.manageIcon}
            name="product-hunt"
            color="#F2C94C"
            size={50}
          />
          <Text style={{ textAlign: "center", marginTop: 9 }}>
            Quản lý sản phẩm
          </Text>
        </View>

        <View style={styles.manage}>
          <FontAwesome
            style={styles.manageIcon}
            name="bar-chart"
            color="#27AE60"
            size={50}
          />
          <Text style={{ textAlign: "center", marginTop: 9 }}>
            Quản lý doanh số
          </Text>
        </View>

        <View style={styles.manage}>
          <FontAwesome
            style={styles.manageIcon}
            name="shopping-bag"
            color="#EB5757"
            size={50}
          />
          <Text style={{ textAlign: "center", marginTop: 9 }}>
            Quản lý cửa hàng
          </Text>
        </View>
      </View>

      <View style={styles.accountForm}>
        <TouchableOpacity style={styles.accountFormList}>
          <View style={styles.accountFormItem}>
            <FontAwesome name="star" color="#1790E2" size={24} />
            <Text style={{ marginLeft: 28 }}>Nâng cấp tài khoản</Text>
          </View>
          <Fontisto
            style={styles.accountIcon}
            name="angle-right"
            color="#C2C0BE"
            size={13}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountFormList}>
          <View style={styles.accountFormItem}>
            <FontAwesome name="sticky-note" color="#EB5757" size={24} />
            <Text style={{ marginLeft: 28 }}>Chính sách và quy định</Text>
          </View>
          <Fontisto
            style={styles.accountIcon}
            name="angle-right"
            color="#C2C0BE"
            size={13}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountFormList}>
          <View style={styles.accountFormItem}>
            <MaterialIcons name="settings" color="#828282" size={24} />
            <Text style={{ marginLeft: 28 }}>Cài đặt chung</Text>
          </View>
          <Fontisto
            style={styles.accountIcon}
            name="angle-right"
            color="#C2C0BE"
            size={13}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            AsyncStorage.clear();
            navigation.navigate("Đăng nhập");
          }}
          style={styles.accountFormList}
        >
          <View style={styles.accountFormItem}>
            <FontAwesome name="sign-out" color="#200E32" size={24} />
            <Text style={{ marginLeft: 28 }}>Đăng xuất</Text>
          </View>
          <Fontisto
            style={styles.accountIcon}
            name="angle-right"
            color="#C2C0BE"
            size={13}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },

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

  manageForm: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
  },

  manage: {
    width: 82,
    height: 82,
    alignItems: "center",
    flexWrap: "nowrap",
  },

  manageIcon: {
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    padding: 12,
    backgroundColor: "#FFFFFF",
  },

  accountForm: {
    width: "100%",
    marginTop: 50,
    marginLeft: 12,
  },

  accountFormList: {
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#DBD9D7",
    marginLeft: 13,
  },

  accountFormItem: {
    flexDirection: "row",
    marginBottom: 10,
    textAlign: "center",
  },

  accountIcon: {
    padding: 5,
  },
});

export default HomeAcc;


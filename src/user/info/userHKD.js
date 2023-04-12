import { React, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import HeaderAccount from "../HeaderAccount";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonView from "../dungchung/btn";

const userHKD = ({ navigation }) => {
  const replaceNav = () => {
    navigation.goBack();
  };
  
  return (
    <ScrollView style={styles.container}>
      <HeaderAccount style={{ position: "relative" }} />
      <View style={styles.back}>
        <Ionicons
          onPress={replaceNav}
          style={styles.icon}
          name="arrow-back"
          color="#FFFFFF"
          size={24}
        />
        <Text style={styles.backText}>Thông tin cá nhân</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Thông tin cá nhân</Text>
        <View style={styles.contentDetails}>
          <View style={styles.contentItem}>
            <Text>Họ và tên</Text>
            <Text>Trần Việt Hoàn</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Số điện thoại</Text>
            <Text>0833529833</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Số CMND/CCCD</Text>
            <Text>037201002243</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Nơi cấp</Text>
            <Text>Ninh Bình</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Ngày cấp</Text>
            <Text>30/06/2021</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Giới tính</Text>
            <Text>Nam</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Ngày sinh</Text>
            <Text>20/06/2001</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Email</Text>
            <Text>hoantr201@gmail.com</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Quốc tịch</Text>
            <Text>Việt Nam</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Tỉnh thành</Text>
            <Text>Hà Nội</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Quận/Huyện</Text>
            <Text>Cầu Giấy</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Phường/Xã</Text>
            <Text>Mai Dịch</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Đia chỉ thường chú</Text>
            <Text style={{ width: "50%", flexWrap: "nowrap" }}>
              19 ngõ 67 Nguyễn Văn Cừ, Thanh Bình, Ninh Bình
            </Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Địa chỉ hiện tại</Text>
            <Text style={{ width: "50%", flexWrap: "nowrap" }}>
              số 9A ngõ 89 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Thông tin hộ kinh doanh</Text>
        <View style={styles.contentDetails}>
          <View style={styles.contentItem}>
            <Text>Tên hộ kinh doanh</Text>
            <Text>Không biết Shop</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Mã số kinh doanh</Text>
            <Text>Vốn kinh doanh</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Vốn kinh doanh</Text>
            <Text>500.000.000.000 VNĐ</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Số điện thọai</Text>
            <Text>123456789</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Fax</Text>
            <Text>123456789</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Email</Text>
            <Text>abcdefgh@gmail.com</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Website</Text>
            <Text>KhongbietShop.com.vn</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Địa điểm kinh doanh</Text>
            <Text style={{ width: "50%"}}>
              19 ngõ 67 Nguyễn Văn Cừ, Thanh Bình, Ninh Bình
            </Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Ngày ĐKKD</Text>
            <Text>1/1/2021@gmail.com</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Ngày sửa đổi ĐKKD</Text>
            <Text></Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Nghành nghề kinh doanh</Text>
            <Text>Không biết</Text>
          </View>

          <View style={styles.contentItem}>
            <Text>Số lượng lao động</Text>
            <Text>10</Text>
          </View>
        </View>
      </View>

      <ButtonView/>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    // position: 'relative',
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    flexDirection: "row",
    height: "100%",
  },

  backText: {
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 30,
    marginBottom: 25,
  },

  icon: {
    position: "absolute",
    top: 6,
  },

  content: {
    margin: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 10,
  },

  contentTitle: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 20,
    color: "#060A0E",
    marginBottom: 13,
  },

  contentDetails: {
    borderTopWidth: 1,
    borderTopColor: "#CACCCD",
    width: "100%",
  },

  contentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
    width: "100%",
  },
});

export default userHKD;

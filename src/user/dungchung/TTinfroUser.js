import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TTinfoUser = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default TTinfoUser;

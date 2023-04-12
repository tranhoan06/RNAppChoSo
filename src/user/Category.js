import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Category = ({ navigation }) => {
  const contentListItem = [
    {
      text: "Du lịch",
    },
    {
      text: "Đi chợ hộ",
    },
    {
      text: "Giải cứu",
    },
    {
      text: "Cần hỗ trợ",
    },
    {
      text: "Thời trang",
    },
    {
      text: "Phụ kiện",
    },
    {
      text: "Hóa mỹ phẩm",
    },
    {
      text: "Thực phẩm",
    },
    {
      text: "Đồ uống",
    },
    {
      text: "Văn phòng phẩm - lưu niệm",
    },
    {
      text: "Sản phẩm và sức khỏe",
    },
    {
      text: "Mẹ và bé",
    },
    {
      text: "Thiết bị điện tử",
    },
    {
      text: "Bất động sản",
    },
    {
      text: "Phương tiện",
    },
    {
      text: "Dịch vụ",
    },
    {
      text: "Việc làm",
    },
    {
      text: "Thanh lý",
    },
    {
      text: "Nhà cửa và đời sống",
    },
    {
      text: "Cho tặng và quyên góp",
    },
    {
      text: "Tìm việc làm",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign color="#fff" name="arrowleft" size={24} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Danh mục</Text>
      </View>

      <View style={styles.content}>
        <ScrollView>
          {contentListItem.map((value, index) => (
            <TouchableOpacity style={styles.contentList}>
              <Text>{value.text}</Text>
              <AntDesign color="#333" name="arrowright" size={16} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },

  header: {
    width: "100%",
    height: 120,
    backgroundColor: "#1790E2",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingTop: 10,
  },

  titleHeader: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginLeft: 10,
  },

  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    top: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  contentList: {
    flexDirection: "row",
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#fdf1d7",
  },
});

export default Category;

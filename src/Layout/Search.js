import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Product_item from "../user/product/product_item";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Search({ route }) {
  const { data } = route.params;

  console.log("Dattttttttttttttttt", data);
  const navigation = useNavigation();
  const PressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          onPress={PressHandler}
          color="#fff"
          size={28}
          name="arrowleft"
          style={styles.icon}
        />
        <Text style={styles.headerText}>Danh sách tìm kiếm</Text>
      </View>
      <ScrollView>
        <View style={styles.productContainer}>
          {data?.products?.map((value, i) => (
            <View key={i} style={styles.productItem}>
              <Product_item key={i} item={value} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#1790E2",
    height: 120,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },

  icon: { marginLeft: 10 },

  headerText: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 10,
  },

  productContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  productItem: {
    width: "50%",
    marginBottom: 10,
  },
});

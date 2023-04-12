import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MiniMap from "./map/MiniMap";
import Index from "./Slider/SliderImge";
import Product_item from "./product/product_item";
import { getProducts, getShop } from "../services/Api";
import ProductShop from "./product/ShopProduct";

const HomeAcc = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [shop, setShop] = useState([]);

  useEffect(() => {
    getProducts({
      params: {
        limit: 10,
      },
    }).then((respone) => {
      return setProduct(respone.data.products);
    });

    getShop({
      params: {
        limit: 10,
      },
    }).then((respone) => {
      return setShop(respone.data.users);
    });
  }, []);

  const [searchText, setSearchText] = useState("");
  const searchProduct = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}`
      );
      const data = await response.json();
      // Cập nhật danh sách sản phẩm với dữ liệu mới
      setNewProducts(data);
    } catch (error) {
      console.error(error);
    }

    goToSearch();
  };

  const goToSearch = () => {
    navigation.navigate("Search", { data: newProducts });
    setSearchText("");
  };

  const changeText = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 200 }}>
        <View style={styles.topBar}>
          <View style={styles.back}>
            <Ionicons
              style={styles.icon}
              name="cart"
              color="#FFFFFF"
              size={24}
            />
            <Text style={styles.backText}>Xin chào, Trần Việt Hoàn</Text>
            <View style={styles.notifications}>
              <FontAwesome5
                style={{ marginRight: 10 }}
                name="bell"
                color="#FFFFFF"
                size={20}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <FontAwesome5 name="shopping-bag" color="#FFFFFF" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputForm}>
            <FontAwesome5
              style={styles.iconSearch}
              name="search"
              color="#1790E2"
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Tìm kiếm sản phẩm"
              onChangeText={changeText}
              onSubmitEditing={searchProduct}
            />
            {/* <SearchBox/> */}
          </View>
        </View>
      </View>
      {/* <MiniMap /> */}
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="money-bill-alt"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "nowrap", height: 50 }}>
              Hộ nghèo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="hand-holding-heart"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "wrap" }}>Cho tặng đồ cũ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="shopping-bag"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "wrap" }}>Đi chợ hộ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="hand-scissors"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "wrap", flexDirection: "row" }}>
              Giải cứu nông sản
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="shopping-cart"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "wrap" }}>Gian hàng</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="business-time"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "wrap" }}>Doanh nghiệp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="location-arrow"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "wrap" }}>Vị trí</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.main}>
            <View style={styles.mainItem}>
              <FontAwesome5
                style={styles.iconMain}
                name="ticket-alt"
                color="#1790E2"
                size={20}
              />
            </View>
            <Text style={{ width: 50, flexWrap: "wrap" }}>Vé điện tử</Text>
          </TouchableOpacity>
        </View>

        {/* Sản phẩm */}
        <Index />
        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Sản phẩm tốt gần bạn
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Xem thêm", {
                  product,
                  source: "Sản phẩm tốt gần bạn",
                })
              }
            >
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {product?.map((value, index) => (
              <Product_item key={index} item={value} />
            ))}
          </ScrollView>
        </View>

        {/* Gian hàng */}
        <Index />
        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gian hàng</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Xem thêm", {
                  shop,
                  source: "Gian hàng",
                })
              }
            >
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {shop?.map((value, index) => (
              <ProductShop key={index} item={value} />
            ))}
          </ScrollView>
        </View>

        {/* Tìm kiếm */}
        <Index style={{ marginTop: 20 }} />
        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Tìm kiếm nhiều nhất
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Xem thêm", {
                  product,
                  source: "Tìm kiếm nhiều nhất",
                })
              }
            >
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {product?.map((value, index) => (
              <Product_item key={index} item={value} />
            ))}
          </ScrollView>
        </View>

        {/* Mua nhiều */}
        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Mua nhiều nhất
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Xem thêm", {
                  product,
                  source: "Mua nhiều nhất",
                })
              }
            >
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {product?.map((value, index) => (
              <Product_item key={index} item={value} />
            ))}
          </ScrollView>
        </View>

        {/* Gợi ý */}
        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Gợi ý cho bạn
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Xem thêm", {
                  product,
                  source: "Gợi ý cho bạn",
                })
              }
            >
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {product?.map((value, index) => (
              <Product_item key={index} item={value} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
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

  back: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    height: "100%",
    justifyContent: "space-around",
    width: "100%",
    marginRight: -10,
  },

  backText: {
    color: "#FFFFFF",
    marginLeft: 30,
    fontSize: 20,
  },

  icon: {
    position: "absolute",
  },

  notifications: {
    marginTop: 4,
    flexDirection: "row",
  },

  iconSearch: {
    textAlign: "center",
    position: "absolute",
    left: 10,
  },

  inputForm: {
    position: "absolute",
    bottom: 30,
    left: 32,
  },

  textInput: {
    position: "relative",
    fontSize: 16,
    width: 350,
    paddingLeft: 40,
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
  },

  main: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  mainItem: {
    width: 50,
    height: 50,
    borderRadius: 200 / 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  iconMain: {
    textAlign: "center",
  },
});

export default HomeAcc;

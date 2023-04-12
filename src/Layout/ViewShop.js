import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Product_item from "../user/product/product_item";
import { getProducts, getShopDetails } from "../services/Api";

const dataIcon = [
  {
    name: "star",
    text: "0(0)",
    color: "#ffe456",
  },

  {
    name: "shipping-fast",
    text: "2.1km",
    color: "#1790E2",
  },
];

const dataProductItem = [
  {
    backgr: "#f24d7c",
    num: 46,
    text: "Sản phẩm",
  },

  {
    backgr: "#5cd2ff",
    num: 5,
    text: "Người yêu thích",
  },

  {
    backgr: "#f27823",
    num: 147,
    text: "Lượt xem",
  },

  {
    backgr: "#3ea584",
    num: 73,
    text: "Nơi bán",
  },
];

const similarStores = [
  {
    imgUrl:
      "https://i.pinimg.com/564x/d5/c1/0d/d5c10dfa806343da4b8fefc83db474db.jpg",
    title: "Thái Long",
    address: "235 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội",
  },

  {
    imgUrl:
      "https://i.pinimg.com/736x/ec/ed/38/eced3873eaead43df80ca072cf0817aa.jpg",
    title: "Trần Việt Hoàn",
    address: "9A ngõ 89 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội",
  },

  {
    imgUrl:
      "https://i.pinimg.com/564x/b0/ce/be/b0cebe9a3fe9138bc143813468b06898.jpg",
    title: "Không Biết",
    address: "Không Biết",
  },
];

export default function ViewShop({ navigation, route }) {
  const [product, setProduct] = useState([]);
  const [shopDetails, setShopDetails] = useState([]);

  console.log("route.params", route.params);

  const { shopId } = route.params;
  const id = shopId;
  console.log("test ID Shop", id);

  useEffect(() => {
    getProducts({
      params: {
        limit: 10,
      },
    }).then((respone) => {
      return setProduct(respone.data.products);
    });

    getShopDetails(id, {}).then((respone) => {
      // console.log("respone", respone.data.image);
      return setShopDetails(respone);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{ borderColor: "#ccc", borderWidth: 1, paddingBottom: 10 }}
        >
          <View style={styles.backgr}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/a9/d3/93/a9d393966a294f0a8bc9153e1846c6db.jpg",
              }}
              style={styles.imgBackgr}
            />
          </View>
          <View style={styles.infoShop}>
            <Image
              source={{
                uri: `${shopDetails?.data?.image}`,
              }}
              style={styles.imgShop}
            />
            <View style={styles.decription}>
              <Text style={styles.txtTitle}>
                {shopDetails?.data?.firstName} {shopDetails?.data?.lastName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "30%",
                  marginLeft: 10,
                }}
              >
                {dataIcon.map((item, index) => (
                  <View key={index} style={{ flexDirection: "row" }}>
                    <FontAwesome5
                      name={item.name}
                      color={item.color}
                      size={12}
                    />
                    <Text
                      style={{ fontSize: 12, marginLeft: 5, marginRight: 10 }}
                    >
                      {item.text}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={{ width: "100%", flexWrap: "wrap" }}>
                <Text>
                  {shopDetails?.data?.address?.address}{" "}
                  {shopDetails?.data?.address?.city}
                  {"."}
                  {shopDetails?.data?.address?.state}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.product}>
          {dataProductItem.map((item, index) => (
            <View style={styles.productItem}>
              <View
                style={{
                  padding: 14,
                  backgroundColor: `${item.backgr}`,
                  width: 59,
                  alignItems: "center",
                  borderRadius: 200 / 2,
                  marginTop: 4,
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}
                >
                  {item.num}
                </Text>
              </View>
              <Text
                style={{
                  color: "#333",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: 4,
                  textAlign: "center",
                }}
              >
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sản phẩm</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {product?.map((value, index) => (
              <Product_item key={index} item={value} />
            ))}
          </ScrollView>
        </View>

        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Giải cứu</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {product?.map((value, index) => (
              <Product_item key={index} item={value} />
            ))}
          </ScrollView>
        </View>

        <View style={{ margin: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Giải cứu</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: "#1790E2" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {product?.map((value, index) => (
              <Product_item key={index} item={value} />
            ))}
          </ScrollView>
        </View>

        <View style={{ margin: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 14 }}>
            Cửa hàng tương tự
          </Text>

          {similarStores.map((value, index) => (
            <TouchableOpacity
              style={styles.similarStores}
              onPress={() => navigation.navigate("View Shop")}
            >
              <Image
                source={{
                  uri: `${value.imgUrl}`,
                }}
                style={styles.simiStrImg}
              />
              <View
                style={{
                  width: "70%",
                  overflow: "hidden",
                  flexWrap: "nowrap",
                  textAlign: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {value.title}
                </Text>
                <Text style={{ fontSize: 16, marginRight: 4 }}>
                  {value.address}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "30%",
                    marginLeft: 10,
                  }}
                >
                  {dataIcon.map((item, index) => (
                    <View
                      key={index}
                      style={{ flexDirection: "row", textAlign: "center" }}
                    >
                      <FontAwesome5
                        name={item.name}
                        color={item.color}
                        size={14}
                      />
                      <Text
                        style={{ fontSize: 16, marginLeft: 5, marginRight: 10 }}
                      >
                        {item.text}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },

  backgr: {
    height: 240,
    width: "100%",
    position: "relative",
  },

  imgBackgr: {
    height: "100%",
    width: "100%",
  },

  infoShop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    // height: '100%',
    padding: 10,
    flexDirection: "row",
  },

  imgShop: {
    width: 50,
    height: 80,
    borderRadius: 10,
  },

  decription: {
    // alignItems: 'center',
    marginLeft: 14,
    width: "100%",
  },

  txtTitle: {
    fontSize: 24,
    fontWeight: "600",
  },

  product: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
    margin: 16,
    backgroundColor: "#fff",
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  productItem: {
    height: 120,
    width: 70,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    alignItems: "center",
  },

  similarStores: {
    width: "100%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 8,
  },

  simiStrImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});

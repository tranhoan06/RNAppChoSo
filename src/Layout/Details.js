import React, { Component, useEffect, useState } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SwitchFrom from "../user/dungchung/SwitchFrom";
import axios from "axios";
import { getDetails } from "../services/Api";
import { BASE_PRODUCT } from "../constants.js/app";
import { addCart } from "../redux-setup/CartSlice";
import BtnAddCart from "./btnAddCart";

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 120;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const dataIcon = [
  {
    name: "sticky-note",
    text: "Có vận chuyển",
    color: "#50b344",
  },

  {
    name: "shipping-fast",
    text: "2.1km",
    color: "#1790E2",
  },

  {
    name: "star",
    text: "0(0)",
    color: "#ffe456",
  },

  {
    name: "heart",
    text: 1,
    color: "red",
  },
];

const dataTest = [
  {
    name: "shipping-fast",
    text: "2.1km",
    color: "#1790E2",
  },

  {
    name: "star",
    text: "0(0)",
    color: "#ffe456",
  },

  {
    name: "heart",
    text: 1,
    color: "red",
  },
];

const dataImages = [
  {
    link: "https://trovetuoitho.com/wp-content/uploads/2020/04/B%C3%A1nh-m%E1%BB%B3.jpg",
    title: "Bánh mì",
    price: 15000,
  },

  {
    link: "https://trovetuoitho.com/wp-content/uploads/2020/04/Ph%E1%BB%9F-t%C3%A1i-n%E1%BA%A1m.jpg",
    title: "Phở tái nạm bò viên",
    price: 35000,
  },

  {
    link: "https://trovetuoitho.com/wp-content/uploads/2020/04/B%C3%A1nh-%C4%91a-cua.jpg",
    title: "Bánh đa cua",
    price: 35000,
  },

  {
    link: "https://trovetuoitho.com/wp-content/uploads/2020/04/B%C3%A1nh-c%E1%BB%91m-H%C3%A0-N%E1%BB%99i.jpg",
    title: "Bánh cốm Hà Nội",
    price: 30000,
  },

  {
    link: "https://trovetuoitho.com/wp-content/uploads/2020/04/B%C3%A1nh-cu%E1%BB%91n.jpg",
    title: "Bánh cuốn",
    price: 15000,
  },

  {
    link: "https://trovetuoitho.com/wp-content/uploads/2020/04/B%C3%BAn-ri%C3%AAu.jpg",
    title: "Bún riêu",
    price: 30000,
  },

  {
    link: "https://trovetuoitho.com/wp-content/uploads/2020/04/B%C3%A1nh-%C3%BA-tro.jpg",
    title: "Bánh ú tro",
    price: 15000,
  },
];

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false,
      productDetail: [],
      shopDetails: [],
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.scrollViewContent}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{this.state.productDetail.title}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "red", fontWeight: "700" }}>
              {this.state.productDetail.price}.đ
            </Text>
            <Text style={{ fontSize: 14, color: "black" }}>Đã bán: 0</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            {dataIcon.map((value, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name={value.name} color={value.color} size={14} />
                <Text style={{ fontSize: 14, marginLeft: 4 }}>
                  {value.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.name}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Image
                style={styles.imgShop}
                source={{
                  uri: `${this.state.shopDetails?.data?.image}`,
                }}
                resizeMode="cover"
              />
              <View style={{ width: 130, marginLeft: 14 }}>
                <Text style={{ fontWeight: "700" }}>
                  {this.state.shopDetails?.data?.firstName}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 6, color: "#1790E2" }}>0</Text>
                    <FontAwesome5 name="star" color="#1790E2" size={14} />
                  </View>

                  <View style={{ flexDirection: "row", textAlign: "center" }}>
                    <Text style={{ marginRight: 6, color: "#1790E2" }}>
                      109
                    </Text>
                    <Text style={{ color: "#1790E2" }}>Sản phẩm</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.btnShop}
              onPress={() =>
                navigate("View Shop", {
                  shopId: this.state.shopDetails?.data?.id,
                })
              }
            >
              <Text style={{ color: "#1790E2" }}>Xem Shop</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
              alignItems: "center",
            }}
          >
            <View>
              <Text>Số lượng sản phẩm:</Text>
              <Text>500,000</Text>
            </View>
            <Text>Tình trạng: Mới 100%</Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text>
              Địa chỉ: {this.state.shopDetails?.data?.address?.address}{" "}
              {this.state.shopDetails?.data?.address?.city}
              {"."}
              {this.state.shopDetails?.data?.address?.state}
            </Text>
          </View>
        </View>

        <View style={styles.name}>
          <SwitchFrom data={this.state.productDetail.description} />
        </View>

        <View style={styles.name}>
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
              {dataImages.map((value, i) => (
                <TouchableOpacity key={i} style={styles.container}>
                  <Image
                    source={{
                      uri: `${value.link}`,
                    }}
                    resizeMode="cover"
                    style={styles.image}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      flexWrap: "wrap",
                      marginLeft: 10,
                      height: 32,
                      overflow: "hidden",
                    }}
                  >
                    {value.title}
                  </Text>
                  <Text style={{ color: "red", marginLeft: 10 }}>
                    {value.price}.đ
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    {dataTest.map((item, index) => (
                      <View
                        key={index}
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome5
                          name={item.name}
                          color={item.color}
                          size={12}
                        />
                        <Text style={{ fontSize: 12 }}>{item.text}</Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.name}>
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
              {dataImages.map((value, i) => (
                <TouchableOpacity key={i} style={styles.container}>
                  <Image
                    source={{
                      uri: `${value.link}`,
                    }}
                    resizeMode="cover"
                    style={styles.image}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      flexWrap: "wrap",
                      marginLeft: 10,
                      height: 32,
                      overflow: "hidden",
                    }}
                  >
                    {value.title}
                  </Text>
                  <Text style={{ color: "red", marginLeft: 10 }}>
                    {value.price}.đ
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    {dataTest.map((item, index) => (
                      <View
                        key={index}
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome5
                          name={item.name}
                          color={item.color}
                          size={12}
                        />
                        <Text style={{ fontSize: 12 }}>{item.text}</Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
  componentDidMount() {
    const { route } = this.props;
    const { productId } = route.params;
    const id = productId;

    const getProductsDetails = async () => {
      const result = await axios.get(`${BASE_PRODUCT}/products/${id}`);
      this.setState({ productDetail: result.data });
    };
    getProductsDetails();

    const getShopDetails = async () => {
      const result1 = await axios.get(`${BASE_PRODUCT}/users/${id}`);
      this.setState({ shopDetails: result1 });
    };
    getShopDetails();
  }
  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp",
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp",
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp",
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp",
    });

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.fill}>
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          {this.state?.productDetail?.images?.length
            ? console.log("heheeheh", this.state?.productDetail?.images[0])
            : console.log("huhuhu")}
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={{
              // uri: `${this.state?.productDetail?.thumbnail}`,
              uri: this.state?.productDetail?.images?.length
                ? `${this.state?.productDetail?.images[0]}`
                : null,
            }}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <View style={styles.iconHeader}>
            <View style={styles.iconWidth}>
              <Fontisto
                onPress={() => navigate("Trang chủ")}
                style={styles.icon}
                name="close-a"
                color="black"
                size={20}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.iconWidth}>
                <Fontisto
                  onPress={() => navigate("Cart")}
                  style={styles.icon}
                  name="shopping-bag"
                  color="black"
                  size={20}
                />
              </View>
              <View style={styles.iconWidth}>
                <Fontisto
                  style={styles.icon}
                  name="heart"
                  color="black"
                  size={20}
                />
              </View>
            </View>
          </View>
        </Animated.View>

        <BtnAddCart data={this.state.productDetail} />
      </View>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
  },

  iconHeader: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    width: "100%",
    backgroundColor: "transparent",
    height: 150,
    alignItems: "center",
    zIndex: 999,
  },

  icon: {
    textAlign: "center",
  },

  iconWidth: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 200 / 2,
    justifyContent: "center",
    margin: 10,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#03A9F4",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
    margin: 10,
  },

  name: {
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 16,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },

  nameText: {
    fontSize: 18,
    color: "black",
    // textAlign: "center",
  },

  imgShop: {
    width: 50,
    height: 50,
    borderRadius: 200 / 2,
    borderWidth: 3,
    borderColor: "#03A9F4",
  },

  btnShop: {
    width: 100,
    height: 40,
    backgroundColor: "#dbeaff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    width: 160,
    marginLeft: 4,
    marginRight: 4,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
});

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Product_item from "../user/product/product_item";
import ProductShop from "../user/product/ShopProduct";

export default function SeeAlso({ navigation, route }) {
  const { product, shop, source } = route.params;

  const [onInput, setOnInput] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));

  const openInput = () => {
    setOnInput(!onInput);
    Animated.timing(animatedValue, {
      toValue: onInput ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "80%"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {onInput ? (
          <Animated.View
            style={[styles.animatedView, { width: interpolatedWidth }]}
          >
            <TextInput style={styles.textInput} placeholder="Tìm kiếm" />

            <AntDesign
              onPress={() => setOnInput(false)}
              style={{ padding: 8 }}
              size={20}
              color="#1790E2"
              name="close"
            />
          </Animated.View>
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  onPress={() => navigation.goBack()}
                  size={30}
                  color="#1790E2"
                  name="arrowleft"
                />
                <Text
                  style={{ textAlign: "center", fontSize: 20, marginLeft: 6 }}
                >
                  {source}
                </Text>
              </View>
              <TouchableOpacity onPress={openInput}>
                <AntDesign size={30} color="#1790E2" name="search1" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      <View style={styles.content}>
        <ScrollView>
          <View style={styles.productContainer}>
            {source === "Gian hàng"
              ? shop.map((value, index) => (
                  <View style={styles.productItem} key={index}>
                    <ProductShop item={value} />
                  </View>
                ))
              : product.map((value, index) => (
                  <View style={styles.productItem} key={index}>
                    <Product_item item={value} />
                  </View>
                ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  header: {
    width: "100%",
    height: 120,
    paddingTop: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  animatedView: {
    position: "relative",
    width: "80%",
    marginTop: 6,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    fontSize: 16,
    padding: 6,
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  productContainer: {
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

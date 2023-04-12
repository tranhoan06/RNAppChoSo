import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
} from "../redux-setup/CartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Carts = useSelector(({ addCart }) => {
    return addCart.products;
  });

  const [quantityNum, setQuantityNum] = useState(1);

  const increaseQuantity = () => {
    setQuantityNum(quantityNum + 1);
  };

  const decreaseQuantity = () => {
    if (quantityNum > 1) {
      setQuantityNum(quantityNum - 1);
    }
  };

  const changeUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          color="white"
          size={25}
          style={styles.iconHeader}
        />
        <Text style={styles.textHeader}>Giỏ Hàng</Text>
      </View>

      <ScrollView style={styles.content}>
        {Carts?.map((item, index) => (
          <View key={index} style={styles.contentForm}>
            <TouchableOpacity onPress={() => handleRemoveProduct(item.id)}>
              <Text style={styles.textDlt}>XÓA</Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: `${item.images[0]}`,
              }}
              resizeMode="cover"
              style={styles.imgContent}
            />
            <View style={{ width: "70%", marginLeft: 10 }}>
              <Text style={styles.contentText}>{item.title}</Text>
              <Text style={{ fontSize: 18, color: "red", fontWeight: "600" }}>
                {item.quantity * item.price} đ
              </Text>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={styles.button}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={quantityNum.toString()}
                  onChangeText={(value) =>
                    changeUpdateQuantity(item.id, parseInt(value))
                  }
                />
                <TouchableOpacity onPress={increaseQuantity}>
                  <Text style={styles.button}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottom}>
        <View style={{ flexDirection: "row" }}>
          <Text>Tổng thanh toán:</Text>
          <Text style={styles.bottomPrice}>
            {Carts.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            )}{" "}
            đ
          </Text>
        </View>

        <TouchableOpacity style={styles.btnAbate}>
          <Text style={styles.textAbate}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1790E2",
    height: 120,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  iconHeader: {
    marginLeft: 20,
    marginTop: 10,
  },

  textHeader: {
    fontSize: 25,
    marginLeft: 8,
    marginTop: 10,
    color: "#FFFFFF",
  },

  content: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    marginBottom: 30,
  },

  contentForm: {
    flexDirection: "row",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    alignItems: "center",
  },

  imgContent: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  contentText: {
    fontSize: 16,
    fontWeight: "600",
  },

  btnAbate: {
    backgroundColor: "#1790e1",
    borderRadius: 10,
    padding: 10,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
    alignItems: "center",
  },

  bottomPrice: {
    fontSize: 22,
    color: "red",
    marginLeft: 10,
  },

  textAbate: {
    fontSize: 16,
    color: "white",
  },

  textDlt: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginRight: 14,
  },

  input: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

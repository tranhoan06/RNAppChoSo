import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import { addToCart } from "../redux-setup/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function BtnAddCart(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const totalCart = useSelector(({ addCart }) => {
  //   return addCart.products;
  // });

  const addItems = (type) => {
    dispatch(addToCart(props.data));
    ToastAndroid.showWithGravityAndOffset(
      "Thêm sản phẩm thành công",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      0
    );


    if (type === "buy-now") {
      navigation.navigate("Cart");
    }
  };

  return (
    <View style={styles.bottomBtn}>
      <TouchableOpacity style={styles.iconWidth} onPress={addItems}>
        <Fontisto
          style={styles.iconAdd}
          name="shopping-basket-add"
          color="#03A9F4"
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => addItems("buy-now")}
      >
        <Text style={styles.btnText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBtn: {
    height: 70,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  iconWidth: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 200 / 2,
    justifyContent: "center",
    margin: 10,
  },

  iconAdd: {
    textAlign: "center",
  },

  button: {
    justifyContent: "center",
    backgroundColor: "#03A9F4",
    width: 250,
    height: 50,
    borderRadius: 10,
  },

  btnText: {
    fontSize: 26,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

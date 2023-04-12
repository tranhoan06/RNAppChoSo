import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SwitchSelector from "react-native-switch-selector";
import Product_Infomation from "../product/product_Infomation";
import Product_Reviews from "../product/product_Reviews";

export default function SwitchFrom(props) {
  const [initialShow, setInitialShow] = useState(0);

  const productInfo = props.data;
  const typeOptions = [
    { label: "Thông tin", value: "Thông tin" },
    { label: "Đánh giá", value: "Đánh giá" },
  ];

  const onPressHandler = (value) => {
    if (value === "Thông tin") {
      setInitialShow(0);
    }
    if (value === "Đánh giá") {
      setInitialShow(1);
    }
  };
  return (
    <View>
      <SwitchSelector
        options={typeOptions}
        textColor="#9F9E9D"
        fontSize={14}
        selectedColor="#FFFFFF"
        buttonColor="#1790E2"
        hasPadding={true}
        borderColor="#1790E2"
        initial={0}
        animationDuration={100}
        style={styles.SwitchForm}
        onPress={(value) => onPressHandler(value)}
      />

      <View style={{ width: "94%" }}>
        {!initialShow ? (
          <Product_Infomation information={productInfo} />
        ) : (
          <Product_Reviews />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SwitchForm: {
    width: "94%",
    margin: 10,
    textAlign: "center",
  },
});

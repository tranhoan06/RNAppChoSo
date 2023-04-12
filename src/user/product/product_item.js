import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function Product_item({ item }) {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("Details",  { productId: item.id });
  };

  const data = [
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
      text: item.rating,
      color: "red",
    },
  ];
  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Image
        source={{ uri: `${item.images[0]}` }}
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
        {item.title}
      </Text>
      <Text style={{ color: "red", marginLeft: 10 }}>{item.price}.đ</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome5 name={item.name} color={item.color} size={12} />
            <Text style={{ fontSize: 12 }}>{item.text}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginLeft: 4,
    marginRight: 4,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

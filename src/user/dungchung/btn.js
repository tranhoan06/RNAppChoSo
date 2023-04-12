import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonView = () => {
    const navigation = useNavigation()

  const onPressHandler = () => {
    navigation.navigate("Sửa thông tin cá nhân");
  };

  return (
    <View
      style={{
        width: "100%",
        marginTop: 50,
        alignItems: "center",
        marginBottom: 90,
      }}
    >
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#CACCCD" : "#1790E2",
          borderRadius: 8,
          width: "80%",
          padding: 10,
        })}
      >
        <Text style={styles.textBtn}>Sửa</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ButtonView;

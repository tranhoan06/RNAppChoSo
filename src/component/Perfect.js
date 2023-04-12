import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

const Perfect = ({navigation}) => {
  const onPressHanlder = () => {
    navigation.navigate('Đăng nhập');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Họ tên"
          value="Trần Việt Hoàn"
        />

        <TextInput
          style={[
            styles.textInput,
            { backgroundColor: "rgba(202, 204, 205, 0.5)", marginTop: 14 },
          ]}
          placeholder="Số điện thoại"
          value="0123456789"
          editable={false}
          selectTextOnFocus={false}
        />
      </View>

      <View style={{ width: "84%", marginTop: 50 }}>
        <Pressable
          onPress={onPressHanlder}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#CACCCD" : "#1790E2",
            borderRadius: 8,
            width: "100%",
            padding: 10,
          })}
        >
          <Text style={styles.textBtn}>Hoàn thành</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },

  formInput: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },

  textInput: {
    fontSize: 16,
    width: 350,
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Perfect;

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { React, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import PressableView from "../dungchung/Pressable";

export default function TTHKD() {
  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(true);
  const [showInput3, setShowInput3] = useState(true);
  const [showInput4, setShowInput4] = useState(true);
  const [showInput5, setShowInput5] = useState(true);
  const [showInput6, setShowInput6] = useState(true);
  const [showInput7, setShowInput7] = useState(true);
  const [showInput8, setShowInput8] = useState(true);
  const [showInput9, setShowInput9] = useState(true);
  const [showInput10, setShowInput10] = useState(true);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));

  const showDatepicker1 = () => {
    setShow(true);
    console.log("hoho");
  };

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
    console.log(selectedDate);
  };

  //   IMG
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Bạn chưa chọn ảnh nào!");
    }
  };

  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => setShowInput1(false)}
          style={styles.editForm}
        >
          {showInput1 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Tên hộ kinh doanh*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Tên hộ kinh doanh"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput2(false)}
          style={styles.editForm}
        >
          {showInput2 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Mã số hộ kinh doanh*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Mã số hộ kinh doanh"
                keyboardType="phone-pad"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput3(false)}
          style={styles.editForm}
        >
          {showInput3 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Số điện thoại*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Số điện thoại"
                keyboardType="phone-pad"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput4(false)}
          style={styles.editForm}
        >
          {showInput4 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Vốn kinh doanh*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Vốn kinh doanh"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput5(false)}
          style={styles.editForm}
        >
          {showInput5 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Fax*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Fax"
                keyboardType="phone-pad"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput6(false)}
          style={styles.editForm}
        >
          {showInput6 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Email*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                keyboardType="email-address"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput7(false)}
          style={styles.editForm}
        >
          {showInput7 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Website*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput style={styles.textInput} placeholder="Website" />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput8(false)}
          style={styles.editForm}
        >
          {showInput8 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Địa điểm kinh doanh*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Địa điểm kinh doanh"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={showDatepicker1} style={styles.editForm}>
          <View style={styles.editFormText}>
            <Text>Ngày ĐKKD*</Text>
            <Text>1/1/2021</Text>
          </View>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <TouchableOpacity
          onPress={() => setShowInput9(false)}
          style={styles.editForm}
        >
          {showInput9 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Nghành nghề kinh doanh*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Nghành nghề kinh doanh"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowInput10(false)}
          style={styles.editForm}
        >
          {showInput10 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Số lượng lao động*</Text>
                <Text style={styles.textContent}>Nhập nội dung</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Số lượng lao động"
                keyboardType="phone-pad"
              />
            </>
          )}
        </TouchableOpacity>

        <Text>Xác thực ĐKKD</Text>
        <View style={styles.imgFrm}>
          <TouchableOpacity style={styles.imgIMG} onPress={pickImageAsync}>
            <Text style={styles.textImg}>Thêm ảnh</Text>
          </TouchableOpacity>
        </View>

        <PressableView/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  editForm: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CACCCD",
    borderRadius: 4,
    width: "100%",
  },

  editFormText: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    fontSize: 15,
  },

  textInput: {
    fontSize: 15,
    width: "100%",
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
  },

  textContent: {
    color: "#9F9E9D",
  },

  imgFrm: {
    borderWidth: 1,
    borderColor: "#CACCCD",
    width: "100%",
    marginTop: 10,
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 4
  },

  imgIMG: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#1790E2",
    width: 284,
    height: 80,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },

  textImg: {
    flex: 1,
    textAlign: "center",
    color: "#1790E2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 33,
  },
});

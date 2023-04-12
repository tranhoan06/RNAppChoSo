import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getProvinces, getDistricts, getWards } from "@natpkg/vn-local";
import PressableView from "../dungchung/Pressable";

// Drop down
const data = [
  { label: "Nam", value: "1" },
  { label: "Nữ", value: "2" },
];

const data1 = [{ label: "VietNam", value: " 1" }];

const OrdinaryPeople = () => {

  const [showInput, setShowInput] = useState(true);
  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(true);
  const [showInput3, setShowInput3] = useState(true);
  const [showInput4, setShowInput4] = useState(true);
  const [showInput5, setShowInput5] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);

  const [date, setDate] = useState(new Date(1598051730000));
  const [date1, setDate1] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const [province, setProvince] = useState(getProvinces()); // state tinh thanh
  const [districts, setDistricts] = useState(getDistricts()); // state quan huyen
  const [wards, setWards] = useState(getWards()); // state phuong xa

  // Drop down
  const [value, setValue] = useState(null);
  const [valueCountry, setValueCountry] = useState(null);
  const [valueProvince, setValueprovince] = useState({
    name: "Chọn tỉnh/thành phố",
  });
  const [valueDistricts, setValueDistricts] = useState({
    name: "Chọn quận, huyện",
  });
  const [valueWards, setValueWards] = useState({ name: "Chọn phường xã" });

  useEffect(() => {
    province.forEach((element) => {});

    districts.forEach((quan) => {});

    wards.forEach((phuong) => {});
  }, []);

  const handleCity = (item, e) => {
    setValueprovince(item);
    const cityID = item.code;

    const districts = getDistricts();
    const districtsFilter = districts.filter(
      (district) => district.provinceCode === cityID
    );
    setDistricts(districtsFilter);
  };

  const hancldeDistrict = (item) => {
    setValueDistricts(item);
    const districtID = item.code;

    const wards = getWards();
    const wardsFilter = wards.filter(
      (ward) => ward.districtCode === districtID
    );
    setWards(wardsFilter);
  };

  // Giới tính
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      </View>
    );
  };

  // Tỉnh thành
  const renderItem1 = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
        {item.code === valueProvince && (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      </View>
    );
  };

  // quan huyen
  const renderItem2 = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
        {item.code === valueProvince && (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      </View>
    );
  };

  // phuong, xa
  const renderItem3 = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
        {item.code === valueProvince && (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      </View>
    );
  };

  // Date
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
    console.log(selectedDate);
  };

  const onChange1 = (event, selectedDate) => {
    setDate1(selectedDate);
    setShow1(false);
    console.log("hehe", selectedDate);
  };

  const showDatepicker1 = () => {
    setShow(true);
    console.log("hoho");
  };

  const showDatepicker2 = () => {
    setShow1(true);
    console.log("hhehe");
  };

  //   Camera
  const CameraAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
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
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => setShowInput(false)}
          style={styles.editForm}
        >
          {showInput ? (
            <>
              <View style={styles.editFormText}>
                <Text>Họ và tên*</Text>
                <Text>Trần Việt Hoàn</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput style={styles.textInput} placeholder="Họ và tên" />
            </>
          )}
        </TouchableOpacity>

        <View
          style={[
            styles.editForm,
            { backgroundColor: "#CACCCD", cursor: "disable" },
          ]}
        >
          <View style={styles.editFormText}>
            <Text>Số điện thoại*</Text>
            <Text>0123456789</Text>
          </View>
        </View>

        <View style={styles.contentCCCD}>
          <Text
            style={{
              fontSize: 16,
              marginLeft: 16,
              marginTop: 12,
              marginBottom: 15,
            }}
          >
            Chụp ảnh CMND/CCCD
          </Text>
          <View style={styles.cccdForm}>
            <View>
              <Image
                style={styles.cccd}
                source={require("../../assets/img/cccd1.jpg")}
              />
              <TouchableOpacity
                onPress={CameraAsync}
                style={{
                  backgroundColor: "#1790E2",
                  width: "100%",
                  marginTop: 18,
                  borderRadius: 6,
                }}
              >
                <View
                  style={{
                    padding: 8,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <FontAwesome
                    style={styles.imgCccdIcon}
                    name="camera"
                    color="#FCFCFC"
                    size={18}
                  />
                  <Text style={{ alignItems: "center", color: "#FFFF" }}>
                    Chụp mặt trước
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* CCCD */}
            <View>
              <Image
                style={styles.cccd}
                source={require("../../assets/img/cccd2.jpg")}
              />
              <TouchableOpacity
                onPress={CameraAsync}
                style={{
                  backgroundColor: "#1790E2",
                  width: "100%",
                  marginTop: 18,
                  borderRadius: 6,
                }}
              >
                <View
                  style={{
                    padding: 8,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <FontAwesome
                    style={styles.imgCccdIcon}
                    name="camera"
                    color="#FCFCFC"
                    size={18}
                  />
                  <Text style={{ alignItems: "center", color: "#FFFF" }}>
                    Chụp mặt sau
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setShowInput1(false)}
          style={styles.editForm}
        >
          {showInput1 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Số CMND/CCCD*</Text>
                <Text>0123456789</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Số CMND/CCCD"
                keyboardType="phone-pad"
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
                <Text>Nơi cấp*</Text>
                <Text>CA Hà Nội</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput style={styles.textInput} placeholder="Nơi cấp" />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={showDatepicker1} style={styles.editForm}>
          <View style={styles.editFormText}>
            <Text>Ngày cấp*</Text>
            <Text>1/1/2021</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={showDatepicker2} style={styles.editForm}>
          <View style={styles.editFormText}>
            <Text>Ngày sinh*</Text>
            <Text>20/06/2001</Text>
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

        {show1 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date1}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChange1}
          />
        )}

        {/* Giới tính */}
        <View style={styles.dropForm}>
          <Text style={{ textAlign: "center", fontSize: 15, marginLeft: 8 }}>
            Giới tính
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Nam"
            searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            renderItem={renderItem}
          />
        </View>

        <TouchableOpacity
          onPress={() => setShowInput3(false)}
          style={styles.editForm}
        >
          {showInput3 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Email*</Text>
                <Text>abcdefghj@gmail.com</Text>
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

        {/* Quốc tịch */}
        <View style={styles.dropForm}>
          <Text style={{ textAlign: "center", fontSize: 15, marginLeft: 8 }}>
            Quốc tịch
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data1}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Việt Nam"
            searchPlaceholder="Search..."
            value={valueCountry}
            onChange={(item) => {
              setValue(item.valueCountry);
            }}
            renderItem={renderItem}
          />
        </View>

        {/* Tỉnh, thành */}
        <View style={styles.dropForm}>
          <Text style={{ textAlign: "center", fontSize: 15, marginLeft: 8 }}>
            Tình, thành
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={province}
            search
            maxHeight={300}
            labelField="name"
            valueField="code"
            placeholder={valueProvince?.name}
            searchPlaceholder="Search..."
            value={valueProvince}
            onChange={handleCity}
            renderItem={renderItem1}
          />
        </View>

        {/* Quận, huyện */}
        <View style={styles.dropForm}>
          <Text style={{ textAlign: "center", fontSize: 15, marginLeft: 8 }}>
            Quận, huyện
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={districts}
            search
            maxHeight={300}
            labelField="name"
            valueField="code"
            placeholder={valueDistricts?.name}
            searchPlaceholder="Search..."
            value={valueDistricts}
            onChange={hancldeDistrict}
            renderItem={renderItem2}
          />
        </View>

        {/* Phường, xã */}
        <View style={styles.dropForm}>
          <Text style={{ textAlign: "center", fontSize: 15, marginLeft: 8 }}>
            Phường, xã
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={wards}
            search
            maxHeight={300}
            labelField="name"
            valueField="code"
            placeholder={valueWards?.name}
            searchPlaceholder="Search..."
            value={valueWards}
            onChange={(item) => {
              setValueWards(item);
            }}
            renderItem={renderItem3}
          />
        </View>

        {/* Dia chi thuong tru */}
        <TouchableOpacity
          onPress={() => setShowInput4(false)}
          style={styles.editForm}
        >
          {showInput4 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Địa chỉ thường trú</Text>
                <Text>9A ngõ 89 Phạm Văn Đồng,...</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Địa chỉ thường trú"
              />
            </>
          )}
        </TouchableOpacity>

        {/* Dia chi hien tai */}
        <TouchableOpacity
          onPress={() => setShowInput5(false)}
          style={styles.editForm}
        >
          {showInput5 ? (
            <>
              <View style={styles.editFormText}>
                <Text>Địa chỉ hiện tại</Text>
                <Text>9A ngõ 89 Phạm Văn Đồng,...</Text>
              </View>
            </>
          ) : (
            <>
              <TextInput
                style={styles.textInput}
                placeholder="Địa chỉ hiện tại"
              />
            </>
          )}
        </TouchableOpacity>
      </View>

      <PressableView />
    </ScrollView>
  );
};

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

  contentCCCD: {
    backgroundColor: "#ffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    height: 200,
    width: 364,
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CACCCD",
  },

  cccdForm: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  cccd: {
    width: 140,
    height: 80,
  },

  imgCccdIcon: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },

  // Dropdown
  dropForm: {
    marginTop: 10,
    backgroundColor: "transparent",
    width: "100%",
    borderWidth: 1,
    borderColor: "#CACCCD",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  dropdown: {
    backgroundColor: "white",
    width: 150,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 15,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default OrdinaryPeople;

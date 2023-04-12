import React from "react";
import Home from "../component/Home";
import login from "../component/login";
import Register from "../component/Register";
import OTP from "../component/OTP";
import quenPass from "../component/quenPass";
import enterPass from "../component/enterPass";
import Perfect from "../component/Perfect";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Success
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeAcc from "../user/Home-acc";
import Account from "../user/Account";
import AddNew from "../user/AddNew";
import Category from "../user/Category";
import Icon from "react-native-vector-icons/MaterialIcons";
import infoUser from "../user/info/infoUser";
import editUserInfo from "../user/info/editUserInfo";
import userHKD from "../user/info/userHKD";
import editUserHKD from "../user/info/editUserHKD";
import userDoanhNghiep from "../user/info/userDoanhNghiep";
import editUserDN from "../user/info/editUserDN";
import Details from "../Layout/Details";
import ViewShop from "../Layout/ViewShop";
import Cart from "../Layout/Cart";
import SeeAlso from "../Layout/SeeAlso";
import Search from "../Layout/Search";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const bottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Trang chủ") {
            iconName = "home";
            size = focused ? 35 : 25;
          } else if (route.name === "Account") {
            iconName = "supervised-user-circle";
            size = focused ? 35 : 25;
          } else if (route.name === "Danh mục") {
            iconName = "category";
            size = focused ? 35 : 25;
          } else if (route.name === "Thêm mới") {
            iconName = "add-circle-outline";
            size = focused ? 35 : 25;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#1790E2",
        inactiveTintColor: "#2C2E31",
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeAcc}
        options={{
          header: () => null,
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
        }}
      />
      <Tab.Screen
        name="Danh mục"
        component={Category}
        options={{
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Thêm mới"
        component={AddNew}
        options={{
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          header: () => null,
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Success = () => {
  return (
    // <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={bottomTab}
        options={{
          header: () => null,
        }}
      />

      {/* <Stack.Screen
            name="Thông tin cá nhân"
            component={infoUser}
            options={{
              header: () => null,
            }}
          /> */}

      {/* <Stack.Screen
            name="Thông tin cá nhân"
            component={userHKD}
            options={{
              header: () => null,
            }}
          /> */}

      <Stack.Screen
        name="Thông tin cá nhân"
        component={userDoanhNghiep}
        options={{
          header: () => null,
        }}
      />

      {/* <Stack.Screen
            name="Sửa thông tin cá nhân"
            component={editUserInfo}
            options={{
              header: () => null,
            }}
          /> */}

      {/* <Stack.Screen
            name="Sửa thông tin cá nhân"
            component={editUserHKD}
            options={{
              header: () => null,
            }}
          /> */}

      <Stack.Screen
        name="Sửa thông tin cá nhân"
        component={editUserDN}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="View Shop"
        component={ViewShop}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Xem thêm"
        component={SeeAlso}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Đăng nhập"
        component={login}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen name="Quên mật khẩu" component={quenPass} />

      <Stack.Screen
        name="Đăng ký"
        component={Register}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen name="Nhập mã xác nhận" component={OTP} />

      <Stack.Screen name="Nhập mật khẩu" component={enterPass} />

      <Stack.Screen name="Hoàn tất" component={Perfect} />
      <Stack.Screen
        name="Thành công"
        component={Success}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarStyle: {
    height: 70,
    paddingTop: 10,
  },
});

export default HomeStackNavigator;

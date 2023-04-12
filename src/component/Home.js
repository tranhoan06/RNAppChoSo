import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Home({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Đăng nhập')
  }

  return (
  
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../assets/img/logo.jpg")}
          />

          <View style={styles.text}>
            <Text>Ứng dụng quản lí hộ kinh doanh cá thể</Text>
            <Text style={styles.nameApp}>Chợ Số </Text>
          </View>

          <Pressable 
          onPress={onPressHandler}
          style={({pressed}) => (
            {
              backgroundColor: pressed ?'#CACCCD' : '#1790E2',
              borderRadius: 200/2, width: 40, height: 40,
            }
          )}>
            <Icon style={styles.icon} name="angle-right" color="white" size={40} />
          </Pressable>

        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  },
  logo: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  nameApp: {
    fontSize: 40,
    fontWeight: "450",
    color: "black",
    justifyContent: "center",
    marginLeft: 60,
  },

  text: {
    marginBottom: 80,
    marginTop: 80,
  },

  icon: {
    textAlign: "center",
  }
});

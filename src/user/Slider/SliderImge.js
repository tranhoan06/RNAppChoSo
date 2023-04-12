import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

const images = [
  "https://i.pinimg.com/736x/73/d3/eb/73d3eb6181f834ba7b0879067b32ec19.jpg",
  "https://i.pinimg.com/736x/54/67/c6/5467c63969e7e1536d0c65a8785d57d2.jpg",
  "https://i.pinimg.com/736x/bb/5b/a2/bb5ba28326fd54c90efb663dc64b5542.jpg",
  "https://i.pinimg.com/736x/ba/1d/2e/ba1d2e5874eaeaa45c78d71e9b6fa4b2.jpg",
  "https://i.pinimg.com/736x/6d/72/21/6d72216d69025f2effd372cc047acbae.jpg",
  "https://i.pinimg.com/736x/9e/5c/d0/9e5cd0d2c0ed6b600297ca26bcaace07.jpg",
];

function Index() {
  return (
    <>
      <ViewSlider
        renderSlides={
          <>
            {images.map((img, index) => (
              <View key={index} style={styles.viewBox}>
                <Image
                  // key={index}
                  source={{
                    uri: img,
                  }}
                  resizeMode="cover"
                  style={styles.Image}
                />
              </View>
            ))}
          </>
        }
        style={styles.slider} //Main slider container style
        height={180} //Height of your slider
        slideCount={5} //How many views you are adding to slide
        dots={true} // Pagination dots visibility true for visibile
        dotActiveColor="red" //Pagination dot active color
        dotInactiveColor="gray" // Pagination do inactive color
        dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
        autoSlide={true} //The views will slide automatically
        slideInterval={3000} //In Miliseconds
      />
    </>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: width,
    padding: 10,
    alignItems: "center",
    height: 150,
  },
  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 15,
  },

  Image: {
    height: 200,
    width: "94%",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginTop: 4,
  },
});

export default Index;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";

import { WebView } from "react-native-webview";

import html_script from "./html_script";

class MiniMap extends React.Component {
  _goToMyPosition = (lat, lon) => {
    this.refs["Map_Ref"].injectJavaScript(`
      mymap.setView([${lat}, ${lon}], 10)
      L.marker([${lat}, ${lon}]).addTo(mymap)
    `);
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.Container}>
          <WebView
            ref={"Map_Ref"}
            source={{ html: html_script }}
            style={styles.Webview}
          />
          <View style={styles.ButtonArea}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this._goToMyPosition(21.017324, 105.784054)}
            >
              <Text style={styles.ButtonText}>My Location</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    height: "35%",
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
    marginTop: -20,
    borderRadius: 10
  },
  Webview: {
    height: "100%",
    width: "100%",
    borderRadius: 10
  },

  Button: {
    width: 100,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    alignItems: "center",
  },
});

export default MiniMap;

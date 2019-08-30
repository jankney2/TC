import React, { Component } from "react";
import PhotoStack from "./PhotoStack";
import Header from "./Header";
import { View, Text, StyleSheet } from "react-native";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <View style={styles.contain}>
        {/* <Header /> */}
        <PhotoStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1
  }
});

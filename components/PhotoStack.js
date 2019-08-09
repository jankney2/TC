import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export default class PhotoStack extends Component {
  state = {
    profiles: [
      {
        name: "Grumpy Cat",
        age: 22
      }
    ],
    displayProf: 0
  };
  render() {
    return (
      <View>
        <Image
          source={{
            uri: "https://picsum.photos/536/354"
          }}
          style={{ width: 300, height: 500 }}
        />

        <Text>{this.state.profiles[this.state.displayProf].name}</Text>
        <Text>{this.state.profiles[this.state.displayProf].age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

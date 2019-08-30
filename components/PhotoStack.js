import React, { Component } from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Animated,
  ScrollView,
  Dimensions, 
  PanResponder
} from "react-native";
import { SafeAreaView } from "react-navigation";

let id = 0;
const images = [
  {
    uri: "https://picsum.photos/536/354",
    id: ++id,
    name: "john",
    age: 22
  },
  {
    uri: "https://picsum.photos/536/354",
    id: ++id,
    name: "john",
    age: 22
  },
  {
    uri: "https://picsum.photos/536/354",
    id: ++id,
    name: "john",
    age: 22
  },
  {
    uri: "https://picsum.photos/536/354",
    id: ++id,
    name: "john",
    age: 22
  },
  {
    uri: "https://picsum.photos/536/354",
    id: ++id,
    name: "john",
    age: 22
  }
];

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
    let height = Dimensions.get("window").height-120;
    let width = Dimensions.get("window").width;
    let imageMapper = images.map(el => {
      return (
        <Animated.View
          key={el.id}
          style={{
            padding: 10,
            height: height,
            width: width,
            position: "absolute"
          }}
        >
          <Image
            source={{
              uri: "https://picsum.photos/536/354"
            }}
            style={{
              flex: 1,
              height: null,
              width: null,
              borderRadius: 20,
              resizeMode: "cover"
            }}
          />

          <Text>{el.name}</Text>
          <Text>{el.age}</Text>
        </Animated.View>
      );
    });
    return (
<View style={{flex:1}}>

        {imageMapper}
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

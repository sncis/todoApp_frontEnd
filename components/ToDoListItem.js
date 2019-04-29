import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

export default class ToDoListItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <Text>{this.props.duration}</Text>
          <Text>{this.props.deadline}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "red",
    width: Dimensions.get("window").width - 50,
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  description: {
    fontSize: 10,
    fontWeight: "200"
  }
});

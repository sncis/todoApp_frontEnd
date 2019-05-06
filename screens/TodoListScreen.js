import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import ToDoList from "../components/ToDoList";
import { padding } from "../MainStyles";

export default class TodoListScreen extends Component {
  render() {
    return (
      <View style={{ padding: padding.sm }}>
        <ToDoList />
      </View>
    );
  }
}

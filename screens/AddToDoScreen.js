import React, { Component } from "react";
import { View } from "react-native";
import ToDoInputForm from "../components/ToDoInputForm";

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <ToDoInputForm goBack={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

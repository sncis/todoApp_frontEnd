import React, { Component } from "react";
import { View } from "react-native";
import LoginForm from "../components/LoginForm";

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <LoginForm
          navigateToTodos={() => this.props.navigation.navigate("Dashboard")}
        />
      </View>
    );
  }
}

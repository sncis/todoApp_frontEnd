import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { AppSwitchNavigator } from "./Navigation";

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

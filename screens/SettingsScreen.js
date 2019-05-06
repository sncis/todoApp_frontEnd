import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { onSignOut } from "../Auth";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
        <TouchableOpacity
          onPress={() =>
            onSignOut().then(() => this.props.navigation.navigate("SignedOut"))
          }
        >
          <Text>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

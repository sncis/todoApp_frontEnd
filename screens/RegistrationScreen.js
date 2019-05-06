import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo";
import { onSignIn } from "../Auth";
import LoginForm from "../components/LoginForm";

export default class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <LinearGradient
          colors={["rgba(255,95,109, 0.7)", "rgba(255,195,113,0.7)"]}
          style={styles.gradient}
        >
          <LoginForm
            navigateToTodos={() => this.props.navigation.navigate("SignedIn")}
          />
          {/* </TouchableOpacity> */}
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignedIn")}
            >
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

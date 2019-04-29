import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";
import { Input } from "react-native-elements";
import { LinearGradient } from "expo";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onLoginSubmit = () => {
    console.log(
      "user: " + this.state.username + " and password: " + this.state.password
    );
    return this.props.navigateToTodos();
  };

  render() {
    return (
      <View>
        <LinearGradient
          colors={["rgba(255,95,109, 0.7)", "rgba(255,195,113,0.7)"]}
          style={styles.gradient}
        >
          <View style={styles.inputContainer}>
            <Input
              placeholder="username"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={styles.input}
              inputStyle={styles.inputText}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              placeholder="password"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={styles.input}
              inputStyle={styles.inputText}
              onChangeText={text => this.setState({ password: text })}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.onLoginSubmit}
            >
              <Text style={styles.submitText}>login</Text>
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
  },
  inputContainer: {
    width: Dimensions.get("window").width - 100,
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  input: {
    borderColor: "rgba(255,255,255, 0.4)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255, 0.4)",
    marginBottom: "2%"
  },
  inputText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
    borderBottomColor: "transparent"
  },
  submitButton: {
    alignSelf: "center",
    width: "90%",
    height: 30,
    borderColor: "rgba(255,255,255, 0.4)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255, 0.4)",
    alignContent: "center"
  },
  submitText: {
    textAlign: "center",
    fontWeight: "300"
  }
});

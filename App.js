import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
// import { AppSwitchNavigator } from "./Navigation";
import { createRootNavigator } from "./Navigation";
import { isSignedIn } from "./Auth";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignedIn: false
    };
  }
  componentDidMount = () => {
    isSignedIn()
      .then(response =>
        this.setState({ signedIn: response, checkedSignedIn: true })
      )
      .catch(error => alert(error));
  };

  render() {
    const { signedIn, checkedSignedIn } = this.state;

    if (!checkedSignedIn) {
      return <Text>waaaaaaaaaaaaaaaas</Text>;
    }
    const AppContainer = createAppContainer(createRootNavigator(signedIn));
    return <AppContainer />;
  }
}

// const AppContainer = createAppContainer(createRootNavigator(signedIn));

// export default class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

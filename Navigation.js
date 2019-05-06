import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

import TodoListScreen from "./screens/TodoListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AddToDoScreen from "./screens/AddToDoScreen";

export const signedOutNavigator = createStackNavigator({
  Register: {
    screen: RegistrationScreen,
    navigationOptions: {
      title: "Register"
    }
  },
  SignIn: {
    screen: LoginScreen,
    navigationOptions: {
      title: "sign In"
    }
  }
});

export const signedInNavigator = createBottomTabNavigator(
  {
    TodoList: {
      screen: TodoListScreen,
      navigationOptions: {
        tabBarLabel: "ToDos"
      }
    },
    AddToDo: {
      screen: AddToDoScreen,
      navigationOptions: {
        tabBarLabel: "add ToDo"
      }
    },
    Settigns: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings"
      }
    }
  },
  {
    tabBarOptions: {}
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: signedInNavigator
      },
      SignedOut: {
        screen: signedOutNavigator
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

// export const TabNavigator = createBottomTabNavigator(
//   {
//     ToDos: { screen: TodoScreen },
//     NewToDo: { screen: AddToDoScreen },
//     Settings: { screen: SettingsScreen }
//   },
//   {
//     tabBarOptions: {
//       lableStyle: { fontSize: 20 }
//     }
//   }
// );

// export const AppSwitchNavigator = createSwitchNavigator({
//   Welcome: { screen: LoginScreen },
//   Dashboard: { screen: TabNavigator }
// });

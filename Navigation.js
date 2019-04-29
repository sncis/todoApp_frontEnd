import {
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import TodoScreen from "./screens/TodoScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";
import AddToDoScreen from "./screens/AddToDoScreen";

export const TabNavigator = createBottomTabNavigator(
  {
    ToDos: { screen: TodoScreen },
    NewToDo: { screen: AddToDoScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    tabBarOptions: {
      lableStyle: { fontSize: 20 }
    }
  }
);

export const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: LoginScreen },
  Dashboard: { screen: TabNavigator }
});

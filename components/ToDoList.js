import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimenions
} from "react-native";
import axios from "axios";
import ToDoListItem from "../components/ToDoListItem";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentWillMount = () => {
    this.getTodos();
  };

  getTodos = () => {
    axios
      .get("http://127.0.0.1:5000/todos")
      .then(response => {
        this.setState({ todos: response.data });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  createTodoListItem = () =>
    this.state.todos.map(todo => {
      return (
        <ToDoListItem
          title={todo.title}
          description={todo.description}
          duration={todo.estTime}
          deadline={todo.deadline}
          key={todo.id}
        />
      );
    });

  render() {
    return (
      <View>
        <Text>TodoList</Text>
        <ScrollView>
          <View>
            {this.createTodoListItem()}
            {/* <Text>{this.state.todos}</Text> */}
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigateBack()}>
              <Text>go back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

import React, { Component } from "react";
import {
  View,
  Text,
  ScollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";
import axios from "axios";
import { Input } from "react-native-elements";
import DatePicker from "react-native-datepicker";

export default class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      decription: "",
      estTime: "",
      created_at: new Date(),
      deadline: ""
    };
  }

  postTodo = () => {
    console.log("haaaaaaaaa");
    console.log(this.state.deadline);
    // const data = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   estTime: float(this.state.estTime),
    //   created_at: this.state.created_at,
    //   deadline: this.state.deadline
    // };
    const data = {
      title: "titlfe from frontend",
      description: "description from frontend",
      estTime: 1.4,
      created_at: new Date(),
      deadline: new Date()
    };
    axios
      .post("http://127.0.0.1:5000/todos", data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return this.props.goBack();
  };

  render() {
    return (
      <View>
        <Text style={styles.header}>enter your next ToDo</Text>
        <View>
          <Input
            placeholder="Title"
            inputContainerStyle={{
              ...styles.inputContainer,
              borderBottomWidth: 0
            }}
            inputStyle={styles.inputText}
            enablesReturnKeyAutomatically={true}
          />

          <TextInput
            placeholder="description"
            style={{ ...styles.description, borderBottomWidth: 0 }}
            inputStyle={styles.inputText}
            allowFontScaling={true}
            clearTextOnFocus={true}
            multiline={true}
            onChangeText={text => this.setState({ description: text })}
          />
          <Input
            placeholder="estTime"
            inputContainerStyle={{
              ...styles.inputContainer,
              borderBottomWidth: 0
            }}
            inputStyle={styles.inputText}
            enablesReturnKeyAutomatically={true}
          />

          {/* <DatePicker
            style={styles.datePicker}
            mode="time"
            // date={this.state.estTime}
            placeholder="estimated time"
            is24Hour={true}
            confirmBtnTest="Done"
            cancelBtnText="Cancle"
            onDateChange={time => this.setState({ estTime: time })}
            showIcon={false}
          /> */}
          <DatePicker
            mode="date"
            placeholder="select finishing date"
            date={this.state.date_posted}
            format="DD.MM.YYYY"
            confirmBtnTest="Done"
            cancelBtnText="Cancle"
            onDateChange={date => this.setState({ deadline: date })}
            showIcon={false}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.postTodo()}
        >
          <Text style={styles.submitText}>submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {},
  header: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "10%"
  },
  description: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    padding: 5
  },
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    height: 20,
    marginBottom: 40
  },
  datePicker: {},
  submitButton: {
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
    backgroundColor: "black",
    alignSelf: "center",
    width: Dimensions.get("window").width / 2,
    height: 35,
    marginTop: "10%",
    justifyContent: "center"
  },
  submitText: {
    color: "white",
    textAlign: "center",
    fontWeight: "200",
    fontSize: 16
  }
});

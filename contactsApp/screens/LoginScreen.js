import React from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native";
import { login } from '../api'

export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
    error: ''
  }

  _login = async () => {
    try {
      const success = await login(this.state.username, this.state.password)
      this.props.navigation.navigate("Main");
    } catch (error) {
      const message = error.message
      this.setState({
        error: message
      })
    }
  };

  handleUsernameUpdate = username => {
    this.setState({username})
  }

  handlePasswordUpdate = password => {
    this.setState({password})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{this.state.error}</Text>
        <TextInput autoCapitalize='none' placeholder='username' value={this.state.username} onChangeText={this.handleUsernameUpdate} />
        <TextInput autoCapitalize='none' secureTextEntry placeholder='password' value={this.state.password} onChangeText={this.handlePasswordUpdate} />
        <Button title="Press to Log In" onPress={this._login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
});
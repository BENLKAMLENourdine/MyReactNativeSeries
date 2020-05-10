import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count+1
    }))
  }

  componentDidMount(){
    // setInterval(this.inc, 1000)
  }

  render(){
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    )
    }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  count: {
    fontSize: 48
  }
});

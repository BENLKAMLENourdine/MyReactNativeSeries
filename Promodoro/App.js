import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class CounterEven extends React.Component{

  shouldComponentUpdate(nextProps){
    return !(nextProps.count % 2)
  }
  render(){
    return (
        <Text style={styles.count} >{this.props.count}</Text>
    )
    }
}

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
    setInterval(this.inc, 1000)
  }

  render(){
    return (
      <View style={styles.appContainer}>
        <CounterEven count={this.state.count} />
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

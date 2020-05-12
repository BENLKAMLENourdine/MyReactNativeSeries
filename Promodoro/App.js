import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



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

class Counter extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  inc = () => {
    console.log('d')
    this.setState(prevState => ({
      count: prevState.count+1
    }))
  }

  componentDidMount(){
    this.intervale = setInterval(this.inc, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervale)
  }
  render(){
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count} >{this.state.count}</Text>
      </View>
  
    )
  }
}

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showCounter: true
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      showCounter: !prevState.showCounter
    }))
  }

  render() {
    if(this.state.showCounter) return (
      <View style={styles.appContainer}>
        <Button onPress={() => this.toggle()} style={styles.padding} title='show or dismiss counter' />
        <Counter />
      </View>
    )
    else return (
      <View style={styles.appContainer}>
        <Button onPress={() => this.toggle()} style={styles.padding} title='show or dismiss counter'/>
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
  },
  padding: {
    paddingTop: 50
  }
});

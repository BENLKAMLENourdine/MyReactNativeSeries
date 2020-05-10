import React from 'react';
import { StyleSheet, Switch, Text, View, Button, ScrollView } from 'react-native';
// import { Constants } from 'expo'

const Todo = (props) => {
  return (
    <View style={styles.tabContainer}>
      <Switch value={props.todo.checked} onValueChange={props.onToggle} />
      <Button onPress={props.onDelete} title="delete" />
      <Text>{props.todo.title}</Text>
    </View>
  )
}

let id = 0

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  
  addTodo(){
    let title = 'todo'
    this.setState(
      {
        todos: [...this.state.todos,
        {
          id: id++,
          title,
          checked: false
        }]
      }
    )
  }

  removeTodo(id){
    this.setState(
      {
        todos: this.state.todos.filter((todo) => todo.id !== id)
      }
    )
  }

  toggleTodo(id){
    this.setState(
      {
        todos: this.state.todos.map((todo) => {
         if(todo.id === id) return {
           id: todo.id,
           title: todo.title,
           checked: !todo.checked
         }
         else return todo
        }
      )
      })
  }

  render(){
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo => todo.checked === false).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add a todo" />
        <ScrollView style={styles.fill}>
          {
            this.state.todos.map(todo => (
              <Todo key={todo.id} todo={todo} onDelete={() => this.removeTodo(todo.id) } onToggle={() => this.toggleTodo(todo.id)} />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  appContainer: {paddingTop: 50},
  fill: { flex: 1 }
});

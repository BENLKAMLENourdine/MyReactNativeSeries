import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import contacts, { compareNames } from './contacts'

const Contact = props => (
  <View style={styles.contactPadding}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  renderItem = obj => <Contact {...obj.item} />
  render() {
    return (
      <View style={styles.viewPadding}>
        <Button style={styles.buttonMargin} title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort contacts" onPress={this.sort} />
          {
            this.state.showContacts && (<FlatList
              renderItem={this.renderItem}
              data={this.state.contacts}
            />)
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewPadding: {
    paddingTop: Constants.statusBarHeight
  },
  buttonMargin: {
    marginBottom: 20,
  },
  contactPadding: {
    padding: 20
  }
});

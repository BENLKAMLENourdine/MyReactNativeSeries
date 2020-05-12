import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import contacts from './contacts'

const Contact = props => (
  <View style={styles.contactPadding}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  render() {
    return (
      <View style={styles.viewPadding}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
          {
            this.state.showContacts && (<ScrollView>
              {contacts.map(contact => (
                <Contact {...contact} />
              ))}
            </ScrollView>)
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewPadding: {
    paddingTop: Constants.statusBarHeight
  },
  contactPadding: {
    padding: 20
  }
});

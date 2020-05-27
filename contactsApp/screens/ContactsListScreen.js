import React from 'react'
import { Button, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import ContactList from '../ContactList'

export default class ContactsListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: <Button title="Add" onPress={() => navigation.navigate('AddContact')} />
    }
  }

  render() {
      return (
          <View style={styles.viewPadding}>
              <ContactList contacts={this.props.screenProps.contacts} onSelectContact={(contact) => {
                this.props.navigation.navigate('ContactDetails', {
                  phone: contact.phone,
                  name: contact.name
                })
              }} />
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
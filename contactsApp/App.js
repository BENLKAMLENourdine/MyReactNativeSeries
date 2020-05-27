import React from 'react';

// import contacts, { compareNames } from './contacts'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen';
import ContactsListScreen from './screens/ContactsListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import SettingsScreen from './screens/SettingsScreen'
import { Ionicons } from 'react-native-vector-icons'
import { fetchUsers } from './api'

const ContactTab = createStackNavigator({
  AddContact: AddContactScreen,
  ContactsList: ContactsListScreen,
  ContactDetails: ContactDetailsScreen
}, {
  initialRouteName: 'ContactsList'
})

ContactTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contacts${focused ? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  )
};

const MainNavigator = createBottomTabNavigator({
  Contacts: ContactTab,
  Settings: SettingsScreen
})

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen
}, {
  initialRouteName: 'Login'
})

export default class App extends React.Component {
  state = {
    contacts: null,
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const contacts = await fetchUsers()
    this.setState({
      contacts
    })
  }

  addContact = (state) => {
      this.setState(prevState => ({
      contacts: [...prevState.contacts, state]
    }))
  }


  render() {
    return (
      <AppNavigator screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />
    );
  }
}



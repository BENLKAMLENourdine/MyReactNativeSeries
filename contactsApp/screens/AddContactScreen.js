import React from 'react'

import AddContactForm from '../addContactForm'

export default class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }
    handleAddddContact = formState => {
        this.props.screenProps.addContact(formState)
        this.props.navigation.navigate('ContactsList')
    }

    render() {
        return <AddContactForm  addContact={this.handleAddddContact} />
    }
}
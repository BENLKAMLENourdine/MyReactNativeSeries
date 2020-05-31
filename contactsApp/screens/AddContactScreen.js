import React from 'react'
import { connect } from 'react-redux'
import { updateContact } from '../store/actions'

import AddContactForm from '../addContactForm'

class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }
    handleAddddContact = formState => {
        this.props.updateContact(formState)
        this.props.navigation.navigate('ContactsList')
    }

    render() {
        return <AddContactForm  addContact={this.handleAddddContact} />
    }
}


  export default connect(null, {updateContact: updateContact})(AddContactScreen)
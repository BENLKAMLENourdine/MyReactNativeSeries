import React from 'react'
import { StyleSheet, KeyboardAvoidingView, Button, TextInput, View } from 'react-native';
import Constants from 'expo-constants'

export default class addContactForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone: '',
            isFormValid: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone) this.validateForm()
    }

    changeName = (name) => {
        this.setState({
            name
        }, this.validateForm)
    }

    changePhone = (phone) => {
        if(+phone >= 0 && phone.length <= 10){
            this.setState({
                phone
            }, this.validateForm)
        }
    }

    // getHandler = key => val => {
    //     this.setState({
    //         [key]: val
    //     })
    // }
    onSubmit = () => {
            this.props.addContact(this.state)
    }

    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >=3){
            return this.setState({
                isFormValid: true
            })
        } else {
            return this.setState({
                isFormValid: false
            })
        }
    }


    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.viewPadding}>
                <TextInput style={styles.input} value={this.state.name} onChangeText={this.changeName} placeholder="Name"  />
                <TextInput style={styles.input} value={this.state.phone} onChangeText={this.changePhone} keyboardType="numeric" placeholder="Phone" />
                <Button title="Add Contact" onPress={this.onSubmit} disabled={!this.state.isFormValid}/>
            </KeyboardAvoidingView>
        )
    }
}

  const styles = StyleSheet.create({
    viewPadding: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        justifyContent: 'center'
      },
    input: {
        borderColor: 'blue',
        borderWidth: 1,
        padding: 4,
        margin: 2
    }
  });

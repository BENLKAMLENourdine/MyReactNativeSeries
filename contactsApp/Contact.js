import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Contact = props => (
    <TouchableOpacity style={styles.contactPadding} onPress={() => props.onSelectContact(props)}>
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
    </TouchableOpacity>
  )

  const styles = StyleSheet.create({
    contactPadding: {
      padding: 20
    }
  });

  export default Contact
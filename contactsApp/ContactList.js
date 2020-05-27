import React from 'react'
import { SectionList, StyleSheet, Text } from 'react-native';
import Contact from './Contact'


const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactList = props => {

  const renderItem = obj => <Contact {...obj.item} onSelectContact={props.onSelectContact} />

  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact]
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(key => ({
    title: key,
    data: contactsByLetter[key]
  }))

  return (
    <SectionList
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
              sections={sections}
            />
)
}
  const styles = StyleSheet.create({
    
  });

  export default ContactList
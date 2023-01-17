 import { nanoid } from 'nanoid'
import { Component } from "react";
import "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import {Filter} from "./Filter/Filter"


export class App extends Component { 

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formSubmitHandler = (data) => {
    
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }
    
    const isSet = this.state.contacts.filter(item => item.name.toLowerCase() === data.name.toLowerCase());

    if (isSet.length === 0) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts]
        }))
    } else {
      alert(`${ data.name } is already is contact`)
    }
  }

  filerContacts = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  deleteContact = (id) => {
    console.log(id)
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }))
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContact = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div style={{ padding: '10px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.formSubmitHandler } />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={ this.filerContacts } />
        <ContactList options={visibleContact} onDelete={ this.deleteContact } />
      </div>
    )
  }
}

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
    ]
  }

  formSubmitHandler = (data) => {
    
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  filerContacts = (data) => {

  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.formSubmitHandler } />

        <h2>Contacts</h2>
        <Filter filter={ this.filerContacts } />
        <ContactList options={this.state.contacts} />
      </div>
    )
  }


}


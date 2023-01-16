import { Component } from "react";
import "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";


export class App extends Component { 

  state = {
    contacts: []
  }

  formSubmitHandler = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.formSubmitHandler } />

        <h2>Contacts</h2>
        {/* <Filter ... />
        <ContactList ... /> */}
      </div>
    )
  }


}


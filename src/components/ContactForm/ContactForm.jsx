import { Component } from "react";
import "./ContactForm.module.css"

export class ContactForm extends Component{
    state = {
        name: ''
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
        //console.log(this.state.name)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" onSubmit={this.handleSubmit}>Add</button>
            </form>
        )
    }

}
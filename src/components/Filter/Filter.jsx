import { nanoid } from 'nanoid';
import { Component } from "react";
import "./Filter.module.css";



export class Filter extends Component{
    inputFilter = nanoid();

    state = {
        filter: '',
    }

    handleFilter = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        
        this.props.filter(this.state.filter.toLowerCase());
        console.log(this.state.filter)
    }

    render() {
        return (
            <div>
                <label htmlFor={this.inputFilter}> Find contacts by Name</label>
                <input
                    id={this.inputFilter}
                    type="text"
                    name="filter"
                    value={this.state.filter}
                    onChange={this.handleFilter}
                />
            </div>
        )
    }
}
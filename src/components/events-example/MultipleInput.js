import React, { Component } from 'react';

class MultipleInput extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            date: '',
            isAdmin: true,
            selectValue: 'sender'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ?
            target.checked : target.value;
        let name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <label>firstName</label>
                    <input type="text" name="firstName" value={this.state.firstName} 
                        onChange={this.handleChange} />

                    <label>lastName</label>
                    <input type="text" name="lastName" value={this.state.lastName} 
                        onChange={this.handleChange} />    

                    <input type="checkbox" name="isAdmin" checked={this.state.isAdmin}
                        onChange={this.handleChange} />

                    <label>birthdate</label>
                    <input type="date" name="date" value={this.state.date} 
                        onChange={this.handleChange} />

                    <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
                        <option value="sender">sender option</option>
                        <option value="report">report option</option>
                        <option value="recipient">recipient option</option>
                    </select>
                        
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default MultipleInput;
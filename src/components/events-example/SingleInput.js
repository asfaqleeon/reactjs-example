import React, { Component } from 'react';

class SingleInput extends Component {
    constructor() {
        super();
        this.state = {
            msg: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            msg: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return(
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <label>{this.state.msg}</label>
                    <input type="text" value={this.state.msg} onChange={this.handleChange} />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default SingleInput;
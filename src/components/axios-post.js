import React, { Component } from 'react';
import axios from 'axios';

class AxiosPost extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            result: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        let numbers = {
            num1: this.state.num1,
            num2: this.state.num2
        }
        console.log(numbers);
        
        axios.post('http://localhost:3001/test',{numbers})
        .then( (response) => {
            console.log(response);
            this.setState({
                result: response.data.result
            })
        })
        .catch( (error) => {
            console.log(error);
        })
        .then( () => {
            // always executed
        });
    }

    render(){
        console.log(this.state.data);
        return(
            <div className="col-md-4">
                <div className="alert alert-primary">{this.state.result}</div>
                <form onSubmit={this.handleSubmit}>
                    <label>num1</label>
                    <input type="text" name="num1" value={this.state.num1} 
                        onChange={this.handleChange} />

                    <label>num2</label>
                    <input type="text" name="num2" value={this.state.num2} 
                        onChange={this.handleChange} />

                    <input type="submit" className="btn btn-primary" value="submit"/>
                </form>
            </div>
        );
    }
}

export default AxiosPost;
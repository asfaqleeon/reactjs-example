import React, { Component } from 'react';
import axios from 'axios';

class AxiosGet extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/test')
        .then( (response) => {
            console.log(response);
            this.setState({
                data: response.data
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
                gets: {this.state.data.success}
            </div>
        );
    }
}

export default AxiosGet;
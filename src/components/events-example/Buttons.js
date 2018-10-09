import React, { Component } from 'react';

class Buttons extends Component {
    constructor() {
        super();
        this.state = {
        }

        this.example = this.example.bind(this);
    }

    example() {
        console.log('no param');
    }

    paramExample = (param) => (e) => {
        console.log('e: '+e);
        console.log('passed: '+param);
    }

    render(){
        return(
            <div className="col-md-6">
                <button className="btn btn-danger" 
                    onClick={this.example}>without param example</button>

                <button className="btn btn-success" 
                    onClick={this.paramExample('example param')}>param example</button>
            </div>
        );
    }
}

export default Buttons;
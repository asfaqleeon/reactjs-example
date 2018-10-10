import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }

        this.handleChange = this.handleChange.bind(this);
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

    render(){
        let msg;

        if(this.state.error){
            msg = <div className="alert alert-danger">
                        error message
                    </div>
        } else {
            msg = <div className="alert alert-success">
                        success message
                    </div>
        }

        return(
            <div>
                <div className="col-md-4">
                    {msg}
                </div>

                <input type="checkbox" name="error" checked={this.state.error}
                onChange={this.handleChange} />
            </div>
            
        );
    }
}

export default ConditionalRender;
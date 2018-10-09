import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
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
            <div className="col-md-4">
                {msg}
            </div>
        );
    }
}

export default ConditionalRender;
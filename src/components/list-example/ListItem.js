import React, { Component } from 'react';

class ListItem extends Component {
    render(){
        return(
            <li>
                <h1>{this.props.data.header}</h1>
                <p>{this.props.data.description}</p>
            </li>
        );
    }
}

export default ListItem;
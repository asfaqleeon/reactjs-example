import React, { Component } from 'react';

class TableRow extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.phone}</td>
            </tr>
        );
    }
}

export default TableRow;
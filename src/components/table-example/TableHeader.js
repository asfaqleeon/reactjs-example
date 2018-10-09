import React, { Component } from 'react';

class TableRow extends Component {
    render(){
        return(
            <tr>
                <th>{this.props.data[0]}</th>
                <th>{this.props.data[1]}</th>
            </tr>
        );
    }
}

export default TableRow;
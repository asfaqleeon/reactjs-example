import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            headers: [
                'name','phone'
            ],
            items: [
                {
                    name: 'user1',
                    phone: '1234'
                },
                {
                    name: 'user2',
                    phone: '213'
                },
                {
                    name: 'user3',
                    phone: '435'
                },
            ]
        }
    }
    render(){
        return(
            <div className="col-md-6">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <TableHeader data={this.state.headers}/>
                    </thead>

                    <tbody>
                    {
                        this.state.items.map(
                            (item,i) => 
                                <TableRow key={i} data={item}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default Table;
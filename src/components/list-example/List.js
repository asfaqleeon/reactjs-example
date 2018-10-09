import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    header: 'test1',
                    description: 'test description'
                },
                {
                    header: 'test2',
                    description: 'test description'
                },
                {
                    header: 'test3',
                    description: 'test description'
                },
            ]
        }
    }
    render(){
        return(
            <div className="col-md-6">
                <ul>
                    {
                        this.state.items.map(
                            (item,i) => 
                                <ListItem key={i} data={item}/>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default List;
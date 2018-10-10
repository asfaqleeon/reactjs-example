import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';


import List from './components/list-example/List';
import Table from './components/table-example/Table';
import Buttons from './components/events-example/Buttons';
import SingleInput from './components/events-example/SingleInput';
import MultipleInput from './components/events-example/MultipleInput';
import ConditionalRender from './components/conditional-render';
import AxiosGet from './components/axios-get';
import Error from './error'
import AxiosPost from './components/axios-post'

class App extends Component {
  render() {
    return (
      <div className="container">
        
          <BrowserRouter>
            <div className="row">
              <div className="col-2">
                <ul className="list-group">
                  <li className="list-group-item">
                    <NavLink to="/list">lists</NavLink>
                  </li>

                  <li className="list-group-item">
                    <NavLink to="/table">table</NavLink>
                  </li>

                  <li className="list-group-item">
                    <NavLink to="/buttons">button</NavLink>
                  </li>

                  <li className="list-group-item">
                    <NavLink to="/single-input">single input</NavLink>
                  </li>

                  <li className="list-group-item">
                    <NavLink to="/multiple-input">multiple input</NavLink>
                  </li>

                  <li className="list-group-item">
                    <NavLink to="/conditional-render">conditional render</NavLink>
                  </li>

                  <li className="list-group-item">
                    <NavLink to="/axios-get">axios get</NavLink>
                  </li>

                  <li className="list-group-item">
                    <NavLink to="/axios-post">axios post</NavLink>
                  </li>
                </ul>  
              </div>

              <div className="col-6 main">
                <Switch>
                  <Route path="/" component={List} exact /> {/* without exact all others take list component*/}
                  <Route path="/list" component={List} />
                  <Route path="/table" component={Table} />
                  <Route path="/buttons" component={Buttons} />
                  <Route path="/single-input" component={SingleInput} />
                  <Route path="/multiple-input" component={MultipleInput} />
                  <Route path="/conditional-render" component={ConditionalRender} />
                  <Route path="/axios-get" component={AxiosGet} />
                  <Route path="/axios-post" component={AxiosPost} />
                  <Route component={Error} />
                </Switch>
              </div>
            </div>
            
          </BrowserRouter>
        
      </div>
    );
  }
}

export default App;

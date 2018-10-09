import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/list-example/List';
import Table from './components/table-example/Table';
import Buttons from './components/events-example/Buttons';
import SingleInput from './components/events-example/SingleInput';
import MultipleInput from './components/events-example/MultipleInput';
import ConditionalRender from './components/conditional-render';
import AxiosGet from './components/axios-get'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <List /> */}
        <Table/>
        <Buttons />
        <SingleInput />
        <MultipleInput />
        <ConditionalRender />
        <AxiosGet />
      </div>
    );
  }
}

export default App;

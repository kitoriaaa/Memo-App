import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';


class App extends Component {
  td = {
    width: "250px",
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <Memo />
      </div>
    );
  }
}


export default App;

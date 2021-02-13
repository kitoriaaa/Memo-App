import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';



class FindForm extends Component {
  input = {
    fontSize: "14pt",
    color: "#006",
    padding: "0xp",
  }
  btn = {
    fontSize: "12pt",
    color: "#006",
    padding: "1px 10px",
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.doAction = this.doAction.bind(this);
    this.doChange = this.doChange.bind(this);
  }

  doAction(e) {
    e.preventDefault();
    let action = findMemo(this.state.text);
    this.props.dispatch(action);
  }

  doChange(e) {
    this.setState({
      text: e.target.value
    });
  }


  render() {
    console.log(this.state.message);
    return (
      <div>
        <form onSubmit={this.doAction}>
          <input type="text" size="10" onChange={this.doChange} style={this.input} value={this.state.text} />
          <input type="submit" style={this.btn} value="Find"></input>
        </form>
      </div>
    );
  }
}


export default connect()(FindForm);

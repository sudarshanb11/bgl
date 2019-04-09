import React, { Component } from 'react';
import './App.scss';
import Card from './card'
import CoverExtras from './coverExtras'
import DatePicker from './calendar'
import Payments from './payments'
import Preferences from './preferences'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dateValue : ''
    }
  }
  render() {
    return (
        <div className="app">
            <input type='text' value={this.state.dateValue} className="form-control" readOnly />
            <br/>
            <DatePicker onDateChange={(val) => this.setState({dateValue: val})} activeEnd={60}/>
            <br/>
            <Card/>
            <br />
            <CoverExtras />
            <br />
            <Preferences />
            <br/>
            <Payments />
            <br/>
        </div>
    );
  }
}

export default App;

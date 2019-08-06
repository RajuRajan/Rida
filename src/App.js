import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import Top_navbar from './components/Top_navbar/Top_navbar';
import Side_navbar from './components/Side_navbar/Side_navbar';


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      sideToggle: "sidenav"
    }
    this.sideNavToggle = this.sideNavToggle.bind(this);

  }
  sideNavToggle(value) {
    this.setState({ sideToggle: value })
  }
  render() {

    return (
      <div>
        <Router>
          <Top_navbar sideNavToggle={this.sideNavToggle} NavState={this.state} />
          <Side_navbar sideToggle={this.state} />
        </Router>
      </div>
    );
  }
}

export default App;

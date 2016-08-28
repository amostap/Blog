import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

const Header = () => (
  <div className="App-header">
    <Link to="/" >Home</Link>
  </div>
);

const Footer = () => (
  <div className="App-footer">
    <a href="https://github.com/amostap" target='_blank'>git</a>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;

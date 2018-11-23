import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';

import classes from './App.css';

const Index = () => <h2>Home</h2>;
const Test = () => <h2>aaaa</h2>;

class App extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <Header />

          <Route path="/ind" exact component={Index} />
          <Route path="/test" component={Test} />
          
        </div>
    </Router>
    );
  }
}

export default App;

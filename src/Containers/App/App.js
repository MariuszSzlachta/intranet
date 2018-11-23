import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={Index} />
      </div>
    </Router>
    );
  }
}

export default App;

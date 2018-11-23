import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Terms from '../../Components/Terms/Terms';

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
          <Route path="/terms" component={Terms} />
          <Footer />
        </div>
    </Router>
    );
  }
}

export default App;

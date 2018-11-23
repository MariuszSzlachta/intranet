import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Terms from '../../Components/Terms/Terms';

import classes from './App.module.scss';
import Placeholder from '../../Components/Placeholer/Placeholder';


class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.container}>
          <Header />

          <Route path="/" exact render={props => <Placeholder {...props} title="Strona Głowna" />} />
          <Route path="/news" render={props => <Placeholder {...props} title="Wiadomości" />} />
          <Route path="/departments" render={props => <Placeholder {...props} title="Departamenty" />} />
          <Route path="/toolbox" render={props => <Placeholder {...props} title="Niezbędnik" />} />
          <Route path="/announcements" render={props => <Placeholder {...props} title="Ogłoszenia" />} />
          <Route path="/sections" render={props => <Placeholder {...props} title="Sekcje" />} />
          <Route path="/terms" component={Terms} />
          <Footer />
        </div>
    </Router>
    );
  }
}

export default App;

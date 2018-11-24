import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Terms from '../../Components/Terms/Terms';

import classes from './App.module.scss';
import Placeholder from '../../Components/Placeholer/Placeholder';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchingText: '',
      companyData: {
        address: 'ul. Słoneczna 51/2, 02-528 Warszawa',
        krs: '00000000',
        regon: '00000000',
        nip: '00000000'
      }
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    let searchingText = event.target.input.value;
    if (searchingText.length > 3) {
      this.setState({
        searchingText
      });
    }
  }

  render() {
    return (
      <Router>
        <div className={classes.container}>
          <Header submited={this.onSubmitHandler} />

          <Route path="/" exact render={props => <Placeholder {...props} title="Home" />} />
          <Route path="/news" render={props => <Placeholder {...props} title="News" />} />
          <Route path="/departments" render={props => <Placeholder {...props} title="Departments" />} />
          <Route path="/toolbox" render={props => <Placeholder {...props} title="Toolbox" />} />
          <Route path="/announcements" render={props => <Placeholder {...props} title="Announcements" />} />
          <Route path="/sections" render={props => <Placeholder {...props} title="Sections" />} />
          <Route path="/terms" component={Terms} />

          <Footer data={this.state.companyData} />
        </div>
    </Router>
    );
  }
}

export default App;

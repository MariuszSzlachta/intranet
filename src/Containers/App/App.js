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

  onSearchHandler = (event) => {
    let searchingText = event.target.value;
    if (searchingText.length > 3) {
      this.setState({
        searchingText
      });
    }
  }

  render() {
    console.log(this.state.searchingText)
    return (
      <Router>
        <div className={classes.container}>
          <Header changed={this.onSearchHandler} />

          <Route path="/" exact render={props => <Placeholder {...props} title="Strona Główna" />} />
          <Route path="/news" render={props => <Placeholder {...props} title="Wiadomości" />} />
          <Route path="/departments" render={props => <Placeholder {...props} title="Departamenty" />} />
          <Route path="/toolbox" render={props => <Placeholder {...props} title="Niezbędnik" />} />
          <Route path="/announcements" render={props => <Placeholder {...props} title="Ogłoszenia" />} />
          <Route path="/sections" render={props => <Placeholder {...props} title="Sekcje" />} />
          <Route path="/terms" component={Terms} />

          <Footer data={this.state.companyData} />
        </div>
    </Router>
    );
  }
}

export default App;

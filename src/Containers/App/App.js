import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Terms from '../../Components/Terms/Terms';
import Placeholder from '../../Components/Placeholer/Placeholder';
import Toolbox from '../../Components/Toolbox/Toolbox';
import NotFound from '../../Components/NotFound/NotFound';

// styles
import classes from '../../Shared/styles.modules.scss';

// data
import toolboxData from '../../data/ToolboxData/toolboxData.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyData: {
        address: 'ul. Słoneczna 51/2, 02-528 Warszawa',
        krs: '00000000',
        regon: '00000000',
        nip: '00000000'
      },
      toolboxData,
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    let searchingText = event.target.input.value;

    if (searchingText.length > 3) {

      const state = [...this.state.toolboxData];
      let filteredCategories = state.filter(el => el.name.includes(searchingText) ? el : null);

      if (filteredCategories.length === 0) {
        filteredCategories = state.map(category => {
          category.links = category.links.filter(link => link.name.includes(searchingText));
          return category;
        })
        filteredCategories = filteredCategories.filter(category => category.links.length !==0);
      }
      this.setState({
        toolboxData: filteredCategories
      })
    }
  }

  render() {
    return (
      <Router>
        <div className={classes.containerFluid}>
          <Header submited={this.onSubmitHandler} />
          <AnimatedSwitch
            atEnter={{ offset: -100 }}
            atLeave={{ offset: 0 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `TranslateX(${styles.offset}vw)`,
            })}
          >
            <Route path="/" exact render={props => <Placeholder {...props} title="Home" />} />
            <Route path="/news" render={props => <Placeholder {...props} title="News" />} />
            <Route path="/departments" render={props => <Placeholder {...props} title="Departments" />} />
            <Route
              path="/toolbox"
              render={props => <Toolbox {...props} submited={this.onSubmitHandler} data={this.state.toolboxData} />}
            />
            <Route path="/announcements" render={props => <Placeholder {...props} title="Announcements" />} />
            <Route path="/sections" render={props => <Placeholder {...props} title="Sections" />} />
            <Route path="/terms" component={Terms} />
            <Route path="*" component={NotFound} />
          </ AnimatedSwitch>
          <Footer data={this.state.companyData} />
        </div>
      </Router>
    );
  }
}

export default App;

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
import initialState from '../../data/ToolboxData/toolboxData.json';


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
      initialState,
      toolboxData: [],
      searchBarExpanded: false
    }
  }

  componentDidMount = () => {
    this.setState({
      toolboxData: initialState
    })
  }
  onTransfromHandler = (event) => {
    event.preventDefault();
    let vpWidth = Math.max(document.body.clientWidth, window.innerWidth || 0);
    if (vpWidth < 992) {
      this.setState({
        searchBarExpanded: !this.state.searchBarExpanded
      })
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    let searchingText = event.target.input.value.toLowerCase();
    const state = [...this.state.initialState];

    if (searchingText.length > 3) {
      let data = [];
      // this filters via categories names
      let filteredNames = state.filter(el => el.name.toLowerCase().includes(searchingText) ? el : null);

      // this filters links in categories
      let filteredLinks = state.map(category => {
        const updatedLinks = category.links.filter(link => link.name.toLowerCase().includes(searchingText));
        return { ...category, links: updatedLinks };
      })

      // if doesn't found anything in categories names return results from searching via link name
      if (filteredNames.length === 0) {
        data = [...filteredLinks].filter(el => el.links.length !==0 )
      }

      // filter duplicates
      if (filteredNames.length !== 0) {
        let temp = filteredLinks.filter(el => !filteredNames.find(el2 => el.id === el2.id))
        data = [...filteredNames, ...temp].filter(el => el.links.length !== 0)
      }

      this.setState({
        toolboxData: data
      })

    } else if (searchingText.length === 0) {
      // I implemented this because I want to restore state when search bar is empty
      this.setState({
        toolboxData: initialState
      })
    }
  }

  render() {

    return (
      <Router>
        <div className={classes.containerFluid}>
          <Header submited={this.onTransfromHandler} expanded={this.state.searchBarExpanded} />
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
              render={props => <Toolbox {...props} expanded={true} submited={this.onSubmitHandler} data={this.state.toolboxData} />}
            />
            <Route path="/announcements" render={props => <Placeholder {...props} title="Announcements" />} />
            <Route path="/sections" render={props => <Placeholder {...props} title="Sections" />} />
            <Route path="/about" render={props => <Placeholder {...props} title="About" />} />
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

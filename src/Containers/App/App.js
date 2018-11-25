import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Terms from '../../Components/Terms/Terms';

import classes from '../../Shared/styles.modules.scss';
import Placeholder from '../../Components/Placeholer/Placeholder';
import Toolbox from '../../Components/Toolbox/Toolbox';

// icons
// I import hehe icons to put them into state, because I want to have proper paths to them in different builds
import tagIcon from '../../Assets/images/tag.svg';
import schoolIcon from '../../Assets/images/school.svg';
import suitcaseIcon from '../../Assets/images/suitcase.svg';
import documentIcon from '../../Assets/images/document.svg';
import bubbleIcon from '../../Assets/images/bubble.svg';

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
      toolboxData: [
        {
          id: '1',
          name: 'forums',
          iconUrl: bubbleIcon,
          links: [
            {
              id: '1a',
              name: 'development forum',
              url: 'https://google.pl'
            },
            {
              id: '1b',
              name: 'instalations forum',
              url: 'https://google.pl'
            },
            {
              id: '1c',
              name: 'instalations forum',
              url: 'https://google.pl'
            },
            {
              id: '1d',
              name: 'estates forum',
              url: 'https://google.pl'
            },
            {
              id: '1e',
              name: 'news forum',
              url: 'https://google.pl'
            }
          ]
        },
        {
          id: '2',
          name: 'resources O365',
          iconUrl: documentIcon,
          links: [
            {
              id: '2a',
              name: 'office apps',
              url: 'https://google.pl'
            },
            {
              id: '2b',
              name: 'one drive',
              url: 'https://google.pl'
            },
            {
              id: '2c',
              name: 'outlock',
              url: 'https://google.pl'
            },
            {
              id: '2d',
              name: 'sharepoint',
              url: 'https://google.pl'
            },
            {
              id: '2e',
              name: 'yammer',
              url: 'https://google.pl'
            }
          ]
        },
        {
          id: '3',
          name: 'projects',
          iconUrl: schoolIcon,
          links: [
            {
              id: '3a',
              name: 'offices',
              url: 'https://google.pl'
            },
            {
              id: '3b',
              name: 'market',
              url: 'https://google.pl'
            },
            {
              id: '3c',
              name: 'hotels',
              url: 'https://google.pl'
            },
            {
              id: '3d',
              name: 'culture',
              url: 'https://google.pl'
            },
            {
              id: '3e',
              name: 'apartments',
              url: 'https://google.pl'
            },
            {
              id: '3f',
              name: 'industry',
              url: 'https://google.pl'
            },
            {
              id: '3g',
              name: 'sport',
              url: 'https://google.pl'
            }
          ]
        },
        {
          id: '4',
          name: 'society',
          iconUrl: suitcaseIcon,
          links: [
            {
              id: '4a',
              name: 'lorem ipsum',
              url: 'https://google.pl'
            }
          ]
        },
        {
          id: '5',
          name: 'important',
          iconUrl: tagIcon,
          links: [
            {
              id: '5a',
              name: 'announcements',
              url: 'https://google.pl'
            }
          ]
        }
      ]
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

          <Footer data={this.state.companyData} />
        </div>
    </Router>
    );
  }
}

export default App;

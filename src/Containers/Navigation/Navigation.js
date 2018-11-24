import React, { Component } from 'react';

import Toggler from '../../Components/Toggler/Toggler';
import Navbar from '../../Components/Navbar/Navbar';

import classes from './Navigation.module.scss';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      togglerOn: false,
      links: [
        {
          name: 'Home',
          target: '/'
        },
        {
          name: 'News',
          target: '/news'
        },
        {
          name: 'Departments',
          target: '/departments'
        },
        {
          name: 'Toolbox',
          target: '/toolbox'
        },
        {
          name: 'Announcements',
          target: '/announcements'
        },
        {
          name: 'Sections',
          target: '/sections'
        }
      ]
    }
  }

  toggleNavbarhandler = () => {
    this.setState({ togglerOn: !this.state.togglerOn})
  }

  render() {
    return (
      <nav className={classes.nav}>
        <Toggler toggle={this.toggleNavbarhandler} toggled={this.state.togglerOn} />
        <Navbar toggled={this.state.togglerOn} links={this.state.links} />
      </nav>
    );
  }
}

export default Navigation;
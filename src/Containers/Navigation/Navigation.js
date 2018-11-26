import React, { Component } from 'react';

import Toggler from '../../Components/Toggler/Toggler';
import Navbar from '../../Components/Navbar/Navbar';
// data
import links from '../../data/Navigation/navigation.json';

import classes from './Navigation.module.scss';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      togglerOn: false,
      links
    }
  }

  toggleNavbarhandler = () => {
    this.setState({ togglerOn: !this.state.togglerOn})
  }

  render() {
    return (
      <nav className={classes.nav}>
        <Navbar toggled={this.state.togglerOn} links={this.state.links} />
        <Toggler toggle={this.toggleNavbarhandler} toggled={this.state.togglerOn} />
      </nav>
    );
  }
}

export default Navigation;
import React, { Component } from 'react';
import { Fa, Navbar, Container, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Account from './Account'
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color={"bg-default"} expand="md" fixed="top" className="p-3">
          <Container>
            <NavbarBrand href="/">
              <strong>Ganesh Navale</strong>
            </NavbarBrand>
            { <NavbarToggler onClick = { this.onClick } />}
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav right>
                <NavItem active>
                  <NavLink to="/"><Fa icon="home"/>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/blog">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact"><Fa icon="address-book"/>Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/account"><Fa icon="user"/>Account</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
        <Switch>
          <div className="background mt-70">
            <Route exact path='/' component={Home}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/account' component={Account}/>
          </div>
        </Switch>
      </div>
    );
  }
}

export default NavBar;
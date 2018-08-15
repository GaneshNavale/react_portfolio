import React, { Component } from 'react';
import { Fa, Navbar, Container, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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
      <Router>
        <Navbar dark color="bg-default" expand="md" fixed="top" className="p-3">
          <Container>
            <NavbarBrand href="/">
              <strong>Ganesh Navale</strong>
            </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="#"><Fa icon="home"/>Home</NavLink>
                  
                </NavItem>
                <NavItem active>
                  <NavLink to="#">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><Fa icon="address-book"/>Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><Fa icon="user"/>Account</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </Router>
    );
  }
}

export default NavBar;
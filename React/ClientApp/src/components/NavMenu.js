import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-black border-bottom box-shadow mb-3 bg-dark text-white">
          <Container>
                    <NavbarBrand tag={Link} className="text-white" to="/">React</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav">
              
                <NavItem>
                                <NavLink tag={Link} className="text-white" to="/customer">Customer</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="text-white" to="/product">Product</NavLink>
                 </NavItem>
                 <NavItem>
                                <NavLink tag={Link} className="text-white" to="/store">Store</NavLink>
                 </NavItem>
                 <NavItem>
                                <NavLink tag={Link} className="text-white" to="/sales">Sales</NavLink>
                 </NavItem>
                            
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

import React, { Component } from 'react'
import { Menu, Grid, Segment } from 'semantic-ui-react'

export class NavMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (

            <Segment inverted >  

                <Menu inverted pointing secondary>
                    <Menu.Item
                        as='a' href='#' exact to="/" name="React" activeclassname="React"  onClick={this.handleItemClick} >
                   
                    </Menu.Item>

                    <Menu.Item as='a' href='Customer' name="Customer" activeclassname="Customer" onClick={this.handleItemClick} 
          
                >
                    Customer
        </Menu.Item>
                    <Menu.Item as='a' href='Product' name="Product" activeclassname="Product" onClick={this.handleItemClick}            
                >
                    Product
                </Menu.Item>

                    <Menu.Item as='a' href='Sales' name="Sales" activeclassname="Sales" onClick={this.handleItemClick}        
            >
                Sales
             </Menu.Item>
                    <Menu.Item as='a' href='Store' name="Store" activeclassname="Store" onClick={this.handleItemClick}             
                >
                    Store
             </Menu.Item>
                </Menu >
            </Segment>     
        )
    }
}


















/*import React, { Component } from 'react';
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
}*/

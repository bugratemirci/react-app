import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom'
import CartSummary from './CartSummary';

export default class Navi extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link to="/form1/">Form Page</Link>
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink>
                                    <Link to="/form2/">Register</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/bugratemirci">GitHub</NavLink>
                            </NavItem>
                            <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart} />
                        </Nav>
                        <NavbarText>Northwind</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
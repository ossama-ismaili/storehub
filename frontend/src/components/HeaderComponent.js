import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function Header() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return(
    <div className='App-header'>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/home" className="text-primary"><strong><span className="fa fa-shopping-bag"></span> StoreHub</strong></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem  className="ml-4">
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem  className="ml-4">
                        <NavLink href="/aboutus">About Us</NavLink>
                    </NavItem>
                    <NavItem  className="ml-4">
                        <NavLink href="/products">Products</NavLink>
                    </NavItem>
                    <NavItem  className="ml-4">
                        <NavLink href="/cart">Cart</NavLink>
                    </NavItem>
                    <NavItem  className="ml-4">
                        <NavLink href="/contactus">Contact Us</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    );
}

export default Header;

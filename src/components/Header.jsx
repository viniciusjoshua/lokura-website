import { Nav, Navbar, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export function Header ( props ) {
    return (
        <><h1>{props.text}</h1><NavbarToggle aria-controls='main-nav' />
        <Navbar.Collapse id="main-nav">
            <Nav>
                <Nav.link href="/">Home</Nav.link>
                <Nav.Link href="/wines">wines</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/login">Sign in</Nav.Link>
                <Nav.Link href="/register">Sign up</Nav.Link>
            </Nav>
        </Navbar.Collapse>
                
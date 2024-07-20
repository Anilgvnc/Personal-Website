import { Outlet, Link } from "react-router-dom";
import { HiMiniCommandLine } from "react-icons/hi2";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//NavBar

import './Router.css';

const Router = () => {
    return (
        <>
            <nav>
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to="/"><HiMiniCommandLine /> anilgvnc</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link to="/AboutMe">About Me</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/Projects">Projects</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/Contact">Contact me</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
            <Outlet />
        </>
    )
};

export default Router;
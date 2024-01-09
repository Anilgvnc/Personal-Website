import { Outlet, Link } from "react-router-dom";
//NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Router.css';

const Router = () => {
    return (
        <>
            <nav>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to="/">Kemal Anıl Güvenç</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Menu"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="/">
                                        Home
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/Accounts">
                                        Accounts
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/Projects">
                                        Projects
                                    </NavDropdown.Item>
                                </NavDropdown>
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
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar () {
    return (
        <nav className="clearfix">
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href='/'  className="me-2 p-2 rounded " >Fitness Tracker App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link as={NavLink} to={'/'} activeclassname='active' className="me-2 p-2 rounded ">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to={'/exercises'} activeclassname='active' className="me-2 p-2 rounded ">
                        Exercises
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}
export default NavigationBar;
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar () {
    return (
        <nav className="clearfix">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href='/' className='p-2' >Fitness Tracker App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link as={NavLink} to={'/'} activeclassname='active'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to={'/exercises'} activeclassname='active'>
                        Exercises
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}
export default NavigationBar;
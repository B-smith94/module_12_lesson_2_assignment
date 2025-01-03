import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";

function Home () {
    return (
        <>
            <h1>Fitness Tracker App</h1>
            <p>Welcome to the Fitness Tracker App!</p>
            <Nav.Link as={Link} to='/exercises' className='mb-2'>
                <Button>Click Here to Get Started!</Button>
            </Nav.Link>
        </>
    )
}

export default Home;
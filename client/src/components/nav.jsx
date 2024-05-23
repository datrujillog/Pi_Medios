import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';


function Headercomponet() {
    return (
        <>
            <Navbar expand="lg" className="bg-danger">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Nav.Link ><Link className='nav-link' to="product">Aministrar los productos</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-link' to="user">Aministrar los usuarios</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-link' to="sales">Administrar las ventas</Link></Nav.Link>                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            {/* <Container> */}
                <Outlet />
            {/* </Container> */}

        </>

    );
}

export default Headercomponet;
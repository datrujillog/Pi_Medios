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
            {/* // <Navbar expand="lg" className="bg-body-tertiary"> */}
            <Navbar expand="lg" className="bg-danger">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link className='nav-link' href="/">Home</Nav.Link> */}
                            {/* <Nav.Link href="settings">Settings</Nav.Link> */}
                            {/* <Nav.Link href="profile">Profile</Nav.Link>  */}
                             {/* <Nav.Link href="profile">User</Nav.Link> */}

                            {/* <Nav.Link ><Link className='nav-link' to="/">Home</Link></Nav.Link>                             */}
                            <Nav.Link ><Link className='nav-link' to="product">Aministrar los productos</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-link' to="user">Aministrar los usuarios</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-link' to="sales">Administrar las ventas</Link></Nav.Link>                            
                            {/* <Nav.Link ><Link className='nav-link' to="profile">Profile</Link></Nav.Link> */}


                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
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
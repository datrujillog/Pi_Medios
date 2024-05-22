import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




export const ProductManager = () => {
    const [users, setUsers] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newUser, setNewUser] = useState(null);


    const getProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/products/list', {
                headers: {
                    'Auth': '7e3224dd-6530-485a-a4a4-9d342bc30c76',
                }
            });
            setUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);



    //modal create user

    const hadleCreate = () => {
        setNewUser({ id: '', name: '', description: '', price: '' });
        setShowCreateModal(true);
    };


    const handleCreateInputChange = (event) => {
        if (newUser) {
            setNewUser({
                ...newUser,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleCreateUser = async () => {
        if (newUser) {

            await axios.post('http://localhost:5000/api/v1/products/create',
                newUser,
                {
                    headers: {
                        'Auth': '7e3224dd-6530-485a-a4a4-9d342bc30c76', //employee
                        // 'Auth': 'abcda0dc-74fd-4e3c-8316-a3df6f5071a6', //admin
                    }
                }
            ).then((response) => {
                console.log('response', response);
                getProduct();
                setNewUser(null);
            }).catch((error) => {
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title: 'Error',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
            setShowCreateModal(false);
        }
    };



    return (
        <>

            <Container className='mt-4'>
                <div>ProductManager</div>
                <Row>
                    <Col lg={8} xs={12} className='mx-auto'>
                        <Table striped bordered hover variant="" >

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>description</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((product, index) => (
                                    <tr
                                        key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>$ {product.price}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    </Col>
                    <button className='btn btn-success ' style={{ marginRight: '10px' }} onClick={() => hadleCreate()}>Create</button>

                    <button className='btn btn-primary my-4 ' style={{ marginRight: '10px' }} onClick={getProduct}>Reload</button>
                </Row>


            </Container>

            {/* Modal para crear usuario */}

            <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleCreateInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" name="description" onChange={handleCreateInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="text" placeholder="Enter price" name="price" onChange={handleCreateInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreateUser}>
                        Create Usercghjf
                    </Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}

export default ProductManager

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
import { UserAmin, UserEmployee } from './api/api';



export const SalesManager = () => {
    const [sales, setSales] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newSales, setNewSales] = useState(null);




    const getSales = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/sales/list', {
                headers: {
                    'Auth': UserEmployee,
                }
            });
            setSales(response.data.data);
        } catch (error) {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: 'Error',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })

            console.log(error);
        }
    }

    useEffect(() => {
        getSales();
    }, []);



    //modal create user

    const hadleCreate = () => {
        setNewSales({ id: '', name: '', description: '', price: '' });
        setShowCreateModal(true);
    };


    const handleCreateInputChange = (event) => {
        if (newSales) {
            setNewSales({
                ...newSales,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleCreateUser = async () => {
        if (newSales) {

            await axios.post('http://localhost:5000/api/v1/sales/create',
                newSales,
                {
                    headers: {
                        'Auth': UserEmployee, //employee
                        // 'Auth': userAdmin
                    }
                }
            ).then((response) => {
                console.log('response', response);
                getSales();
                setNewSales(null);
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
                <Row>
                    <Col lg={8} xs={12} className='mx-auto'>
                        <h1 >Sales Manager</h1>
                        <Table className='mt-4' striped bordered hover variant="" >

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Productos</th>
                                    <th>Cantidad</th>
                                    <th>Fecha</th>
                                    <th>precio</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {sales.map((sale, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{sale.product.name}</td>
                                        <td>{sale.qty}</td>
                                        <td>{sale.saleAt}</td>
                                        <td>{sale.product.price}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    </Col>
                    <button className='btn btn-success ' style={{ marginRight: '10px' }} onClick={() => hadleCreate()}>Create</button>

                    <button className='btn btn-primary my-4 ' style={{ marginRight: '10px' }} onClick={getSales}>Reload</button>
                </Row>


            </Container>

            {/* Modal para crear usuario */}

            <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create productos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>productId</Form.Label>
                            <Form.Control type="text" placeholder="Enter productId" name="productId" onChange={handleCreateInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>usersId</Form.Label>
                            <Form.Control type="text" placeholder="Enter usersId" name="usersId" onChange={handleCreateInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>qty</Form.Label>
                            <Form.Control type="text" placeholder="Enter qty" name="qty" onChange={handleCreateInputChange} />
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

export default SalesManager

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';




export const ProductManager = () => {
    const [users, setUsers] = useState([]);




   const getProduct = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/products/list', {
            headers: {
                'Auth': 'abcda0dc-74fd-4e3c-8316-a3df6f5071a6',
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


    return (
        <>
            <div>ProductManager</div>

            <Container className='mt-4'>
                <Row>
                    <Col lg={8} xs={12} className='mx-auto'>
                        <Table striped bordered hover variant="" >

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>description</th>
                                    <th>price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((product, index) => (
                                    <tr
                                        key={index}
                                    onClick={() => handleRowClick(index)}
                                    style={{
                                        backgroundColor: selectedRow === index ? '#f1f1f1' : 'transparent',
                                        cursor: 'pointer',
                                        boxShadow: selectedRow === index ? '0 0 10px #000' : 'none',
                                    }}
                                    >
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            {/* <button className='btn btn-warning ' style={{ marginRight: '10px' }} >Edit</button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    </Col>
                    <button className='btn btn-success ' style={{ marginRight: '10px' }}>Create</button>
                    <button className='btn btn-primary my-4 ' style={{ marginRight: '10px' }}>Reload</button>
                </Row>


            </Container>
        </>


    )
}

export default ProductManager

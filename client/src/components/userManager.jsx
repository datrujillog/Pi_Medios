import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import UserAmin from './api/api';



export const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newUser, setNewUser] = useState(null);

  const [showAssigRoleModal, setShowAssigRoleModal] = useState(false);
  const [newRole, setNewRole] = useState(null);





  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/users/list', {
        headers: {
          'Auth': UserAmin,
        }
      });
      console.log('response', response.data.data);
      setUsers(response.data.data);
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
    getUsers();
  }, []);

  //modal assign role

  const hadleAssigRole = () => {
    setNewRole({ id: '', userId: '', roleId: '' });
    setShowAssigRoleModal(true);
  };


  const handleAssigRoleInputChange = (event) => {
    if (newRole) {
      setNewRole({
        ...newRole,
        [event.target.name]: event.target.value,
      });
    }
  };


  const handleAssigRole = async () => {
    if (newRole) {
      await axios.put('http://localhost:5000/api/v1/roles/assignUser',
        newRole,
        {
          headers: {
            'Auth': UserAmin
          }
        }
      ).then((response) => {
        console.log('response', response);
        getUsers();
        setNewRole(null);
      }).catch((error) => {
        console.log('error', error);
        const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: 'Error',
          text: error.response.data.message || error.response.data,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
      setShowCreateModal(false);
    }
  };







  //modal create user

  const hadleCreate = () => {
    setNewUser({ id: '', name: '', lastName: '', document: '', rolesId: '' });
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

      await axios.post('http://localhost:5000/api/v1/users/create',
        newUser,
        {
          headers: {
            'Auth': UserAmin
          }
        }
      ).then((response) => {
        console.log('response', response);
        getUsers();
        setNewUser(null);
      }).catch((error) => {
        console.log('error', error);
        const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: 'Error',
          text: error.response.data.message || error.response.data,
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
            <h1>User Manager</h1>
            <Table className='mt-4' striped bordered hover variant="" >

              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Document</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.document}</td>
                    <td>{user.roles.name}</td>

                  </tr>
                ))}
              </tbody>

            </Table>
          </Col>
          <button className='btn btn-success ' style={{ marginRight: '10px' }} onClick={() => hadleCreate()}>Create</button>

          <button className='btn btn-success mt-4 ' style={{ marginRight: '10px' }} onClick={() => hadleAssigRole()}>Assignar Role</button>

          <button className='btn btn-primary my-4 ' style={{ marginRight: '10px' }} onClick={getUsers}>Reload</button>
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

            <Form.Group controlId="formUserlastNanme">
              <Form.Label>lastName</Form.Label>
              <Form.Control type="text" placeholder="Enter lastName" name="lastName" onChange={handleCreateInputChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>document</Form.Label>
              <Form.Control type="text" placeholder="Enter document" name="document" onChange={handleCreateInputChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" name="rolesId" onChange={handleCreateInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateUser}>
            Create Users
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Modal para asignar roles */}

      <Modal show={showAssigRoleModal} onHide={() => setShowAssigRoleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Asignar Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUserId">
              <Form.Label>user</Form.Label>
              <Form.Control type="text" placeholder="Enter userId" name="userId" onChange={handleAssigRoleInputChange} />
            </Form.Group>

            <Form.Group controlId="formRoleId">
              <Form.Label>roleId</Form.Label>
              <Form.Control type="text" placeholder="Enter roleId" name="roleId" onChange={handleAssigRoleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAssigRoleModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAssigRole}>
            Asignar Role
          </Button>
        </Modal.Footer>
      </Modal>
    </>


  )
}

export default UserManager

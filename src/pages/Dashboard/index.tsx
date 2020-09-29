/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Table, Button, Pagination } from 'react-bootstrap';
import api from '../../services/api';
import { Container, Title } from './styles';




interface IUsers {
  id: number;
  name: string;
  age: string;
  cpf: string;
  maritalStatus: string;
  city: string;
  state: string;
}

const Dashboard: React.FC = () => {
  const [users, setusers] = useState<IUsers[]>([])
  const history = useHistory()

  useEffect(() => {
    loadUsers()
  }, [])



  async function loadUsers() {
    const response = await api.get('/users')
    setusers(response.data)
  }

  function addUser() {
    history.push('/registration')
  }

  function editUser(id: number) {
    history.push(`/registration/${id}`)
    loadUsers()
  }

  async function deleteUser(id: number) {
    await api.delete(`/users/${id}`)
    loadUsers()
  }



  return (
    <>
      <Container>

        <div className="container">
          <br />
          <Title>
            <h1>Usuários Cadastrados</h1>
            <Button className="btn btn-success" size="sm" onClick={addUser}>Adicionar</Button>
            <Button className="btn btn-success" size="sm" onClick={addUser}>Adicionar</Button>
          </Title>
          <br />

          <Table striped bordered hover size="sm">

            <thead >
              <tr >
                <th>Nome</th>
                <th>Idade</th>
                <th>Estado Civil</th>
                <th>CPF</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Ações</th>

              </tr>
            </thead>

            <tbody>
              {
                users.map(user =>
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.maritalStatus}</td>
                    <td>{user.cpf}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>
                      <Button size="sm" className="btn btn-warning" onClick={() => editUser(user.id)} >Editar</Button>{'  '}
                      <Button size="sm" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Excluir</Button>
                    </td>
                  </tr>

                )
              }
            </tbody>
          </Table>


        </div >

      </Container>
    </>
  )
}

export default Dashboard;

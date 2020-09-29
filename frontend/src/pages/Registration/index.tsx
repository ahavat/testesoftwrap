import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api';
import { useParams, useHistory } from 'react-router-dom';
import { Container } from './styles';

interface IUsers {
  name: string;
  age: string;
  cpf: string;
  maritalStatus: string;
  city: string;
  state: string;
}


const Registration: React.FC = () => {
  const history = useHistory()
  const { id } = useParams()

  const [model, setModel] = useState<IUsers>({
    name: '',
    age: '',
    cpf: '',
    maritalStatus: '',
    city: '',
    state: '',
  })
  useEffect(() => {
    if (id !== undefined) {
      findUser(id)
    }
  }, [id])

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (id !== undefined) {
      await api.put(`/users/${id}`, model)

    } else {
      await api.post('/users', model)
    }
  }
  async function findUser(id: string) {
    const response = await api.get(`/users/${id}`)
    setModel({
      name: response.data.name,
      age: response.data.age,
      maritalStatus: response.data.maritalStatus,
      cpf: response.data.cpf,
      city: response.data.city,
      state: response.data.state,
    })
  }
  function userTable() {
    history.push('/')
  }
  return (
    <>
      <div className="container">
        <Container>
          <h1>Cadastro Usuário</h1>
          <Button className="btn btn-success" onClick={userTable}>voltar</Button>
        </Container>
      </div>
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group >
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={model.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>

          <Form.Group >
            <Form.Label>Idade</Form.Label>
            <Form.Control type="text"
              name="age"
              value={model.age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>

          <Form.Group >
            <Form.Label>Estado Civil</Form.Label>
            <Form.Control type="text"
              name="maritalStatus"
              value={model.maritalStatus}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>

          <Form.Group >
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: 123.456.789-12"
              name="cpf"
              value={model.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cidade"
              name="city"
              value={model.city}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              placeholder="Estado"
              name="state"
              value={model.state}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Adicionar
            </Button>
        </Form>
      </div>
    </>
  )
}

export default Registration;
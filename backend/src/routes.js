const express = require('express');


const UserController = require('./controller/UserController')

const routes = express.Router();

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.query)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)



module.exports = routes;
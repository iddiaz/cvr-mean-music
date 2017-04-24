'use strict'

const express = require('express');
const UserController = require('./../controllers/user.controller');

const api = express.Router();

api.get('/prueba-controlador', UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;
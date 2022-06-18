const cors = require('cors');
const express = require('express');
const Modulo = require('./app/model/modulo');
const User = require('./app/model/user');
const Perfil = require('./app/model/perfil');
var mysql = require('mysql');
const database = require('./app/controllers/db');

const app = express()
app.use(cors('*'))

async function createTables() {

    // await User.createTable();
    // await Modulo.createTable();
    // await Perfil.createTable();
}

function adicionarUsuario() {
    novoUser = new User(null, 'eduardo', 'etst123', true);
    User.adicionarUsuario(novoUser);
}

function deleteUser() {
    User.deleteUser(2);
}

function updateUser() {
    user = new User(3, 'Eduardo', 'SenhaDele', true);
    User.updateUser(user);
}

function getUsers() {
    User.getUser();
}

getUsers();
const e = require('cors');
var mysql = require('mysql');
const Modulo = require('./model/modulo');
const Perfil = require('./model/perfil');
const User = require('./model/user');

var servCon = mysql.createConnection({
    host: "localhost",
    user: "silveirael",
    password: "Test@123",
});

var dbCon = mysql.createConnection({
    host: "localhost",
    user: "silveirael",
    password: "Test@123",
    database: "myDbTest"
})


servCon.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    createDatabase(servCon, 'myDbTest');
});

function createDatabase(connection, nome) {
    connection.query(`create database ${nome}`, function (err, result) {
        if (err) throw err;
        if (result) console.log(result);
        console.log("Database created");
    });
}


function createTable(connection, nome, colunas) {
    sqlColunas = converterColunas(colunas);
    connection.query(`create table ${nome} ${sqlColunas}`, function (err, res) {
        if (err) throw err;
        if (result) console.log(result);
        console.log(`Tabela ${nome} criada com sucesso`);
    });
}

function converterColunas(colunas) {
    colunas.forEach(prop => {
        if (this.sqltext == '' || this.sqltext == undefined) this.sqltext = '(';
        else this.sqltext += ', ';
        this.sqltext += `${prop.key} ${prop.value} ${prop.autoIncrement ? ' AUTO_INCREMENT' : ''} ${prop.pk ? ' PRIMARY KEY' : ''}`;
    });
    this.sqltext += ')';
    return this.sqltext;
}

dbCon.connect(function (err) {
    if (err) throw err;
    dbCon.query("Insert into user (username, password, ativo) values ('dizeritus', 'test321', FALSE)",
        (err, success) => {
            if (err) throw err;
            console.log(success);
        })
})


// dbCon.query(`CREATE TABLE USER (ID INT AUTO_INCREMENT PRIMARY KEY, USERNAME VARCHAR(255))`
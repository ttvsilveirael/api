const cors = require('cors');
const express = require('express');
const Modulo = require('./app/model/modulo');
const User = require('./app/model/user');

const app = express()
app.use(cors('*'))

User.createUserTable();
Modulo.createModuloTable();

// createDatabase();

// app.get('/', (req, res) => {
//     console.log(u);
// })

// app.listen(5000, () => console.log('Runing'))

// user = new User();

// propriedades = user.getDbObject();

// propriedades.forEach(prop => {
//     if (this.sqltext == '' || this.sqltext == undefined) this.sqltext = '(';
//     else this.sqltext += ', ';
//     this.sqltext += `${prop.key} ${prop.value} ${prop.autoIncrement ? ' AUTO_INCREMENT' : ''} ${prop.pk ? ' PRIMARY KEY' : ''}`;
// });
// this.sqltext += ')';

// console.log(this.sqltext);

// "(ID INT AUTO_INCREMENT PRIMARY KEY, USERNAME VARCHAR(255), PASSWORD VARCHAR(255), ATIVO BOOLEAN )"
// "(ID INT AUTO_INCREMENT PRIMARY KEY, USERNAME VARCHAR(255), PASSWORD VARCHAR(255), ATIVO BOOLEAN )"
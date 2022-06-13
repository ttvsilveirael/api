const cors = require('cors');
const express = require('express');
const User = require('./model/user');

const app = express()
app.use(cors('*'))

// app.get('/', (req, res) => {
//     console.log(u);
// })

// app.listen(5000, () => console.log('Runing'))

user = new User('1', 'silveirael', 'test123', true);

console.log(user.alterarUsername('dizeritus'));  
console.log(user.pegarUsuario());

console.log(user);
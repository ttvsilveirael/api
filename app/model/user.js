const database = require("../controllers/db");
const dbObject = require("./dbObject");

class User {
    id;
    username;
    password;
    ativo;

    constructor(id, username, password, ativo) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.ativo = ativo;
    }

    /**
     * Retorna as colunas do model user como dbObject
    */
    static getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('USERNAME', 'VARCHAR(255)', false, false),
            new dbObject('PASSWORD', 'VARCHAR(255)', false, false),
            new dbObject('ATIVO', 'BOOLEAN', false, false)
        ];
    }

    static createTable() {
        return database.createTable('user', User.getDbObject());
    }

    static adicionarUsuario(novoUsuario) {
        database.insert('user', 'username, password, ativo', `'${novoUsuario.username}', '${novoUsuario.password}', ${novoUsuario.ativo}`);
    }

    static deleteUser(id) {
        database.delete('user', id);
    }

    static updateUser(user) {
        database.update('user', `username = '${user.username}', password = '${user.password}', ativo = ${user.ativo}`, `ID = ${user.id}`);
    }

    static getUser() {
        database.get('user');
    }
}

module.exports = User
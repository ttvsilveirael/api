const database = require("../controllers/db");
const dbObject = require("./dbObject");

class Perfil {
    id;
    user;
    nome;
    sobrenome;
    nasc;
    email;
    image;

    constructor(id, user, nome, sobrenome, nasc, email, image) {
        this.id = id;
        this.user = user;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nasc = nasc;
        this.email = email;
        this.image = image;
    }

    static getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('NOME', 'VARCHAR(100)', false, false),
            new dbObject('SOBRENOME', 'VARCHAR(100)', false, false),
            new dbObject('NASC', 'DATE', false, false),
            new dbObject('EMAIL', 'VARCHAR(255)', false, false),
            new dbObject('IMAGE', 'BLOB', false, false),
            new dbObject('USERID', 'INT', false, false, 'ID', 'USER')
        ];
    }

    static createTable() {
        database.createTable('perfil', Perfil.getDbObject());
    }
}

module.exports = Perfil
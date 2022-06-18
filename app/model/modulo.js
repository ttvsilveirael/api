const database = require("../controllers/db");
const dbObject = require("./dbObject");

class Modulo {
    id;
    nome;

    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }

    /**
    * Retorna as colunas do model user como dbObject
   */
    static getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('NOME', 'VARCHAR(255)', false, false)
        ];
    }

    static createTable() {
        database.createTable('modulo', Modulo.getDbObject())
    }
}

module.exports = Modulo
const dbObject = require("../controllers/db");

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

    getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('USER', 'VARCHAR(255)', false, false),
            new dbObject('NOME', 'VARCHAR(255)', false, false),
            new dbObject('SOBRENOME', 'BOOLEAN', false, false)
        ];
    }
}

module.exports = Perfil

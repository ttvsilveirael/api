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

    getDbObject() {
        return [
            new dbObject('ID', 'INT', true, true),
            new dbObject('USERNAME', 'VARCHAR(255)', false, false),
            new dbObject('PASSWORD', 'VARCHAR(255)', false, false),
            new dbObject('ATIVO', 'BOOLEAN', false, false)
        ];
    }
}

module.exports = User

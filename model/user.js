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

    pegarUsuario(){
        return `O usuario eh ${this.username}`;
    }

    alterarUsername(novoUsername){
        console.log(`O usuario atual eh ${this.username} e o novo sera ${novoUsername}`);
        this.username = novoUsername;
        
        return(`Usuario alterado para ${this.username}`);
    }

}

module.exports = User

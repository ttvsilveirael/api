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
}

module.exports = Perfil

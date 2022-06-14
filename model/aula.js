class Aula {
    id;
    nome;
    descricao;
    modulo;
    links;
    next;
    last;
    nivel;
    requisito;
    twitch;
    youtube;
    status;
    lastChange;
    created;

    constructor(id, nome, descricao, modulo, links,
        nivel, requisito, twitch = null, youtube = null,
        status = 'A') {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.modulo = modulo;
        this.links = links;
        this.nivel = nivel;
        this.requisito = requisito;
        this.twitch = twitch;
        this.youtube = youtube;
        this.status = status;
        this.lastChange = Date.now();
        this.created = Date.now();
    }

    set nome(value) {
        this.nome = value;
        this.lastChange = Date.now();
    }
}

module.exports = Aula
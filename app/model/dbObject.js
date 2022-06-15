class dbObject {
    key;
    value;
    autoIncrement;
    pk;

    /**
     * Cria tabela no banco utilizando a funcao convertercolunas
     *
     * @param key Nome da coluna no banco de dados
     * @param value Tipo de dado (INT, VARCHAR(255), BOOLEAN) 
     * @param autoIncrement Valor setado automaticamente ao criar 
     * @param pk Se a coluna for uma chave primária 
    */
    constructor(key, value, autoIncrement = false, pk = null) {
        this.key = key;
        this.value = value;
        this.autoIncrement = autoIncrement;
        this.pk = pk;
    }
}

module.exports = dbObject;
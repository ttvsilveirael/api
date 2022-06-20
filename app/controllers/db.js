const e = require('cors');
const bluebird = require('bluebird');
const mysql = require('mysql2/promise');

class database {
    //Cria conexão do banco de dados com db definido
    //Cria o banco de dados com a conexão padrão
    static createDatabase(nome) {
        var servCon = mysql.createConnection({
            host: "localhost",
            user: "silveirael",
            password: "Test@123",
        });

        servCon.query(`create database ${nome ?? slpDB}`, function (err, result) {
            if (err) throw err;
            if (result) console.log(result);
            console.log("Database created");
        });
    }

    /**
     * Cria tabela no banco utilizando a funcao convertercolunas
     *
     * @param nome Nome da tabela
     * @param colunas Colunas em formato dbObject 
    */
    static createTable(nome, colunas) {
        let dbCon = mysql.createConnection({
            host: "localhost",
            user: "silveirael",
            password: "Test@123",
            database: "slpDB"
        })

        let sqlColunas = this.converterColunas(colunas);
        dbCon.query(`create table ${nome} ${sqlColunas}`, function (err, result) {
            if (err) throw err;
            if (result) console.log(result);
            console.log(`Tabela ${nome} criada com sucesso`);
        });
    }

    /**
     * Cria uma string a partir do objeto dbObject para nova tabela no banco.
     *
     * @param colunas Colunas em formato dbObject 
    */
    static converterColunas(colunas) {
        // For Each === Para Cada
        colunas.forEach(coluna => {
            if (this.sqltext == '' || this.sqltext == undefined) this.sqltext = '(';
            else this.sqltext += ', ';

            this.sqltext += `${coluna.key} ${coluna.value}`;

            if (coluna.autoIncrement) {
                this.sqltext += ' AUTO_INCREMENT';
            }
            if (coluna.pk) {
                this.sqltext += ' PRIMARY KEY';
            }
            if (coluna.fk != null) {
                this.sqltext += `, FOREIGN KEY (${coluna.key}) REFERENCES ${coluna.nomeTabela}(${coluna.fk})`;
            }
        });
        this.sqltext += ')';

        return this.sqltext;
    }

    static async insert(tabela, colunas, values) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "slpDB",
            Promise: bluebird
        });
        const [rows, fields] = await connection.query(`insert into ${tabela} (${colunas}) values (${values})`);
        return "Usuario adicionado com sucesso"
    }

    static async delete(tabela, id) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "slpDB",
            Promise: bluebird
        });
        const [rows, fields] = await connection.execute(`delete from ${tabela} where id = ${id}`)
        return `Usuario deletado com sucesso.`
    }

    /**
     * Cria uma string a partir do objeto dbObject para nova tabela no banco.
     *
     * @param valores Valores devem vir no formato 'key=value, key2=value2' 
    */
    static async update(tabela, valores, condicao) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "slpDB",
            Promise: bluebird
        });
        const [rows, fields] = await connection.execute(`UPDATE ${tabela} SET ${valores} WHERE ${condicao};`);
        return `Usuario atualizado com sucesso`;
    }

    static async get(tabela, id) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "Test@123",
            database: "slpDB",
            Promise: bluebird
        });
        const [rows, fields] = await connection.execute(`SELECT * FROM ${tabela} ${id != null ? 'WHERE ID = ' + id : ''}`);
        return rows;
    }
}

module.exports = database;
const e = require('cors');
var mysql = require('mysql');
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

    static insert(tabela, colunas, values) {
        let dbCon = mysql.createConnection({
            host: "localhost",
            user: "silveirael",
            password: "Test@123",
            database: "slpDB"
        });
        dbCon.query(`insert into ${tabela} (${colunas}) values (${values})`,
            (err, resp) => {
                if (err) throw err;
                if (resp) console.log(resp);
                console.log(`Valores inseridos na tabela ${tabela}`);
            });


    }

    static delete(tabela, id) {
        let dbCon = mysql.createConnection({
            host: "localhost",
            user: "silveirael",
            password: "Test@123",
            database: "slpDB"
        });
        dbCon.query(`delete from ${tabela} where id = ${id}`,
            (err, resp) => {
                if (err) throw err;
                if (resp) console.log(resp);
                console.log(`Objeto removido na tabela ${tabela} com id ${id}`);
            });
    }

    /**
     * Cria uma string a partir do objeto dbObject para nova tabela no banco.
     *
     * @param valores Valores devem vir no formato 'key=value, key2=value2' 
    */
    static update(tabela, valores, condicao) {
        let dbCon = mysql.createConnection({
            host: "localhost",
            user: "silveirael",
            password: "Test@123",
            database: "slpDB"
        });
        dbCon.query(`UPDATE ${tabela} SET ${valores} WHERE ${condicao};`,
            (err, resp) => {
                if (err) throw err;
                if (resp) console.log(resp);
                console.log(`Objeto atualizado na tabela ${tabela}`);
            });
    }

    static get(tabela) {
        let dbCon = mysql.createConnection({
            host: "localhost",
            user: "silveirael",
            password: "Test@123",
            database: "slpDB"
        });
        dbCon.query(`SELECT * FROM ${tabela}`,
            (err, resp) => {
                if (err) throw err;
                if (resp) { console.log(resp); console.table(resp) }
                console.log(`Objetos listados da tabela ${tabela}`);
            });
    }
}

module.exports = database;
const e = require('cors');
var mysql = require('mysql');

//Cria o banco de dados com a conexão padrão
function createDatabase(nome) {
    var servCon = mysql.createConnection({
        host: "localhost",
        user: "jaaum",
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
function createTable(nome, colunas) {

    //Cria conexão do banco de dados com db definido
    var dbCon = mysql.createConnection({
        host: "localhost",
        user: "jaaum",
        password: "Test@123",
        database: "slpDB"
    })

    sqlColunas = converterColunas(colunas);
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
function converterColunas(colunas) {
    // For Each === Para Cada
    colunas.forEach(coluna => {
        if (this.sqltext == '' || this.sqltext == undefined) this.sqltext = '(';
        else this.sqltext += ', ';
        this.sqltext += `${coluna.key} ${coluna.value}${coluna.autoIncrement ? ' AUTO_INCREMENT' : ''}${coluna.pk ? ' PRIMARY KEY' : ''}`;
    });

    this.sqltext += ')';

    return this.sqltext;
}

// "("
// "(ID INT AUTO_INCREMENT PRIMARY KEY, USERNAME VARCHAR(255), PASSWORD VARCHAR(255), ATIVO BOOLEAN )"
// "(ID INT AUTO_INCREMENT PRIMARY KEY, USERNAME VARCHAR(255), PASSWORD VARCHAR(255), ATIVO BOOLEAN )"
// dbCon.connect(function (err) {
//     if (err) throw err;
//     dbCon.query("Insert into user (username, password, ativo) values ('dizeritus', 'test321', FALSE)",
//         (err, success) => {
//             if (err) throw err;
//             console.log(success);
//         })
// })

module.exports = createDatabase;
module.exports = createTable;
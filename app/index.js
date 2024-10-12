const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const query = (sql, callBack) => {
    return connection.query(sql, callBack);
};
  
module.exports = {
    connection,
    query,
};
  
slqCreateTable = `CREATE TABLE people (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(255), PRIMARY KEY (ID))`;

query(slqCreateTable, (err, res) => {
    console.log('Tabela já existe!!')
});

const sql = `INSERT INTO people(name) values('Wesley')`
query(sql)

sqlGetPeople = `Select id, name from people`

app.get('/', (req,res) => {
    query(sqlGetPeople, (err, rows, fields) => {
        returnString = '<h1>Full Cycle Rocks!</h1>'
        returnString += '<ul>'
        rows.forEach(function(person, i) {
            returnString += '<li>' + person.name + '</li>'
        })
        returnString += '</ul>'
        res.send(returnString);
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
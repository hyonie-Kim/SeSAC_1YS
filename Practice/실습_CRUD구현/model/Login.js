const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'sehyeon90',
    database: 'sasac_tast'
})

exports.join_user = () =>{
    var sql = `INSERT INTO joindata(id, pw, name, email) value()`

    
}
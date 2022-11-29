const express = require('express');
const mysql = require("mysql");
const app = express();
const port = 8000;

const cnn = mysql.createConnection({
    host: 'localhost', //mysql 주소 혹은 '127.0.0.1'
    user: 'user', // root 계정은 외부에서 접근 허락하지않는다.
    password: 'sehyeon90',
    database: 'sasac_tast'
});

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    cnn.query('select * from user', (err, result)=>{
        if(err) throw err;
    
        console.log(result); 
        res.render('index', {rows: result});
    });

    
})

app.listen(port, ()=>{
    console.log("open:", port)
})
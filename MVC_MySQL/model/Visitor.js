const mysql = require("mysql");

const cnn  = mysql.createConnection({ //mysql 연결 코드
    host: 'localhost',
    user: 'user', // root 계정은 외부에서 접근 허락하지않는다.
    password: 'sehyeon90',  //DB비밀번호
    database: 'sasac_tast' //DB이름

})

exports.get_visitor = (cd) =>{
    var sql = 'SELECT * FROM visitor';
    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        console.log("visitors:", rows);

        cd(rows);
    })
}

exports.register_visitor = (info, cd) => {
    // info = req.body; {name:"", comment:""}
    var sql = `INSERT INTO visitor(name, comment) values('${info.name}', '${info.comment}')` // 문자열로 감싸줘야함

    cnn.query(sql, (err, result)=>{
        if(err) throw err;

        console.log("insert result:", result);
        cd(result.insertId);
        
    })
}

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

exports.delete_visitor = (id ,cb) => {
    var sql = `delete from visitor where id = ${id}`;

    cnn.query(sql, (err, result) =>{
        if(err) throw err;

        console.log("delete result: ", result);
        cb();
    })
}

exports.get_visitor_by_id_model = (id, cb) =>{
    var sql = `select * from visitor where id = ${id}`;

    cnn.query(sql, (err, rows) =>{
        if(err) throw err;

        console.log("select by id:", rows);
        cb(rows[0]);
    })
}

exports.update_visitor = (info, cb) =>{
    var sql = `update visitor set name= '${info.name}', comment='${info.comment}' where id =${info.id}`;

    cnn.query(sql, (err, result) =>{
        if(err) throw err;

        console.log("update result:", result);
        cb();
    })
}
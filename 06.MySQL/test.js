const mysql = require("mysql");

// 옵션객체가 들어간다
// createConnection 함수는 옵션으로 넣어둔 데이터를 연결한다.
const cnn = mysql.createConnection({
    host: 'localhost', //mysql 주소 혹은 '127.0.0.1'
    user: 'user', // root 계정은 외부에서 접근 허락하지않는다.
    password: 'sehyeon90',
    database: 'sasac_tast'
});

// sql문과 콜백함수
cnn.query('select * from user', (err, result)=>{
    // err = undefined; err가 발생하지않으면 계속 undefined 형태
    if(err) throw err;

    console.log(result); //에러가 발생하지 않음
});
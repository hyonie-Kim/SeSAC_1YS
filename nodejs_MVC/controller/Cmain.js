const Test = require("../model/Test");
// 경로와 연결된 함수를 정의한다.
exports.main = (req, res)=>{
    let hi = Test.hello();
    // res.render("index");
    res.send(hi);
}

exports.test = (req, res)=>{
    res.send("test");
}

exports.post = (req, res)=>{
    res.send("post");
}

/* exports 예시로 이해하기 
module.exports = {
    main: main,
    test: test,
    post: post
}
*/
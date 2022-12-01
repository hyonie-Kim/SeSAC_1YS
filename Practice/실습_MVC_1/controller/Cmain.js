const Member = require("../model/member");
exports.main = (req, res) =>{
    res.render("index");

}

exports.login = (req, res) => {
    console.log(req.body);
    let info = Member.axiosPost();

    if(req.body.id == info.id && req.body.pw ==info.pw ){
        res.send({msg: "<p style='color:blue'>get 로그인 성공!</p>"})
    } else {
        res.send({msg:"<p style='color:red'>get 로그인 실패 (아이디 또는 비밀번호가 틀렸습니다.)</p>"})
    }
    
}
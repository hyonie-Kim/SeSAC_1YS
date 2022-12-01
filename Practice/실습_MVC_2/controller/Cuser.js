const User = require("../model/User")

exports.login = (req, res) => {
    res.render("login")
}

exports.axiosPost = (req, res) => {
    let info = User.user()
    if(req.body.id == info.id && req.body.pw == info.pw) res.send("로그인 성공");
    else res.send("로그인 실패");
}


exports.loginPost2 = (req, res) => {
    let users = User.user2();
    let user_list = users.split("\n") // enter 기호 = \n
    let login_flag = false;
    let name = ""; //빈문자열

    for(let i=0; i< user_list.length; i++){
        let user = user_list[i].split("//");
        // user = ["spreatics", "1234", "스프레틱스"]
        if(req.body.id == user[0] && req.body.pw == user[1]) {
            login_flag =true;
            name =user[2];
            break;
        }
    }
    if(login_flag) res.send(`${name} 님 환영합니다.`);
    else res.send(`로그인 실패!`);
}
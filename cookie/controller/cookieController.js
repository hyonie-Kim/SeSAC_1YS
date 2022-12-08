// exports.index = (req, res) =>{
//     res.render("index");
// }

// exports.modal = (req, res) =>{
//     if(req.cookies.popup == "1") res.render("cookie", {pop:"none"});
//     else res.render("cookie", {pop:"block"})
// }

// exports.setpopup = (req, res) =>{
//     //1. 쿠기를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키생성 {popup: 1}
//     //2. 서버 응답

//     const option = {
//         httpOnly: true, 
//         maxAge: 30000,
 
//     }

//     res.cookies("popup", "1", option);
//     res.send(true)
// }

exports.sessionMain = (req, res) =>{
    res.render("session_login");
}

exports.sessionLogin = (req, res) =>{

    res.render("session_signin",{id : req.session.user});
}

let user = {
    id: "sesac",
    pw: "1234"
};
exports.postLogin = (req, res)=> {

    if(req.body.id == user.id && req.body.pw == user.pw){
        req.session.user = req.body.id;
        res.send("로그인 성공");
    }else {
        res.send("로그인 실패")
    }
}

exports.logout = (req, res)=>{
    req.session.destroy(function(){
        res.send("로그아웃 성공")
    })
}
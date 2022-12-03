const Login = require("../model/Login");

exports.login = (req, res) =>{
    res.render("login");
}

exports.join = (req, res) =>{
    res.render("join");
}

exports.joinReult = (req, res) =>{
    console.log(req.body);
    
}
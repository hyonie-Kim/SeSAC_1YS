const Visitor = require("../model/Visitor");

exports.visitor = (req, res) =>{
    Visitor.get_visitor(function(result){
        console.log(result);
        res.render("visitor", {data:result});
    })
    
}

exports.register = (req, res) =>{
    Visitor.register_visitor(req.body,function(id){ //id 로 변경
        console.log(id);
        res.send(String(id));
    })
    // 데이터 넣기, insert - req.body
    
}
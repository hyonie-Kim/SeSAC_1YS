
const {a,b} = require('./module.js');
// const num = require("./module.js");
// const a = num.a;
// const b = num.b;

function add(){
    return a+b;
}

// 내보내기
module.exports =add;

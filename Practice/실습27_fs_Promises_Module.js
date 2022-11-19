/*
fs.promises 모듈이용하기
*/

let fs4 = require('fs').promises;

// 파일쓰기 - writeFile
fs4.writeFile('./sesac.txt',"반갑습니다")
    .then(function(){
        return fs4.readFile('./sesac.txt')
    })
    .then(function(data){
        console.log("sesac 파일 내용:",data.toString())
        return fs4.copyFile('./sesac.txt','./sesac2.txt')
    })
    .then(function(){
        return fs4.rename('./sesac2.txt','./new.txt')
        
    })

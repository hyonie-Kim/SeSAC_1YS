// File System 모듈
// 1. fs 내장 모듈 require로 불러오기

const fs = require("fs");
fs.readFile("./test.txt", function(err, data){
    if(err) throw err;

    console.log("data:", data);
    console.log("data2:", data.toString()); //문자열 형태로 변환해서 파일읽기
})

// 프로미스 형태로
const fs2 = require("fs").promises;
fs2.readFile("./test.txt") 
    .then((data)=> {
        console.log("promise - data:",data)
    })



fs2.writeFile("./write.txt", 'sesac')
    .then(function(){
        // 파일읽기
        return fs2.readFile("./write.txt")
    })
    .then(function(data){
        console.log(data.toString());  
    })

// 콜백형식
fs.writeFile('./write2.txt', 'codingon', function(err){
    if(err) throw err;
    console.log("writeFile success!");
    fs.readFile("./write2.txt", function(err, data){
        if(err) throw err;
        console.log("write2File data",data.toString())
    })
})

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

    
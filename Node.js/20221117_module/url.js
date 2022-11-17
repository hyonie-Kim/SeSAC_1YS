// 내장모듈이라 불러와야함
const url = require("url");
console.log(url);

// parse는 함수
console.log(url.parse); 
var obj = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=1&acr=2&ie=utf8&query=%EC%B2%AD%EB%85%84%EC%B7%A8%EC%97%85%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90')
console.log(obj)
console.log(url.format(obj));

console.log(obj.protocol);


var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=1&acr=2&ie=utf8&query=%EC%B2%AD%EB%85%84%EC%B7%A8%EC%97%85%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90")
// console.log(string);

// 함수적용
console.log(string.searchParams.getAll('where'));

console.log("=========================================================")
var string2 = new url.URL("http://localhost?name=sesac&name=코딩온&age=10")
console.log(string2.searchParams.getAll('name'))
console.log(string2.searchParams.keys())

string2.searchParams.append('age','20');
console.log(string2.searchParams.getAll('age'))
console.log(string2.searchParams.has('age'))

console.log("========================================================= 실습26. url 모듈이용 =========================================================")

// 1. searchParams
var string3 = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac");
console.log("모든 키 가져오기",string3.searchParams.keys());
console.log("모든 값 가져오기",string3.searchParams.values());
string3.searchParams.delete('sm')
console.log("sm 키 삭제하고 모든 키 가져오기",string3.searchParams.keys())


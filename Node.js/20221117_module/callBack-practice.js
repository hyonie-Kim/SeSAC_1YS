/*
[조건1]
1. call 함수는 2초 후 실행
2. back 함수는 1초 후 실행
3. hell 함수는 1.5초 후 실행
하도록 setTimeout 이용하기
*/



function call1(name) {
    setImmediate(function() {
        console.log("사용자는 " + name);
    }, 0000);
}
function call() {
    setTimeout(function() {
        console.log("시작은 call");
        back();
    }, 2000);
}
function back() {
    setTimeout(function() {
        console.log("두번째는 back" );
        hell();
    }, 1000);
}
function hell() {
    setTimeout(function() {
        console.log("세번째는 hell" );
    }, 0500);
}
let a1 = call1('kim');
let a = call('kim');
// 프로미스 형태
/*
 new Promise (function(resolve, reject){
    // resolve : 함수형태. 성공했을 때 실행하는 친구
    // reject : 함수형태. 실패 or 에러를 처리할때 사용되는 친구
 })
*/



// function func1(){
//     return new Promise(function(resolve, reject){
//         resolve("성공!")
//     });
// }

// var a = func1();
// console.log(a);
// func1().then(function(result){
//     console.log("result",result)
// })
// ===============================================================
// function func2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("성공!")
//         },1000)
//     });
// }

// func2().then(function(result){
//     console.log("result2",result);
//     // then 체이닝: then 안에서 리턴하면 다음 then이 받는다
//     return 'a';
// }).then(function(abc){
//     console.log("abc:",abc);
// })

// ===============================================================


function func3 (flag) {
    return new Promise(function(resolve, reject){
        if (flag) {
            resolve ("flag는 true")
        } else {
            reject ("flag는 false")
        }
    });
}
// 방법1
/*

func3(true).then(
    function(msg) {
        console.log("msg1:",msg);
    },
    function(msg) {
        console.log("msg2:", msg)
    }
)

*/

// 방법2

func3().then(
    function(msg) {
        console.log("msg1:",msg);
    },
    function(msg) {
        console.log("msg2:",msg);
    }
).catch(
    function(msg) {
        console.log("msg3:", msg)
    }
)
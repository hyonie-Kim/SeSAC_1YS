
// 동기 코드는 순차적으로 진행
// 비동기함수 3개
/*
 비동기 함수란 쉽게 설명하면 호출부에서 실행결과를 기다리지 않아도 되는 함수이다.
 반대로 동기 함수는 호출부에서 실행 결과가 리턴될 때까지 기다려야하는 함수이다.

 자바스크립트에는 setTimeout() 이라는 대표적인 내장 비동기 함수가 있다.
 setTimeout()은 2개의 매개변수를 받는데, 
 
 첫번째는 실행할 작업내용을 담는 콜백함수이고,
 두번째는 이 콜백함수를 수행하기전에 기다리는 밀리초 단위 시간이다.

 즉 setTimeout()함수는 두번째 인자로 들어온 시간 만큼 기다린 후에 첫번째 인자로 들어온 콜백함수를 실행해준다.

 */

function login(id, pw, cb){
    setTimeout(function(){
        console.log('사용자 입장');
        cb(id)
    },3000)
}

function getVideo(id, cb) {
    setTimeout(function(){
        console.log(id + "의 비디오 리스트")
        cb(['아바타', '라라랜드'])
    },2000);
}

function getDetall(video, cb){
    setTimeout(function(){
        cb("비디오 제목 : " + video)
    },1000);
}


// 순서를 만들어줘야함 - 순차적으로 진행

login('kim', '1234', function(user){
    // console.log("user : ",user)
    getVideo(user, function(videos){
        // console.log("videos :", videos)
        getDetall(videos[0], function(mag){
            console.log(mag)
        })
    })
})

// let id = login(id, pw)
// let video = getVideo(id);
// let msg = getDetail(videos[0]);
// console.log(msg)


// ========================== 동기 ==========================
// function login(id, pw, cb) {
//     console.log("사용자 입장");
//     return id;
// }
// function getVideo(id, cb) {
//     console.log( id + "의 비디오 리스트");
//     return ['아바타', '라라랜드'];
// }
// function getDetail(video, cb) {
//     return "비디오 제목 : " + video;
// }
// let user = login('kim', '1234');
// let videos = getVideo(user);
// let msg = getDetail(videos[0]);
// console.log(msg);

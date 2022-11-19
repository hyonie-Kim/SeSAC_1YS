// 추가 실습. login -> getVideo -> getDetale을 Promise로 변경하기

function login (id, pw) {
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log("사용자 입장");
            resolve(id);
        },3000);
    })
}

function getVideo(id){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log(id+ "의 비디오 리스트");
            resolve((['아바타', '라라랜드']))
        },2000);
    })
}

function getDetail(video){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("비디오 제목 : " + video)
        },1000);
    });
}


login('kim', '1234').then(function(user){
    // console.log("user:",user)
    return getVideo(user);
})
.then(function(videos){
        console.log("videos:",videos)
        return getDetail(videos[0])
    })
    .then(function(msg){
        console.log("msg",msg)})
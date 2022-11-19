/*
내장 모듈이용하기(1)

1. OS 모듈
    1) 사용 가능한 메모리(RAM)출력하기
    2) 전체 메모리 용량 출력하기
    3) 홈 디렉토리 경로 출력하기

2. Path 모듈
    1) 경로 구분자 출력하기
    2) 현재 파일의 확장자 출력하기
    3) 현재 파일의 경로를 분리해서 출력하기

    참고링크
    https://nodejs.org/dist/latest-v14.x/docs/api/os.html#os_os_tmpdir
*/

// require 함수를 통해 os, path모듈을 import 
const os = require("os");      
const path = require("path");
const file = __filename;


// 1. os 모듈 관련 메서드
console.log("os.freemem() ==>",os.freemem()); // 시스템의 가용 메모리
console.log("os.totalmem() ==>",os.totalmem()); // 시스템의 총 메모리 
console.log("os.homedir() ==>",os.homedir()); // 현재 사용자의 홈디렉터리 정보


// 2. path 모듈(경로제어) 관련 메서드
console.log("path.sep ==>",path.sep); // 경로의 구분자
console.log("path.extname ==>",path.extname(file)); // 파일의 확장자
console.log("path.parse ==>",path.parse(file)) // 현재 파일의 경로를 분리해서 출력

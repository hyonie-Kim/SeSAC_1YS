console.log("__filename : " + __filename);
console.log("__dirname : " + __dirname);

// process 객체 = 현재 실행중인 노드 프로세스 정보
console.log("================== process객체 ==================")
console.log("process.version : ",process.version);
console.log("process.arch : ",process.arch)
console.log(process.platform)
console.log("process.cpuUsage : ",process.cpuUsage())

// os모듈 - 운영체제
console.log("================== os 모듈 - 운영체제 ==================")
const os = require("os");
console.log("os.type : ",os.type());
console.log("os.cpus : ",os.cpus());
console.log("os.hostname :",os.hostname());
console.log("os.freemem : ",os.freemem());


// path 모듈 - 파일경로를 편하게해줌
console.log("================== path 모듈 ===========================");
const path = require("path");
const file = __filename;
console.log("path.extname : ",path.extname(file))
console.log("path.parse : ",path.parse(file))


console.log("====================================== 내장모듈 이용하기(1) ======================================");
// 1. os 모듈
// 1) 사용 가능한 메모리(RAM)출력하기

console.log("전체 메모리 용량 출력하기",os.totalment())
console.log("홈 디렉토리 경로 출력하기",os.homedir());

// 2. path 모듈
console.log("경로 구분자 출력: ",path.parse.root(file));
console.log("현재 파일의 확장자 출력: ",path.extname(file));
console.log("현재 파일의 경로를 분리해서 출력: ",)

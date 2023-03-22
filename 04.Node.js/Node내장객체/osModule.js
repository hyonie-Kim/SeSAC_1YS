var os = require("os");

// console.log(os);
console.log("호스트이름:", os.hostname());
console.log("운영체제 이름:", os.type());
console.log("운영체제 플랫폼:", os.platform());
console.log("운영체제 아키텍처:", os.arch());
console.log("운영체제 버전:", os.release());
console.log("운영체제가 실행된 시간:", os.uptime());
console.log("시스템의 총 메모리:", os.totalmem());
console.log("시스템의 사용 가능 메모리:", os.freemem());

# Node.js 내장 객체

- `__filename` : 현재 파일 경로
- `__dirname` : 현재 폴더 (디렉토리)경로

### require

- 모듈을 불러올 때 사용하는 객체
- **주의점!**
  - 모듈을 불러올 때 서로가 서로를 불러오는 순환참조가 나오지 않도록 해야한다.

### Process

- 현재 실행중인 노드 프로세스에 대한 정보
- process 객체 속성 & 메소드
  - `process.version`
  * `process.arch`
  - `process.platform`
  * `process.uptime()`
  - `process.execPath`
  * `process.cpuUsage()`
  - `process.env` 환경변수

## os모듈

- 운영체제의 정보를 담고 있는 내장 모듈
- os 모듈 내부에 있는 속성과 메서드는 모두 문서에서 확인할 수 있다.

```javascript
var os = require("os"); // 모듈 추출
console.log(os); // 속성 출력
```

### os 모듈의 메서드

- `hostname()` : 운영체제의 호스트 이름을 리턴한다.
- `type()` : 운영체제의 이름을 리턴한다.
- `platform` : 운영체제의 플랫폼을 리턴한다.

### path모듈

- 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈

### url모듈

- 인터넷 주소를 쉽게 조작하도록 도와주는 모듈

🌱 Thursday, November 17th, 2022

# 구조분해 할당 (Destructuring assignment) - JavaScript 문법

- 배열이나 객체의 속성을 해체해 그 값을 개별 변수에 담는 것
- 배열 구조 분해
- 객체 구조 분해

### 📕배열 구조 분해

**const[변수] = 배열;**

- 각 변수에 배열의 인덱스 순으로 값 대응
- 구조 분해 시 변수의 값이 undefined일때 기본값 할당 가능
- 구조 분해 없이 두 변수의 값 교환도 가능

```javascript
let lists = ['apple', 'grape'];
[item1. item2, item3, = 'peach'] = lists;
console.log("item1", item1)
```

### 📕객체 구조 분해

**const{변수}=객체;**

- 객체 안의 속성을 변수명으로 사용
- (:)을 이용해 새 변수명을 선언하고, 원래의 값을 새 변수명에 할당 할 수 있다.

## 클래스

- 객체를 생성하기 위한 템플릿
  > 객체: 고양이 그 자체
  > 속성: 이름-나비, 나이-1살
  > 메소드: mew()-울다, eat()-먹는다

## 콜백함수

- Callback : 함수가 끝난 뒤 실행되는 함수
- 함수를 만들 때 parameter로 함수를 받아서 사용한다.

**Q. 콜백 함수를 왜 사용할까?**

- A1. 가독성이나 코드 재사용을 위하여
- A2. 비동기 방식으로 작성된 함수를 동기(순차로) 처리하기 위하여

```javascript
function func(callback) {
  callback();
}
function func2() {
  console.log("gogo 함수");
}
func(func2);
```

### 콜백 지옥 (Callback Hell)

- 비동기 프로그래밍 시 발생하는 문제
- 함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기가 너무 깊어지는 현상
- 가독성 ↓ 코드 수정 난이도 ↑

# Node.js

- 구글 크롬의 자바스크립트 엔진(V8 Engine)에 기반해 만들어진 JavaScript 런타임
- 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적
- npm 패키지는 세계에서 가장 큰 오픈 소스 라이브러리

**런타임이란?**

- 프로그래밍 언어가 구동되는 환경
- JavaScript의 런타임 환경은 웹 브라우저만 존재 했었음
  - JavaScript를 **서버단 언어로 사용하기 위해** 나온 것이 node.js
  * 웹 브라우저 없이 실행 가능

## 📝Node.js 특징

1. 자바스크립트 언어 사용
2. Single Thread : 에러를 처리하지 못하면 프로그램이 아예 중단 됨 ▶ **예외처리의 중요성↑**
3. 비동기 I/O 방식

### 📕특징- 비동기 I/O 방식

- 동기 (Synchronous)

  - 한 요청에 서버의 응답이 이루어질 때까지 **계속 대기**해야한다.

  * 장점: 설계가 매우 **간단**하고 직관적이다.

  - 단점: 결과가 주어질 때까지 아무것도 못하고 **기다리고 있어야** 함

- 비동기 (Asynchronous)
  - 요청한 후 응답을 기다리지 않고 다른 활동을 한다.
  * 장점: 요청에 따른 결과가 반환되는 시간 동안 **다른 작업을 수행**할 수 있다.
  - 단점: 동기식보다 설계가 **복잡**하다.

## Node.js 사용해보기

**Node.js 설치-로컬**

- Node.js(nodejs.org)

**Node.js설치-서버**

> `apt-get update` `(apt-get remove nodejs)` </br> > `curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -` </br> > `apt-get install nodejs` > `apt-get install npm`

npm 이란?

- javaScript로 개발된 각종 모듈의 설치, 업데이트, 구성, 제가 과정을 자동화하여 관리해주는 기능

**Node.js설치-버전확인**

- `node-v`
- `npm-v`

### 📕REPL

- R(Read) → E(Evaluate) → P(Print) → L(Loop)
- 윈도우에서의 cmd 맥에서 terminal 처럼 노드에는 REPL콘솔이 있다.
- `>`에서 JavaScript 코드 입력 > 간단한 코드 테스트 용도
- `.exit` 나가기

# 모듈 (Module)

- 특정한 기능을 하는 함수나 변수들의 집합
- 재사용 가능한 코드 조각

### 📕모듈의 장점

- 코드 추상화
- 코드 캡슐화
- 코드 재사용
- 의존성 관리

### 📕모듈 만들기

**하나의 모듈파일에 여러 개 만들기**

```javascript
const a = "a변수";
const b = "b변수";
module.exports = {
  a,
  b,
};
```

**하나의 모듈 파일에 하나 만들기**

```javascript
function connect() {
  return a + b;
}
module.exports = connect;
```

### 📕모듈 불러오기

- `const{ }`로 가져올떄는 구조분해해 가져오기에 이름이 동일해야 한다.
- 하나만 내보낸 모듈은 다른 이름이어도 불러올 수 있다.

```javascript
const { a, b } = require("./var.js");
const returnString = require("./func.js");
```

### ES2015 모듈

- 자바스크립트 자체 모듈 시스템 문법
  - package.json에 `"type":"module"`을 추가해 사용

**export: 모듈 내보내기**

- `module.exports={a,b}` → `export{a,b};`
- `module.exports=connect` → `export default connect;`

**import ~ from ~ :모듈 가져오기**

- `const{a,b}=require("./var.js");` → `import{a,b}from './var.js'`
- `const returnString = require("./func.js")` → `import returnString from './func.js'`

## 📝Node내장 객체

### global

- 노드의 전역 객체
- 모든 파일에서 접근 가능
- 생략하여 사용 가능

### console

- console.log(내용)
- console.error(내용)
- console.time(레이블) console.timeEnd(레이블)
- console.table(배열)
- console.dir(객체, 옵션)
- console.trace(레이블)

### Timer 메소드

- setTimeout(콜백 함수, 밀리초)
- setInterval(콜백 함수, 밀리초)
- setImmediate(콜백 함수)
- clearTimeout(아이디)
- clearInterval(아이디)

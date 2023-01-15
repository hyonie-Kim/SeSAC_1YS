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

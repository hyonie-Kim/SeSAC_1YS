# Node.js 서버

## 구조분해 할당 (Destructuring assignment) - JavaScript 문법

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

## 📝클래스

- 객체를 생성하기 위한 템플릿
  | 객체: 고양이 그 자체
  | 속성: 이름-나비, 나이-1살
  | 메소드: mew()-울다, eat()-먹는다

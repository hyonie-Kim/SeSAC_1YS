## Create-react-app

- `npx create-react-app my-app` 설치
- `npm start` 실행

### 그림 요소와 기능요소 합치기

- 기존 HTML, JS의 불편한 점을 해결하고자 나온 것이 JSX문법
- JS 문법 안에 HTML을 쓸수 있게하여 직관적이고 편리하게 코딩이 가능
- HTML 요소는 return의 () 안에 그대로 쓰고, JS를 쓰고 싶으면 {}안에 쓰면 된다.

- JSX 문법을 사용하지만 결과적으로 브라우저는 JS코드를 받는다.
- 바벨이 JSX를 순수 JS로 번역하여 브라우저에 전달하기 때문

### JSX 문법 작성 규칙 및 배우기

- class -> className
- 이미지도 직접 임포트해서 {}안에 넣어서 전달 가능
- 인라인 스타일도 {}로 전달 또는 객체로 만들어서 전달

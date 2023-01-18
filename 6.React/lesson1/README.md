🌱 Tuesday, January 3th, 2023

# Create-react-app

리액트에 필요한 패키지를 자동으로 설치해주는 명령어

- FaceBook이 만든 `create-react-app`이란 명령어를 사용해서 react app을 만들어보자.
- React app을 만들 폴더로 이동한다.
- `npx create-react-app "원하는 폴더명"`
- 입력한 앱 이름으로 폴더가 생기니 유의한다.
- 설치가 완료되면 `npm start`
- 3000번 포트에서 실행된다.

## SPA : Single Page Application

- 리액트 프로젝트에서 public/index.html html 파일은 딱하나이다.
- src/index.js : HTML과 JS를 연결해주는 연결고리 브릿지이다.
  - 결론: index.js의 역할은 index.html파일과 App.js를 연결

### `ReactDOM.render()`

- 선택한 html태그에 react 컴포넌트를 그려준다.

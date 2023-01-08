# 리액트 폴더 최상위에 세팅

- .vscode는 최상위에 두면 하위 폴더의 모든 코드를 관리한다.
- 기존 .vscode와 .prettierrc/.eslintrc.js 파일을 리액트 폴더 최상위로 옮긴다.

### 📕 pacakge.json 파일 만들고 위의 코드 넣기 > `npm i` 모듈 인스톨

```json
{
  "devDependencies": {
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-prettier": "^4.2.1",
    "typescript": "^4.9.3"
  }
}
```

### 📕 jsx문법을 문제 없이 처리 할수 있도록 .eslintrc.js 코드 변경

```javascript
module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
```

### 📕.git 폴더가 안생기도록 리액트 앱 생성

- `npx create-react-app --skip-git` or `npx create-react-app [projectName] --skip-git`

# 컴포넌트 활용하기

- 기존 HTML에서는 기존의 것과 동일한 것을 만들어도 코드를 동일하게 써야했다. 즉, 템플릿 기능이 없었음
- 리액트에서는 이러한 HTML의 문제를 컴포넌트를 활용하여 손쉽게 해결이 가능하다.
- 컴포넌트를 쓰면 코드를 크게 줄일 수 있고, 재사용도 편리하다.

## 📝Props

- 리액트에서는 props(properties)라는 것으로 손쉽게 전달이 가능하다.
- 부모 컴포넌트에서 자식 컴포넌트에 원하는 데이터를 보내는 방법이다.
  - **props라는 이름의 객체로 전달**

### 📕간단한 MainHeader 컴포넌트 만들기

- MainHeader의 매개변수 전달 부분에 {}를 추가하고 부모로 부터 받아올 props명을 적는다.

```jsx
function MainHeader({ text }) {
  return <h1>{text}</h1>;
}
```

### 📕App.js에서 props 사용하기

- App.js의 컴포넌트 옆에 html태그에 속성을 부여하는 것 처럼 props명과 전달 할 데이터를 작성해서 전달하면 된다.

```javascript
function App() {
  return (
    <div>
      <MainHeader text="Hello, props world!" />
      <MainHeader text="Bye Bye, props world!" />
      <MainHeader text="well come back, props world!" />
    </div>
  );
}
```

### 📕다양한 데이터 받아오기

- Props는 다양한 데이터를 한꺼번에 받아올수 있다.
- 다양한 데이터는 props라는 객체 하나로 받아서 사용이 가능하다.

```javascript
function App() {
  return (
    <div>
      <MainHeader text="Go naver" href="https://naver.com" userID="hyonie" />
    </div>
  );
}
```

#### ⚙src/components/MainHeader.js

```jsx
function MainHeader(props) {
  return (
    <div>
      <h1>{props.userID}님 반갑습니다.</h1>
      <a href={props.href}>{props.text}</a>
    </div>
  );
}
```

**구조분해 할당도 가능하다**

```jsx
function MainHeader({ userID, href, text }) {
  return (
    <div>
      <h1>{userID}님 반갑습니다.</h1>
      <a href={href}>{text}</a>
    </div>
  );
}
```

```jsx
function MainHeader(props) {
  const { userID, href, text } = props;
  return (
    <div>
      <h1>{userID}님 반갑습니다.</h1>
      <a href={href}>{text}</a>
    </div>
  );
}
```

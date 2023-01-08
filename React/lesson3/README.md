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

- **구조분해 할당도 가능하다**

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

### 📕클래스형 컴포넌트 Props

- 클래스형 컴포넌트인 만큼 기족의 props로 접근하던 것을 this.props로 접근하면 된다.
- 클래스이기 떄문에 매개변수를 따로 받지 않는다.
- This.props를 쓰면 코드가 길어져서 보통 구조 분해 할당으로 변수로 만들어 사용한다.
- src/components/ClassProps.js 파일 참고

## 📝리액트 배열 활용

- props로 전달하는 부분을 매번 작성해야할까?
- 아니다. 보통은 백엔드에서 데이터를 받아오게 되고 받은 데이터를 props에 전달하는 형태를 많이 사용한다.
- React에서는 배열 데이터를 그려 줄 때 배열 함수인 map을 사용한다.

### 📕Map 장점

- 귀찮게 하나하나 배열의 데이터를 넣어줄 필요가 없다.
- 배열 데이터가 변경이 되어도 자연스럽게 적용이 된다.
- 당연히, 컴포넌트에만 적용할 필요도 없다.
- Map의 리턴값으로 원하는 것을 넣어줘도 된다.
  - **단, 리턴되는 요소는 반드시 하나의 부모 요소를 가져야한다.**

#### ⚙배열 데이터를 리액트로 그리는 방법

```jsx
return (
  <div>
    <h1>오늘 해야할일</h1>
    <hr />
    {dataArr.map((el, index) => {
      return <ListChild title={el.title} detail={el.detail} key={index} />;
    })}
  </div>
);
```

#### ⚠Warning 경고 문구

- React에서 map으로 배열 데이터를 그려줄 떄에는 해당 요소에 Unique한 Key 값 props로 부여해야 한다.
- 그래야만 나중에 리액트에서 map으로 그려진 엘리먼트 중에서 어떤 것을 컨트롤(변경, 추가, 삭제 등)을 할지 구분할 수 있기 때문이다.
- 구분을 해야하기 때문에 반드시 unique한 값으로 넣어야 한다.
- Key의 값은 전역에서 unique할 필요는 없지만, 반드시 형제 사이에서는 unique해야한다.
- 단, Key값으로 index는 최후의 수단으로 사용한다

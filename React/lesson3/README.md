# 리액트 폴더 최상위에 세팅

- .vscode는 최상위에 두면 하위 폴더의 모든 코드를 관리한다.
- 기존 .vscode와 .prettierrc/.eslintrc.js 파일을 리액트 폴더 최상위로 옮긴다.

### 📕 pacakge.json 파일 만들고 위의 코드 넣기 > `npm i` 모듈 인스톨

```json
// package.json
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

#### ⚙.git 폴더가 안생기도록 리액트 앱 생성

- `npx create-react-app --skip-git`

# 컴포넌트 활용하기

- 기존 HTML에서는 기존의 것과 동일한 것을 만들어도 코드를 동일하게 써야했다. 즉, 템플릿 기능이 없었음
- 리액트에서는 이러한 HTML의 문제를 컴포넌트를 활용하여 손쉽게 해결이 가능하다.
- 컴포넌트를 쓰면 코드를 크게 줄일 수 있고, 재사용도 편리하다.

## 📝Props

- 리액트에서는 props(properties)라는 것으로 손쉽게 전달이 가능하다.
- 부모 컴포넌트에서 자식 컴포넌트에 원하는 데이터를 보내는 방법이다.
  - **props라는 이름의 객체로 전달**

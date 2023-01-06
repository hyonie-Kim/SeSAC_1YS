# Formatting, Linting, Typescript 세팅

## 📝Formatting

- Code의 스타일을 통일 시켜준다.
- 함수의 소괄호와 중괄호는 띄울것인지, 세미콜론은 찍을지, 탭을 누르면 몇 칸을 띄울것인지 등등
- 문법이 아닌 코드의 스타일을 통일 시켜줘서 가독성을 높이고 버그를 예방한다.
- Prettier를 사용

### 📕프로젝트에 Prettier 설정

- `npm install --save-dev prettier` or 축약 `npm i -D prettier`
- `--save`는 패키지 모듈에 추가한다는 의미
- `--save-dev`는 개발할 때에만 사용하겠다는 의미
- 실제로 프로젝트를 빌드 & 배포하면 해당 패키지는 포함 X
- Package.json 파일에 방금 설치한 Prettier 옵션 확인하기

#### ⚙.prettierrc 파일로 prettier세부 설정

```json
{
  "semi": true,
  "singleQuote": true
}
```

> `semi`: 세미콜론 사용여부  
> `singleQuote`: single 쿼테이션 사용 여부

#### ⚙.vscode 파일에 settings.jscon 파일 설정

- vs-code에게 prettier사용하라고 알려주기 **.vscode폴더를 만들고 settings.json파일 만들기**

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

#### 🎯내용정리

- Prettier 확장 설치
- Main.js 파일의 코드를 `console.log("Hello, Node.js")` 로 작성하고 `ctrl+s` 로 저장해보기.
- Prettier 작동한다

**⚠formatting이 안될때, settings 옵션에 Editor:Default Formatter: Prettier-Code formatter로 설정 확인**

## 📝Linting

- Formatting에 가깝지만 더 많은 규약과 규율을 검사해주는 방법이다.
- 웹 개발에서는 Airbnb에서 사용하는 Linting 규율이 유명하다.

### 📕ESLint 설치

- `npm install --save-dev eslint` or 축약 `npm i -D eslint`
- package-lock.json 파일을 보면 prettier에 비해 훨씬 많은 package가 설치 되었음을 확인이 가능하다.
  **그만큼 많은 규약을 가지고 있다는 것!**

### 📕ESLint 설정

#### ⚙.eslintrc.js 파일 생성 후, Airbnb 모듈 추가 (window용)

```javascript
module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
  },
};
```

- 모든 Lint 관련 룰을 전부 지정할수 없기 때문에 Airbnb의 Linting Rule를 가져온다.
- `npm install --save-dev eslint-config-airbnb-base eslint-plugin-import`

## 📝Typescript

- 문법적으로는 eslint가 formatting 해주지만, 자료형은 typescript

### 📕Typescript 설치

- `npm install --save-dev typescript @typescript-eslint/parser`

### 📕Typescript 적용

- Main.js 파일에 `//@ts-check` 주석 추가
- Type관련 문제는 typescript가 알려준다.

#### ⚙.eslintrc 파일 설정

```javascript
module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
```

# 리액트 배우기

## 📝State

- 간단하게 표현하면 중요한 변수 정도로 생각하자.
- State의 뜻은 -> 상태를 의미한다. 즉, 리액트에서 컴포넌트에 대한 상태를 의미
- 사용하는 이유는? State가 변경되면 해당 컴포넌트는 바로 다시 렌더링이 되기 때문에 컴포넌트의 유동성 관리가 쉽다.

### 📕ES7 React/Redux/GraphQL/React-Native snippets 확장도구에서 제공하는 스니펫 사용

> `rfc`: 함수형 컴포넌트  
> `rcc`: 클래스 컴포넌트

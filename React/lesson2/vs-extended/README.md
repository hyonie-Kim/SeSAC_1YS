# Formatting, Linting, Typescript 세팅

## 📝Formatting
- Code의 스타일을 통일 시켜준다.
- 함수의 소괄호와 중괄호는 띄울것인지, 세미콜론은 찍을지, 탭을 누르면 몇 칸을 띄울것인지 등등
- 문법이 아닌 코드의 스타일을 통일 시켜줘서 가독성을 높이고 버그를 예방한다.
- Prettier를 사용
### 📕프로젝트에 Prettier 설정
- `npm install --save-dev prettier`
- `--save`는 패키지 모듈에 추가한다는 의미
- `--save-dev`는 개발할 때에만 사용하겠다는 의미
 - 실제로 프로젝트를 빌드 & 배포하면 해당 패키지는 포함 X
- Package.json 파일에 방금 설치한 Prettier 옵션 확인하기
- .prettierrc 파일로 prettier세부 설정
```json
{
    "semi": true,
    "singleQuote": true
}
```
> `semi`: 세미콜론 사용여부
> `singleQuote`: single 쿼테이션 사용 여부


## 📝Linting
- Formatting에 가깝지만 더 많은 규약과 규율을 검사해주는 방법이다.
- 웹 개발에서는 Airbnb에서 사용하는 Linting 규율이 유명하다.

### 📕ESLint 설치
- `npm install --save-dev eslint`
- package-lock.json 파일을 보면 prettier에 비해 훨씬 많은 package가 설치 되었음을 확인이 가능하다.
**그만큼 많은 규약을 가지고 있다는 것!**
### 📕ESLint 설정
- .eslintrc.js 파일 생성 `module.exports= {};`
- 모든 Lint 관련 룰을 전부 지정할수 없기 때문에 Airbnb의 Linting Rule를 가져온다.
- `npm install --save-dev eslint-config-airbnb-base eslint-plugin-import`

## 📝Typescript
- 문법적으로는 eslint가 formatting 해주지만, 자료형은 typescript
### 📕Typescript 설치
- `npm install --save-dev typescript`
# 템플릿 엔진

- 문법과 설정에 따라 파일을 html 형식으로 변환시키는 모듈

### `npm install ejs`

```javascript
app.set("view engine", "ejs"); // ejs 템플릿 설정
app.use("/views", express.static(__dirname) + "/views");
```

- view engine이 설정 되어 있기 때문에 프로젝트 위치 /views/idex.ejs를 찾는다.

## ejs 문법 사용하기

### `<% %>`

무조건 자바스크립트 코드가 들어가야 하고, 줄바꿈을 할 경우에는 새로운 `<% %>`를 이용해야한다.

### `<%= %>`

변수의 값을 출력할 때 사용

### `<%- include('view의 상대주소') %>`

다른 view파일을 불러올 때 사용

# form

- **입력된 데이터를 한번에 서버로 전송**하기 위해 사용
- **클라이언트가 서버에게 정보를 전달할 때**사용
- 속성: action, name, target, method
- 폼 요소: `<input>`, `<select>`, `<textarea>`, `<button>` 등등

## form 속성

### `action`

폼을 전송할 서버 주소 지정

### `name`

폼을 식별하기 위한 이름

### `method`

폼을 서버에 전송할 http 메소드 지정

- GET: 폼에 입력한 정보가 url에 추가되어 보인다.
- POST

### `target`

- action 속성값에 지정한 스크립트 파일을 현재 창이 아닌 다른 위치에서 열 수 있도록함
- `_blank`, `_self`

## `<input/>`

- 사용자가 다양하게 폼 태그를 입력할 수 있게 하는 입력창으로 가장 기본적인 form 요소

### `type`

- text
- radio
- checkbox 등등

### `name`

이름지정. backend에서 **name으로 Key가 설정** 된다.

### `readonly`

읽기 전용(수정 불가)

### `autofocus`

자동 focus

### `placeholder`

짧은 도움말

## `<select>`

- 선택창으로 서버가 지정한 틍정 값만을 선택할 수 있는 요소
- `input`이 주관식이라면 select는 객관식

## `<label>`

- 폼 양식에 이름을 붙일수 있다.
- for속성: for속성에 연결할 요소의 id를 적어 label을 클릭해도 해당 요소로 가게 만들 수 있다.

## Form get방식

- 폼태그를 통해서 get방식으로 서버에게 요청을 보낼 때 폼 안에 있는 인풋태그들은 `name`을 통해서 값이 어떤 것인지 추적을 할 수 있다.
- 인풋에 값을 입력하고 URL 규칙을 보면 물음표(?)를 기준으로 해서 name뒤에 값이 정상적으로 출력되는 것을 알수 있다.
- 서버에서 get 방식으로 /calculator 요청이 왔을 때, `res.send("계산결과 = ")` 로 메세지를 보내 줄수 있다. 사용자 화면에서 제출 버튼을 클릭하면 메세지가 잘 출력되는 것을 확인할 수 있다.
- get 방식에서 물음표 뒤에 나오는 값을 express에서는 접근하는 방법은 요청(request)에 있는 쿼리를 통해 접근할수 있다. `req.query` => `{num1: "3", num2:"5"}` 이와 같은 형태로 담겨 있는 것을 확인 할수 있다.
- res.send에서 자바스크립트 변수를 사용하는 방법은
  - 쌍따옴표 안에 메세지를 적고 + 기호와 변수를 적어줘도 되고
  * 문자를 백틱으로 감싸고 자바스크립 변수명을 달러기호+중괄호를 사용할 수 있다.
- 응답이 가지고 있는 메세지 중에 send는 숫자를 보낼 수 없다. 때문에 다시 `res.send(String(result))` 문자열로 바꿔줘야 에러를 피할수 있다.

## Form Post방식

### 404에러 페이지

- form method를 post로 작성한다. 메인 페이지에서 인풋에 값을 입력하고 제출 버튼을 누르면 Cannot Post /calculator 인 것을 만들지 않았다는 내용이 출력된다. 또한 404에러도 뜨지 않는다. -> 이유는 get요청에만 404에러페이지를 만들었기 때문에 get과 post 방식 모두 에러 페이지를 표시 할때는 `app.all('*',(req,res)=>{ res.status(404).send(찾을수 없는 페이지)})` 로 표시한다.

### req.body 값 접근하기

- post요청은 get요청과 다르게 URL에 정보가 담겨져 있지 않다. Post요청의 본래 방식은 서버로 부터 메인페이지로 데이터를 보낼때 사용되는 방식으로 http구조에서 body라는 부분에 값이 담긴다.
- body를 express에서 접근하는 방법은 get요청에서 쿼리를 사용했던 것처럼 `req.body`를 통해서 접근을 할수 있다. ⚠ 그렇지만 undefined로 아무런 내용을 찾을수 가 없을 것이다.!!
- body를 사용하기 위해서는 bodyParser이라는 미들웨어를 사용해야한다. `app.use(express.urlencoded({extended: false}))` 라고 설정하면 http요청에서 body부분에 있는 내용을 express가 받아들일수 있게 된다.
- 다시 post요청을 확인해보면 body에 있는 내용이 출력 되는 것을 확인 할수 있다.
- get요청에서 했던 것처럼 `let result = Number(req.body.num1) + Number(req.body.num2)` 로 요청을 하면 정상 출력값을 확인 할수 있다.

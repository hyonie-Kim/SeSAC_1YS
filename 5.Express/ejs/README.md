# EJS 템플릿 엔진

- `npm i ejs --save`
- `app.set('view engine', 'ejs')` app.set을 통해서 템플릿 엔진을 설정한다.
- express에서 템플릿 엔진을 사용 할때 템플릿 엔진으로 만들어진 파일들은 views라는 폴더에 반드시 있어야한다.
- views폴더에 ejs 파일을 생성한다.

### `render()`

- sendFile(), send()로는 구현을 할수 없기 때문에 `render()`를 사용한다.
- `render()`는 템플릿 엔진으로 만 들어진 파일을 보여줄수 있고 템플릿엔진 파일에 자바스크립트 데이터를 넘겨 줄수도 있다.
- index.js코드에서 사용자가 루트("/") URL 접속을 했을 때 ejs 파일을 보여주고 싶을땐, res.render 그리고 파일명을 적어주면된다. `res.render("index")`

### 왜 EJS 템플릿 엔진을 사용하는지?

ejs파일은 HTML파일과 구조가 같다. 그런데 왜 ~~!?

1. HTML구조 내에서 인라인으로 자바스크립트 변수 혹은 자바스크립트 함수를 사용하는게 용이
2. 서버에서 보내는 데이터를 표현할수 있다.

### 클라이언트와 서버 데이터 주고 받기

index.js코드에서 render를 하는 동시에 데이터를 보내줄때, 파일명을 입력한 이후에 중괄호를 열고 오브젝트 데이터 형식으로 데이터를 보낼수 있다.

- 예를 들어 text라는 KEY로 "안녕하세요!!"를 보내면 index.ejs에서는 꺽새+퍼센트+이퀄 데이터의 키로 데이터를 표현할수 있다. `<h1><%= text %></h1>`

```javascript
app.get("/", (req, res) => {
  res.render("index", {
    text: "안녕하세요!!",
  });
});
```

### EJS 자바스크립트 문법 사용하기

- ejs에서는 꺽새와 퍼센트로 자바스크립트를 사용을 할수 있다.
- 만약에 이퀄을 제외를 하면 데이터는 가지고 있지만 사용자에게 표현은 해주지 않는다. `<h1><% text %></h1>`

```javascript
<body>
    <% if(flag){%>
    <h2>참 입니다.</h2>
    <% } else {%>
    <h2>거짓 입니다.</h2>
    <%}%>
</body>
```

- 예를 들어 서버에서 flag라는 KEY를 서버에서 보내면 `{flag:true}` 블리언 데이터의 값이 참인지 거짓인지 사용자에게 보여주는 영역을 제어 할수 있다.
- if문 뿐만 아니라 반복문도 사용 가능하다. index.js 코드에서 arrayData KEY에 배열을 담아서 보낸다. `{arrayData:[1,2,3]}` index.ejs에서는 ejs코드로 반복문 사용

### CSS 임포트

- public 폴더가 express static폴더 이기 때문에 js파일, css파일, 이미지 등은 현재폴더의 상태경로로 사용하면 된다.

### `<%- include('템플릿 파일 위치') -%> ` & `<%- include('header') -%>`

include를 통해서 레이아웃 설정을 할수 있다.

### `<%# 주석 %>`

# CRUD

게시글을 CRUD로 서비스를 구현할수 있는지 알아보자.

- index.ejs 파일은 현재 어떤 게시글들이 저장되어 있는지 보여주는 기능
- upload.ejs 파일은 게시글을 CREATE 하는 기능을 수행
- detail.ejs 파일은 게시글을 하나하나의 정보를 확인하는 기능

# NoSQL

mongodb atlas는 Json 형태로 저장할수 있는 NoSQL 데이터베이스

- 구글 검색창에 mongodb atlas 검색 > 접속 > Shared 무료버전사용 > Create User
- Connect > Connect your application > application code 복사

### `npm i dotenv --save`

- 개발 환경 변수를 직접 세팅을 해줄수 있는 라이브러리
- `.env` 파일 생성

### `npm i mongodb --save`

- 설치된 mongoDB를 어플리케이션에 불러온다. `MongoClient` 라는 이름으로 불러오고 mongodb에서 MongoClient를 가져온다.
- `const MongoClient = require("mongodb").MongoClient`
- MongoClient를 통해서 데이터베이스에 연결을 시도 할 예정이다.
- 이전에 서버에 listen 메서드를 통해서 연결을 시도 했는데, MongoClient에 데이터베이스를 연결을 하고 그 데이터 베이스가 성공적이라면 서버를 여는 방식으로 코드를 수정한다.

### `MongoClient.connect()`

- MongoClient에 connect 메서드를 통해서 MongoDB에 접근을 할수 있다.
- MongoDB에 연결 할 수 있는 URL값을 담아줘야한다.

```javascript
MongoClient.connect(MongoURL, (err, database) => {
  if (err) {
    console.log(err); //어떤 에러가 발생했는지 출력
    return; //함수를 끝냄
  } else {
    app.listen(port, () => {
      console.log(`서버포트번호:${port}`); //서버 열기
    });
    db = database.db("Express");
    post = db.collection("posts");
  }
});
```

**코드설명**

- MongoURL을 연결해주고, 두번째 함수에 인자를 두개를 받아준다. 첫번째는 에러가 발생했을때 err와 연결이 성공하면은 반환 할 database를 받아준다.
- db변수에는 데이터베이스를 받고 데이터베이스를 받을 때 다시 데이터베이스를 통해서 어떤 데이터베이스에 접근할지 선택해준다. `db=database.db("express")`
- post변수에는 db에 있는 콜렉션에서 어떤 콜렉션을 사용할 건지 선택할수 있다. 여기에서는 "post"라는 이름의 콜렉션을 사용한다.

**"db","post" 설명**

- MongoDB 클라이언트(MongoDB Atlas) 화면에서 Browser Collections 을 클릭한다.
  현재 어떤 데이터베이스가 생성 되어 있는지, 그리고 그 데이터베이스에는 어떤 콜렉션들이 담겨져 있는지 확인할수 있다.
- MongoDB의 데이터는 또는 문서들이 저장을 할 때는 데이터베이스에 콜렉션이라는 폴더에 문서가 저장이 된다.
- Express 데이터베이스에 posts라는 이름의 컬렉션을 만들어서 그쪽에 저장을 하겠다는 뜻

## CREATE - upload.ejs

### `post.insertOne()`

- post컬렉션을 들고와서 insertOne 메서드를 통해서 document를 저장할수 있다.
- insertOne은 중괄호를 통해서 object형태의 데이터를 담을수 있다.
- 예시로 제목이라는 KEY로 "test"라는 문자열을 저장하고 내용 KEY로 "test" 문자열을 저장하고
  날짜 KEY 로 자바스크립트 `new Data()`를 통해서 데이터를 넣어보도록 하겠다.
- 데이터가 잘 들어왔는지 REFRESH 클릭!!
- insertOne을 통해 document를 보내줄때 \_id 라는 KEY가 없으면 자동으로 MongoDB의 고유한 아이디 키를 만들어준다.
- insertOne은 실행이 되면 자바스크립트에서 Promise로 반환을 해준다.
- return value가 Promise를 통해서 오면 post.insertOne 명령이 끝난 이후에 .then을 통해서 실행 명령 이후에 일어날 행동을 정의할수 있다.

### `res.redirect()`

- 응답에 있는 redirect를 통해서 루트("/")URL로 보내기

## READ - 저장된 게시글 리스트 보여주기

### `post.find()`

- postData 로 값 보내주기
- 콜렉션에서 document를 찾는 메서드는 먼저, post 컬렉션을 불러온 뒤 find()를 통해 찾을수 있다.
- find() 안에 중괄호를 통해서 어떤 데이터를 찾을지 특정할수 있다.
- 아무런 조건도 주지 않으면 컬렉션 안에 들어있는 모든 document를 찾을수 있다.

```javascript
app.get("/", (req, res) => {
  post
    .find()
    .then((postData) => {
      res.render("index", { postData: postData });
    })
    .catch((err) => {
      console.log(err);
      res.render("index", { postData: [] });
    });
});
```

- post.find()를 통해서 post.find()가 되었을때 찾을 결과 값을 postData에 담는다.
- postData를 받아서 res.render로 "index.ejs"파일을 렌더링 시켜주면서 postData KEY로 find 메서드로 찾은 postData를 보내주면 된다.

### `toArray()`

- find()메서드는 return value로 프로미스를 주지 않는다. 커서라고 하는 MongoDB에서 사용하는 document 정보를 준다.
- document정보를 확인할수 있는 메서드는 toArray()이다. toArray()는 다시 프로미스를 반환한다.

## CREATE - custom 'id'부여하기

### `findOne()`

하나의 document만 찾을수 있다. 그리고 findOne에게 어떤 document를 찾을지 알려준다. `counter.findOne({name:"counter"})` name KEY로 counter 라는 value를 준 document를 찾는다.

- 커서로 반환하지않고 바로 프로미스로 반환하기 때문에 .then을 사용하면 된다.
- then에서 counterInfo라는 이름으로 받아서 post 컬렉션에 데이터를 저장할때, counterInfo에 postNum이라는 값을 post의 id에 저장한다.

### `findOneAndUpdate()`

- document를 하나 찾고 그 정보를 업데이트 시켜준다.
- 쿼리문을 두개 받는다. 첫번째 쿼리문은 어떤 document를 찾을지, 두번째는 값을 어떻게 수정할지를 받는다. `counter.findOneAndUpdate({name:"counter"},{$inc: {post:1}})`
  - `$inc`: 데이베이스 쿼리문 중에서 특정한 값을 증가또는 감소 시켜줄때 사용하는 연산자이다.
  * `$set`: 왼쪽에 있는 데이터를 오른쪽에 있는 데이터로 완전히 바꿔주는 set도 있다.
  - postNum의 값을 증가 시켜준다. 1만큼 증가 시켜준다. `$inc : {postNum:1}`

## READ - 게시글 정보 보여주기

- express에서는 자바스크립트 정규식과는 별개로 URL parameter를 사용할수 있다.
- post 다음에 콜론(:) 그리고 postNum 이라고 하면 post/ 다음에 어떤 문자열이 오든 해당 API규칙에 대응된다.

```javascript
app.get("/post/:postNum", (req, res) => {
  post.findOne({ _id: req.param.postNum }).then((doc) => {
    res.render("/detail", { postInfo: doc });
  });
});
```

- parseInt를 통해서 req.params에 있는 postNum을 숫자로 바꿔준다. `post.findOne({_id:parseInt(req.params.postNum)})`

# Moment

### `npm i moment --save`

### `const moment = require('moment')`

- 모멘트 라이브러리 불러오기

### `doc.date = moment(doc.date).format('MMMM Do YYYY, h:mm:ss a')`

- detail API 규칙에서 document에 데이터의 값을 현재 moment에 포맷을 시켜서 데이터를 보내준다.

### `moment.locale("ko")` Moment 한국어 셋팅

- 한국어로 기본 지역값 셋팅을 한다.
- 한국은 년월일 시간으로 표현한다. 포맷해주는 부분에서 양식을 변경한다.
- 시간은 HH 하면 24시간 기준으로 표현되고 초(ss)랑 오전/오후(a) 정보는 빼도록한다.

### express `res.locals`

- Express에서 locals메서드를 통해 렌더링 되는 파일에게 locals 변수를 전달을 해줄수 있다.

```javascript
app.use(function (req, res, next) {
  // Make `user` and `authenticated` available in templates
  res.locals.user = req.user;
  next();
});
```

- res.locals에 moment라는 이름으로 선언하고 셋팅했던 moment를 보내준다.
- 서버에서 원본 데이터를 수정해서 보내는 것이 아니라 서버에서는 원본데이터를 그대로 보내주고 detail.ejs는 서버로 부터 받은 moment 라이브러리를 통해 데이터를 보여주면 된다.

## 유저에게 수정 혹은 삭제 기능 제공

- 수정 혹은 삭제 기능을 detail.ejs에서 버튼으로 제공하려고한다.
- 예를 들어서 수정버튼 클릭시 수정할수 있어야하고, 삭제 버튼 클릭시 글을 삭제할수 있어야한다.
- 수정 버튼에 링크를 걸어서 URL규칙을 새로 만들어서 detail 페이지를 만들었던것처럼 수정하기 페이지를 만들면 된다.

# jquery/ajax

- ajax는 자바스크립과 XML을 이용해서 비동기적으로 정보를 교환하는 방법이다.
- jquery를 임포트 하는 것만으로 ajax를 사용할수 있다.

## jquery CDN

- https://releases.jquery.com/ 링크에서 jquery를 임포트 할 CDN주소를 확인한다.
- jQuery 3.x 버전에서 minified를 링크를 복사하여 head영역에 선언한다.

### ajax요청

- 수정하기/삭제하기 버튼을 클릭했을때 ajax요청을 진행한다.
- jQuery에서 어떤 특정한 HTML element가 선택되었다는 것을 알려주기 위해 버튼에 고유의 ID 또는 Class값을 부여한다.
- jQuery를 통해 특정한 HTML element를 선택하는 방법은 $기호 다음에 소괄호()를 열어주고 쌍다옴표 안에 Css선택자를 입력하면 된다.

### 수정/삭제 버튼 click이벤트

- `$("#test")` = `document.querySelector("#test")` 같은 동작을 수행한다.
- 이후 점으로 어떤 이벤트를 걸지 선택할수 있다.
- `$("#test").click(e)=>{e}` = `document.querySelector("#test").addEventListener("click",(e)=>{e})`

### $.ajax는 기능

- $.ajax는 호출해서 사용할수 있다. 인자로써 오브젝트 데이터를 받는다.
- 오브젝트 데이터 받는 데이터는
  - 첫번째는 `method:""`: 어떠한 방식으로 통신을 할것인지
  * 그리고 엔드포인트 KEY는 `url:""`로 받는다.
  - POST 통신을 보낼때 Body에 담는 내용이다. data라는 이름으로 데이터도 함께 보내줄수 있다. `data:{}`
- HTML Form과 다른점은 클라이언트에서 서버단으로 보내는 메서드는 크게 POST, GET, PUT, DELETE 4가지의 방법이 있다.
- HTML Form은 get요청이나 post요청 둘중 하나 밖에 선택을 하지 못한다. Ajax같은 경우에는 그런 제한 없이 원하는 메소드를 선택할 수 있다.
- `.done((res)=>{//요청이 성공했을때 수행할 코드})` 이후에 해야할일을 정의를 해야한다. 서버로 부터 받은 내용을 response에 담기게 된다.
- `.fail((xhr, status, err)=>{//요청이 실패했을때 수행할 코드})`요청이 실패할 경우

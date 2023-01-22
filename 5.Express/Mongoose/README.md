# Mongoose

- MongoDB에서 가장 많이 사용하는 ODM은 Mongoose이다.
- Mongoose의 공식 모델을 확인하면 "node.js를 위한 우아한 mongoDB 오브젝트의 모델링이다." 라고 설명되어 있다.
- Mongoose와 MongoDB의 가장 큰 차이점은 Mongoose에서는 스키마라는 것으로 데이터베이스에 저장될 document의 규격과 형태를 사전에 정의할 수 있다.
- 공식문서: https://mongoosejs.com/ 에서 공식 문서를 확인할수 있다.

## MongoDB연결 및 서버 확인

### `npm i mongoose --save`

### `const mongoose = require("mongoose")`

```javascript
mongoose
  .connect(MongosURL)
  .then(() => {
    console.log("Connecting MongoDB...");
    app.listen(port, () => {
      console.log(`${port} 연결성공`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
```

- mongoose.connect()를 통해서 데이터베이스 연결을 한다.
- 그리고 MongoURL을 넣어줘서 데이터베이스와 연결 할 수 있다.
- 성공적으로 연결 되었으면 then을 통해서 app.listen으로 서버를 열어준다.
- catch문을 통해 중간에 에러가 발생한다면 console.log로 err를 출력해준다.

## 스키마를 위한 새로운 폴더 만들기

- Model 폴더 생성
- Model/post.js 파일을 만들어서 post와 관련되 스키마를 정의한다.
- `const postSchema = new Schema()`: postSchema를 통해서 Mongoose 스키마를 정의를 해준다.
- 스키마가 하는 역할은 collection에 저장될 document의 형태를 미리 정의를 해주는 것이다.
- 스키마 옵션 중에서 timestamps가 있다. timestamps는 document가 언제 생성되고 언제 수정 되었는지 자동으로 데이터 값을 넣어주는 옵션이다. 스키마 중괄호 끝나는 부분에서 콤마(,)를 찍고 `{timestamps:true}`를 넣어주면 된다.
- 또 collection 이름도 정의해줄수 있다. `{timestamps:true, collection:"posts"}`

### `const Post = mongoose.model("Post", postSchema)`

- Post라는 이름으로 Posts collection에 접근해서 다양한 기능을 구현할수 있다.
- `module.exports={Post}`:Model폴더에 post.js에서 정의된 Post모델을 index.js에서도 사용할수 있도록 모듈로서 exports한다.
- `const {Post} = require("./Model/Post.js")`:index.js로 넘어가서 post.js에서 exports한 Model Post를 받아온다.

## "/post/upload"

- temp라는 임시 오브젝트를 만들어준다.
  1. `{title: req.body.title}`: title 이라는 KEY가 req.body에서 오는 title이다.
  2. `{content: req.body.content}`:content 는 req.body에서 오는 content이다.

### `findOne()`

- Counter모델을 들고와서 findOne({})을 사용한다. name이 counter인 것을 찾고 then에 찾은 counterInfo를 들고 와서 temp에 postNum이라는 KEY로 counterInfo가 들고있는 postNum에 값을 할당해준다.
- `const NewPost = new Post(temp)`:NewPost란 이름으로 new Post 모델을 들고와서 새로운 객체를 만들어준다. 그리고 그 객체에 대한 정보로서 임시 오브젝트 temp를 넣어준다.
- `NewPost.save()`:이름으로 콜렉션에 저장을 할수 있다.

### `.save()`

- 프로미스의 형태를 보장해준다.

### `.exec()`

- 이전함수가 실행되는 것을 보장한다

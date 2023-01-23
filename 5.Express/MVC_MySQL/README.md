# 쿼리문

## CREATE

### `"INSERT INTO 테이블이름(데이터이름) VALUES($값1, $값2)"`

- `"INSERT INTO visitor(name, comment) VALUES('${info.name}', '${info.comment}')"`

1. 쿼리문으로 데이터 추가하는 방법은 INSERT INTO에 어디에 데이터를 추가할 것인지 테이블 이름을 적어주면된다.
2. 테이블이름은 visitor이고, 소괄호 안에 어떤 데이터를 추가할 것인가 입력한다. name, comment를 추가하겠다.
3. 그리고 name과 comment의 값은 무엇인지 VALUES 뒤따라오는 배열에 첫번째 값과 두번째 값을 넣어준다.
4. cnn.query()을 들고와서 쿼리문을 날리면 된다.
5. 쿼리문은 sql에 정의되어 있고 err, result 를 받아준다. 만약에 err가 발생한다면 에러를 찍어주고,
6. 에러가 발생을 하지않으면 결과를 보내준다.

### `"SELECT * FROM 테이블이름"`

- `"SELECT * FROM visitor"`

1. 엑셀처럼 생긴 테이블에서 데이터가 담겨져 있는건 row 행이다. 테이블에서 행의 데이터를 선택하는 건 SELECT를 통해 선택할 수 있다. 모든 행(\*)을 선택을 할 것이다.
   - 특정한 행을 선택하고 싶을 땐, `WHERE`로 조건을 달수 있다.
2. FROM 어떤 테이블을 선택할지 테이블 이름을 적어주면 된다.
3. 이후에 cnn.query() 쿼리문을 날려주면 된다. 내용은 sql에 저장되어 있고 에러와 결과를 보내주면된다. 그리고 rows 값을 찍어본다.

## READ

- `"SELECT * FROM 테이블이름 WHERE 조건 = 첫번째데이터"`

1. SELECT \* 로 모든 데이터를 선택을 하고 FROM 어디로 부터 받을지 테이블을 선택한다.
2. 특정한 row의 데이터만 가져온다면 그 조건을 WHERE로서 정의를 할 수 있다.
3. 예시로 Post_ID 가 뒤 따라오는 배열의 첫번째 데이터($1) 인것을 선택한다.

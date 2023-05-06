// array
var 성별 = ["여자", "남자"];
// object
var 나이 = { age: 10 };
// 다양한 타입이 들어올수 있게 Union type
var 사람 = "kim";
var 새싹 = 123;
// 함수 타입지정
// 파라미터로 number, return 값으로 number
function 함수(x) {
  return x * 2;
}
var hyonie = [123, true];
var kim = { name: "sehyeon" };
// class 타입 지정
var User = /** @class */ (function () {
  function User(name) {
    this.name = name;
  }
  return User;
})();

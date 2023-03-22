// array
let 성별 = ["여자", "남자"];
// object
let 나이 = { age: 10 };
// 다양한 타입이 들어올수 있게 Union type
let 사람 = "kim";
let 새싹 = 123;
// 함수 타입지정
// 파라미터로 number, return 값으로 number
function 함수(x) {
    return x * 2;
}
let hyonie = [123, true];
let kim = { name: "sehyeon" };
// class 타입 지정
class User {
    constructor(name) {
        this.name = name;
    }
}

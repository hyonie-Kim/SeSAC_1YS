// array
let 성별: string[] = ["여자", "남자"];

// object
let 나이: { age: number } = { age: 10 };

// 다양한 타입이 들어올수 있게 Union type
let 사람: string | number = "kim";

// 타입은 변수에 담아 쓸수 있음  Type alias
// 타입 작명은 대부분은 대문자
type MyType = string | number;

let 새싹: MyType = 123;

// 함수 타입지정
// 파라미터로 number, return 값으로 number
function 함수(x: number): number {
  return x * 2;
}

// array에 쓸수 있는 tuple타입
// 무조건 첫번째는 number, 두번째는 boolean
type Me = [number, boolean];
let hyonie: Me = [123, true];

type Member = {
  name: string;
};

let kim: Member = { name: "sehyeon" };

// class 타입 지정
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

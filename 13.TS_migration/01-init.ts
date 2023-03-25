// 변수
// 키워드 변수 이름:타입 = 값
// 타입표기 (type annotation)

const srt: string = "String";
const num: number = 1;
const bool: boolean = true;

// object
// 오브젝트는 변수..
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["a", "w", "e"];
const arr3: Array<number> = [1, 2, 3];

//console.log(arr2[0].concat("!"));

// tuple- 길이가 고정되고 바꿀수 없음
const arr4: [boolean, string] = [true, "a"];

// enum - 특정값을 열거하는 것 . 집합안에 글자만 들어갈수있음
enum Names {
  sesac,
  새싹,
}
const name1: Names = Names.sesac;

// any - 최대한 사용을 안하는 것이  좋다.
// 모든 타입에 대해서 허용한다

const any1: any = [1, 2, 3];

// void - undefined와 null만 들어갈수 있는 타입
const var1: void = undefined;

// naver - 절대 끝에 도달하지않는
function naverEnd(): never {
  while (true) {}
}

////////////////////////////////// 함수
// ( 매개변수: type)
// 매개변수에 타입을 지정하는것은 변수에 타입을 지정하는 것과 동일하다.

// function 함수이름(매개변수:type) : 반환타입{}
function sum1(a: number, b: number): number {
  return a + b;
}

console.log(sum1(1, 2));
//console.log(sum1("1", 2));

function sum2(a: number, b?: number): number {
  if (b == undefined) return a;
  else return a + b;
}
sum2(1);
sum2(1, 2);

// interface
interface Student {
  name: string;
  age: number;
  nickname?: string; //닉네임은 필수가 아닐떄
}
const student1: Student = {
  name: "이름1",
  age: 10,
};

const student2: Student = {
  name: "이름2",
  age: 20,
  nickname: "닉네임2",
};

function check(stu: Student) {
  console.log(stu.name);
}

check(student1);
check(student2);

// class 클래스이름 {
//     변수명: 타입;
//     constructor(변수:타입){
//         this.변수명 = 변수
//     }
// }

class Person {
  id: string;
  constructor(name: string, age: number) {
    this.id = name + age;
  }
}
const person1 = new Person("이름3", 30);
console.log(person1.id);

interface Shape {
  width: number;
  getLength(): number;
}
class Square implements Shape {
  readonly width: number; //리드온니 ??
  height: number;
  getLength(): number {
    return this.width;
  }
}

// 제네릭 (Generic) <T> - 하나를 만들고 재사용할수 잇다.
function getText<T>(text: T): T {
  return text;
}

console.log(getText<string>("a"));
console.log(getText<number>(1));

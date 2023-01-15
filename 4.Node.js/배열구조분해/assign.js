let list = ["apple", "banana"];
let lists = ["apple", "grape"];

// 배열 분해 - 배열안의 내용을 해체
[item1, item2, item3 = "peach"] = lists;
console.log("item1", item1);
console.log("item2", item2);
console.log("item3", item3);

[fruit1, fruit2] = list;
// let item1 = list[0];
// let item2 = list[1];

[fruit1, fruit2 = "peach", fruit3 = "orange"] = list;

console.log("fruit1", fruit1);
console.log("fruit2", fruit2);
console.log("fruit3", fruit3);

let x = 1;
let y = 3;

// x,y 값을 배열로 만들겠다.
[y, x] = [x, y];

console.log("x ,y값:", x, y);
[1, 3];
[s, h] = [1, 3];
console.log("s, h값", s, h);

// 객체 구조분해

let obj = {
  a: "one",
  b: "two",
  e: "1",
  f: "2",
};
// let a = obj.a;
let { a, b: key1, c = "three" } = obj;
console.log("a는?", a);
console.log("key1?", key1);
console.log("c는?", c);

// (...)전개연산자
// 나머지를 다가져옴

let { b, ...rest } = obj;
console.log("b는?", b);
console.log("rest:", rest);

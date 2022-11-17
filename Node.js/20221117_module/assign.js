let list = ['apple', 'bnana'];

// 배열 분해
// 배열안의 내용을 해체

[item1, item2] = list;
// let item1 = list[0];
// let item2 = list[1];

[item1, item2='peach', item3='orenge'] = list;

console.log(item1);
console.log(item2);
console.log(item3);


let x = 1; 
let y = 3;

// x,y 값을 배열로 만들겠다.
[y,x] = [x,y]
// [1, 3];
// [a, b] = [1, 3];

// 객체 구조분해

let obj = {
    a : 'one',
    b : 'two',
    e : '1',
    f : '2'
};
// let a = obj.a;
let {a, b:key1, c = 'three'} = obj;
console.log(a);
console.log(key1);
console.log(c);

// (...)전개연산자
// 나머지를 다가져옴

let {b, ...rest} = obj;
console.log(b);
console.log(rest);

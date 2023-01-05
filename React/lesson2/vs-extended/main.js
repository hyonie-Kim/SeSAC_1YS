// const x = 1;
// console.log(x);

// @ts-check

// const str = 3;
// const num = Math.log(str);
// console.log(num);
// ==================================================================
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// console.log(...arr);

// 메모리 주소가 복사됨
// const copyArr = arr;
// console.log(copyArr);

// console.log(arr === copyArr);

// 전개연산자를 사용하면 확인 가능 값만 복사함
// const copyArr = [...arr];
// console.log(copyArr);

// console.log(arr === copyArr);
// ==================================================================

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};
console.log({ ...obj });

// const copyObj = obj;
const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);

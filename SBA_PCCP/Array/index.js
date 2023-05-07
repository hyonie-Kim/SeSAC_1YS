const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5); // 5개의 요소 초기화
const arr6 = Array.from(Array(5), function (v, k) {
  // 배열의 값, 인덱스
  return k + 1;
});

console.log("arr3.length:", arr3.length);
arr3.length = 10;
console.log("arr3:", arr3);

// join함수 - 배열을 하나의 문자열로 합침
console.log("join:", arr3.join(", "));

// reverse - 모든 배열을 거꾸로 돌려줌
const arr7 = [1, 2, 3, 4, 5];
console.log("reverse:", arr7.reverse());

// concat - 배열 합치기
const arr8 = [1, 2, 3, 4, 5];
const arr9 = [6, 7, 8, 9, 10];
console.log("concat:", arr8.concat(arr9));

// push, pop 함수 - 배열의 끝부분을 추가/삭제
arr9.push(11);
arr9.push(11, 12);
console.log("push함수로 끝부분 11,11,12 추가:", arr9);
arr9.pop();
arr9.pop();
console.log("pop함수로 배열의 끝부분 삭제:", arr9.pop());
console.log("arr9:", arr9);

// shift,unshift - 첫번째 요소 제어, shift-0번과 1번 인덱스 삭제
arr8.shift();
arr8.shift();
console.log("arr8변수에 0,1번 인덱스 삭제:", arr8);
arr8.unshift(10);
console.log("arr8변수에 10 추가:", arr8);

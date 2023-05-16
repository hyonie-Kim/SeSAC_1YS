// 7개수 세기

function solution(array) {
  var answer = 0;

  const arr = array.toString();
  //   for (let i = 0; i < array; i++) {}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 7) {
      answer += 1;
    }
  }
  return answer;
}
const array = [7, 77, 17];
console.log(solution(array));

// 방법2
// for (var i = 0; i < array.length; i++) {
//   var newArray = array[i].toString();
//   for (var j = 0; j < array[i].length; j++) {
//     if (newArray[j] == "7") {
//       answer++;
//     }
//   }
// }

// 문자열 정렬하기
function solution2(my_string) {
  //   var answer = [];
  var regex = /[^0-9]/g;

  var result = my_string.replace(regex, "");
  const str = String(result);
  const numArray = (e) => Number(e);
  const arr = Array.from(str, numArray);
  return arr.sort();
}

const my_string = "hi12392";
console.log(solution2(my_string));

// sort() 사용 금지
// 숫자 배열을 직접 오름차순으로 정렬하기
// [1,2,3,7,9]
// 버블정렬 공부하기
var arr = [2, 3, 1, 9, 7];

function solution3(arr) {
  var queArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      queArray.push(arr[i]);
    } else {
      arr.shift();
    }
  }

  return queArray;
}
console.log(solution3(arr));

// 연속된 수의 합
function solution8(num) {
  var answer = [];

  for (let i = 0; i < num; i++) {
    answer = console.log(num[i]);
  }

  return answer;
}

let num = 3;

console.log(solution8(num));
